import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = {
  freshcart: {
    title: "🛒 FreshCart – E-Commerce Web App",
    description: `FreshCart is a modern e-commerce platform designed using React, Vite, and Tailwind CSS. It offers users a seamless shopping experience with features like secure login, cart and wishlist, checkout flow, and API integration for products and categories.`,
    features: [
      "✅ User authentication",
      "📦 Product list, filtering by brand and category",
      "🛒 Cart and wishlist management in real time",
      "📱 Mobile responsive layout",
      "⚡ Built with Vite for optimal performance",
    ],
    tech: ["React.js", "Vite", "Tailwind CSS", "React Router", "Axios"],
   
  },

  meals: {
    title: "🍽️ Meals Project – Recipe Browser",
    description: `A recipe app using The Meal API with filters by area, ingredient, or category. Users can explore meals, view full recipes, and search dynamically. Built with SCSS and TypeScript for structure and styling.`,
    features: [
      "🔍 Filter by area, ingredient, or category",
      "📋 View complete recipe instructions",
      "💡 Live search suggestions",
      "💻 Mobile-first responsive UI",
      "⚛️ Modular components & custom hooks",
    ],
    tech: ["React", "TypeScript", "SCSS", "React Router", "The Meal API"],
  
  },

  crud: {
    title: "🗂️ CRUD Manager – Data System",
    description: `A local CRUD app for managing user data. Uses React and Tailwind CSS with local storage to persist data. Form validation and clean interaction model ensure great UX.`,
    features: [
      "📝 Add, edit, and delete data locally",
      "📦 LocalStorage data persistence",
      "✅ Form validation",
      "📱 Responsive layout with utility-first design",
    ],
    tech: ["React", "Tailwind CSS", "LocalStorage", "Formik", "Yup"],
    liveUrl: "https://hoorashraf.github.io/CRUD-PROJECT/",
  },

  weather: {
    title: "🌤️ Weather App – Forecast Finder",
    description: `A simple weather app to find real-time forecasts by city name using a public weather API. Includes dynamic theming and dark mode.`,
    features: [
      "🌍 Search by any city",
      "📈 Real-time forecast results",
      "🌙 Dark mode toggle",
      "📱 Clean responsive layout",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Weather API"],
    liveUrl: "https://hoorashraf.github.io/wheather-project/",
  },

  smart: {
    title: "🔐 Smart Login System",
    description: `A modern login and register system with validation, error handling, and local storage for authentication tokens.`,
    features: [
      "🔑 Login and register pages",
      "📦 LocalStorage token system",
      "🚫 Client-side validation",
      "🧪 Simple UI with clean logic",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://hoorashraf.github.io/smart-LOGIN/",
  },

  games: {
    title: "🎮 Game Reviews Platform",
    description: `Users can browse and explore video games by category. Displays ratings, filters, and modern layout with dynamic rendering.`,
    features: [
      "🧩 Browse games by genre",
      "⭐ Dynamic ratings",
      "🖼️ Game image previews",
      "📱 Responsive grid layout",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://hoorashraf.github.io/games-Review/",
  },

  alex: {
    title: "🎨 Alex Smith Portfolio",
    description: `A personal portfolio showcasing services, projects, testimonials, and contact form. Created with Tailwind CSS and minimal JS for performance.`,
    features: [
      "🖼️ Animated sections",
      "📱 Fully responsive design",
      "📬 Contact form ready",
      "💡 Section-based layout (Home, About, Services)",
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://hoorashraf.github.io/portfolio/",
  },

  larry: {
    title: "📸 Daniels – Personal Portfolio Website",
    description: `A beautiful, scroll-based portfolio built with Bootstrap. Full-page sections, animated scroll effects, and clean UI to showcase creative work.`,
    features: [
      "📜 Smooth scroll transitions",
      "🧑‍🎨 Project and gallery sections",
      "🎯 Full-screen hero with call-to-action",
    ],
    tech: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://hoorashraf.github.io/bootstrap-project/",
  },

  bakery: {
    title: "🍞 Family Bakery – Business Landing Page",
    description: `A handcrafted landing page for a bakery. Cozy visuals, featured items, about section, and gallery – fully responsive.`,
    features: [
      "🧁 Custom layout for a local business",
      "📸 Visual gallery and product section",
      "📱 Responsive hero + contact section",
    ],
    tech: ["HTML", "CSS"],
    liveUrl: "https://hoorashraf.github.io/bakery/",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="text-center mt-32 text-red-600 text-2xl font-semibold animate-pulse">
        🚫 Project not found
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-white to-purple-50 px-6 py-20 md:px-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-10 border border-gray-200"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>

        <p className="text-gray-700 text-lg mb-8 whitespace-pre-line leading-relaxed">
          {project.description}
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mb-3">🔑 Key Features</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700 mb-3">🧰 Technologies Used</h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700 font-medium border"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
          >
            <ExternalLink size={18} />
            View Live
          </a>
        )}

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 font-medium py-2 px-6 rounded-md"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetails;
