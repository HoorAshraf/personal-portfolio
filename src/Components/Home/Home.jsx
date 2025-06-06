import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden px-6 md:px-16"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('back.jpg')] bg-cover bg-center opacity-10 z-0" />

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm px-4 py-1 rounded-full mb-4 inline-block shadow-lg">
            Frontend React Developer
          </span>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="text-pink-600">Hour Ashraf</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
          I am a <span className="text-pink-500 font-semibold">Frontend Developer</span> specializing in 
          <span className="text-pink-500 font-semibold"> React.js</span>. Passionate about building modern, 
          user-friendly web applications while continuously learning and staying up to date with the latest technologies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://linkedin.com/in/hour-ashraf-53330826a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 hover:bg-pink-800 hover:text-white text-gray-800 font-medium py-2 px-6 rounded-lg shadow transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HoorAshraf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-800 text-white font-medium py-2 px-6 rounded-lg shadow transition duration-300"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative rounded-full border-[6px] border-pink-500 p-1 shadow-lg hover:scale-105 transition duration-300">
            <img
              src="profile.jpg"
              alt="Hour Ashraf"
              className="w-80 h-80 object-cover rounded-full"
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 blur-xl opacity-30 z-[-1]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
