import { getAuth, signInAnonymously } from "firebase/auth";
import { ref, set, onValue, onDisconnect, runTransaction, serverTimestamp, get } from "firebase/database";
import { db } from "./Firebase";

import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Optionally, if you need auth, initialize it with the existing app
import { getAnalytics } from "firebase/analytics";

import.meta.env; // Ensures Vite env variables are loaded

let app;
if (!getApps().length) {
  // This should never run if Firebase.js is imported first, but is a safe fallback
  app = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  });
} else {
  app = getApps()[0];
}

const auth = getAuth(app);

export function useUserStats() {
  const initializeUserStats = async () => {
    try {
      let user = auth.currentUser;

      // 1. Anonymous Sign-in
      if (!user) {
        const cred = await signInAnonymously(auth);
        user = cred.user;
        await trackNewUser(user.uid);
      }

      if (user) {
        trackPresence(user.uid);
      }
    } catch (error) {
      console.error("Firebase Stats Error:", error);
    }
  };

  const trackNewUser = async (uid) => {
    const userRef = ref(db, `users/${uid}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      await set(userRef, {
        created_at: serverTimestamp(),
        platform: "web",
      });

      const uniqueRef = ref(db, 'stats/web/unique_count');
      await runTransaction(uniqueRef, (count) => (count || 0) + 1);
    }
  };

  const trackPresence = (uid) => {
    const connectionsRef = ref(db, `connections/web/${uid}`);
    const lastOnlineRef = ref(db, `last_online/${uid}`);
    const connectedRef = ref(db, ".info/connected");

    onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        onDisconnect(connectionsRef).remove();
        onDisconnect(lastOnlineRef).set(serverTimestamp());

        set(connectionsRef, true).then(() => {
          updatePeakCount();
        });
      }
    });
  };

  const updatePeakCount = async () => {
    const connectionsRef = ref(db, 'connections/web');
    const snapshot = await get(connectionsRef);
    
    if (snapshot.exists()) {
      const currentLiveCount = Object.keys(snapshot.val()).length;
      const maxRef = ref(db, 'stats/web/max_concurrent');
      
      await runTransaction(maxRef, (max) => {
        if (currentLiveCount > (max || 0)) return currentLiveCount;
        return; 
      });
    }
  };

  return { initializeUserStats };
}