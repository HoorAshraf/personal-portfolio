import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-gray-900">ABOUT ME</h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto my-4"></div>
        <p className="text-gray-600 text-lg mt-3 tracking-wide leading-relaxed">
          Discover more about my expertise, projects, and the technologies I work with.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-14 flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        {/* Left - Introduction */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800">👋 Get to know me!</h3>
          <p className="text-gray-700 mt-4 leading-relaxed">
            I'm a passionate <span className="font-semibold">Frontend Web Developer</span> specializing in
            <span className="text-pink-500 font-semibold"> React.js</span>, crafting modern and user-friendly web applications.
            My focus is on <strong>clean, scalable code</strong> and enhancing user experience.
          </p>
          <p className="text-gray-700 mt-4">
            I actively contribute to the developer community and share my projects on:
          </p>
          <div className="mt-4 flex gap-6">
            <a
              href="https://github.com/HoorAshraf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/hour-ashraf-53330826a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
          </div>
          <p className="text-gray-700 mt-6">
            I'm open to <strong>Job Opportunities</strong> where I can grow, contribute, and enhance my skills.
            If you have an exciting opportunity, feel free to{" "}
            <a href="#contact" className="text-pink-500 font-semibold hover:underline">
              contact me
            </a>.
          </p>

          {/* ✅ Download CV Button */}
          <div className="mt-6">
            <a
              href="HourAshrafMohamedResume (3).pdf" 
              download
              className="inline-block bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg mt-3 hover:bg-pink-600 transition duration-300"
            >
              📄 Download CV
            </a>
          </div>
        </div>

        {/* Right - Skills */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center md:text-left">🚀 My Skills</h3>
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
              "Tailwind CSS", "Bootstrap", "Git", "Github", "Responsive Design", "Sass", "Axios"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-500 hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
