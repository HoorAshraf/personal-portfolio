import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-wide">
          Contact
        </h2>
        <div className="w-16 h-1 bg-pink-600 mx-auto mt-4 rounded-full" />
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
          Feel free to contact me through the info below, and I’ll get back to
          you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
        <div className="flex items-center gap-4 text-gray-800 hover:scale-105 transition-transform">
          <div className="bg-purple-100 p-4 rounded-full shadow-sm">
            <FaPhoneAlt className="text-pink-600 text-xl" />
          </div>
          <span className="text-lg font-semibold">+971 501940290</span>
        </div>

        <div className="flex items-center gap-4 text-gray-800 hover:scale-105 transition-transform">
          <div className="bg-purple-100 p-4 rounded-full shadow-sm">
            <HiOutlineMail className="text-pink-600 text-2xl" />
          </div>
          <span className="text-lg font-semibold">
            hoorashraff66@gmail.com
          </span>
        </div>
      </div>

      <footer className="mt-20 text-center text-sm text-gray-500 border-t pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-700">Hour Ashraf</span>. All
          rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
