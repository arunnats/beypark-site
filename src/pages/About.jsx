import React from "react";

export default function About() {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark is dedicated to making parking easier and more enjoyable for
          everyone. We design simple, secure, and beautiful experiences for our
          users.
        </p>
        <p className="text-lg text-gray-700">
          We are a team based in NIT Calicut, passionate about leveraging
          technology to solve everyday problems. Our mission is to create
          innovative solutions that enhance the way people interact with their
          environment.
        </p>
      </div>
    </section>
  );
}