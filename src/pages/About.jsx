import React from "react";

export default function About() {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark is dedicated to making parking easier, smarter, and more enjoyable for everyone. We design simple, secure, and intuitive experiences that reduce the everyday stress associated with finding parking.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We are a team based at <span className="font-bold">NIT Calicut</span>, passionate about leveraging technology to solve real-world problems. Our mission is to build innovative, scalable solutions that improve how people interact with urban infrastructure and public spaces.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark began as a collaborative initiative with the <span className="font-bold">Kozhikode City Police</span>, aimed at easing parking-related challenges during large-scale public events such as the <span className="font-bold">Beypore Water Fest</span>. The goal was simple: help visitors quickly find available <span className="font-bold">parking locations</span> and <span className="font-bold">real-time vacant parking spots</span>, reducing congestion and confusion.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          To achieve this, we deployed BeyPark across two <span className="font-bold">platforms</span>:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
          <li><span className="font-bold">The BeyPark mobile application</span>, available for download via the link above</li>
          <li>This web platform, which provides a live view of parking locations and their respective availability</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Methodology</h2>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark operates on a straightforward yet effective principle: tracking vehicle entry and exit at parking lots. Using a lightweight <span className="font-bold">AI-based vehicle detection model</span>, we monitor vehicles passing through parking gates. This allows us to accurately maintain a real-time count of <span className="font-bold">occupied</span> and <span className="font-bold">available parking slots</span> for each location.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          By combining edge-based AI, real-time data processing, and a user-friendly interface, BeyPark delivers reliable parking information with minimal infrastructure overhead.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Team & Guidance</h2>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark is developed under the guidance of <span className="font-bold">Dr. Munavar Fairooz C.</span>, <span className="font-bold">Dr. Harikrishna M.</span>,  and <span className="font-bold">Dr. Nishant Mukund Pawar</span> with a core team comprising <span className="font-bold">Arun Natarajan</span>, <span className="font-bold">Hafeez Muhammed</span>, <span className="font-bold">Kamble Aditya Dattatray</span>, <span className="font-bold">Aadil Krishna K.</span> [B.Tech Computer Science and Engineering], <span className="font-bold">Abhina</span>, and <span className="font-bold">Abhiram</span>, bringing together expertise in software engineering, AI, system design, and real-world deployment.
        </p>
      </div>
    </section>
  );
}