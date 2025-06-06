import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const projects = [
    {
      id: "freshcart",
      image: "image.png",
      title: "🛒 FreshCart – E-Commerce Web App",
      description:
        "A modern and responsive e-commerce platform built with React, Vite, and Tailwind CSS. It allows users to browse products, manage their cart, create accounts, and complete secure checkouts. Integrated with a live API for seamless product, user, and cart management.",
    },
    {
      id: "meals",
      image: "meals.jpg",
      title: "🍽️ Meals Project – Recipe Browser",
      description:
        "A React-based food recipe app built with TypeScript and SCSS. Users can browse meal categories, explore ingredients, and view recipes from The Meal API. Responsive layout, modular components, and clean UI.",
    },
    {
      id: "crud",
      image: "crud.png",
      title: "🗂️ CRUD Manager – Data Management System",
      description:
        "A functional CRUD app using React and Bootstrap. It supports local storage for persisting data, allowing users to create, edit, and delete records. Built for form validation and real-world interaction.",
    },
    {
      id: "weather",
      image: "weather.png",
      title: "🌤️ Weather App – Live Forecast Finder",
      description:
        "A responsive weather app using the Weather API, allowing users to search cities and view real-time weather stats. Built with HTML, CSS, and JavaScript, featuring dynamic rendering and a dark UI theme.",
    },
    {
      id: "smart",
      image: "smart.png",
      title: "🔐 Smart Login System",
      description:
        "A modern login system built using HTML, CSS, and JavaScript. Features validation, error handling, and local storage for user sessions. Clean dark UI and minimal user flow.",
    },
    {
      id: "games",
      image: "games.png",
      title: "🎮 Game Reviews Platform",
      description:
        "A dynamic game review platform built using HTML, CSS, and JavaScript. Users can explore games by category, view game details, and enjoy responsive UI with real-time filtering.",
    },
    {
      id: "alex",
      image: "alex.png",
      title: "🎨 Alex Smith Portfolio",
      description:
        "A personal portfolio site created using HTML and Tailwind CSS. Includes sections like Services, Projects, and Testimonials. Fully responsive with modern animations and sleek dark theme.",
    },
    {
      id: "larry",
      image: "larry.png",
      title: "📸 Daniels – Personal Portfolio Website",
      description:
        "A stunning portfolio website designed using HTML, CSS, and Bootstrap. Smooth transitions, responsive full-screen sections, and a clean layout highlight professional branding.",
    },
    {
      id: "bakery",
      image: "bakery.png",
      title: "🍞 Family Bakery – Business Landing Page",
      description:
        "A handcrafted bakery website built with pure HTML and CSS. Features beautiful hero section, gallery, and about page tailored for local businesses. Fully responsive with cozy visual aesthetic.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide uppercase">
          Projects
        </h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto my-4 rounded-full"></div>
        <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
          Explore a selection of my featured web development projects showcasing different tools, stacks, and styles.
        </p>
      </div>

      {projects.map((project, index) => (
        <Tilt
          key={project.id}
          glareEnable
          glareMaxOpacity={0.2}
          glareColor="#f9a8d4"
          glarePosition="all"
          scale={1.02}
          transitionSpeed={1500}
        >
          <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md mb-14 hover:shadow-xl transition duration-300"
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 border-l-4 border-pink-500 pl-3">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {project.description}
              </p>

              <Link
                to={`/project/${project.id}`}
                className="inline-block mt-5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </section>
  );
};

export default Projects;
