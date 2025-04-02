"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ExploreSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const categories = [
    {
      title: "Physics",
      description: "Explore Rectilinear Motion, Cannonball Motion and more.",
      href: "/simulations/physics",
      bgColor: "from-pink-100 to-pink-300",
      textColor: "text-sky-700",
      hoverBg: "hover:from-pink-200 hover:to-pink-400",
    },
    {
      title: "Mathematics",
      description: "Explore Quadratic Equations, Trigonometric and more.",
      href: "/simulations/mathematics",
      bgColor: "from-teal-100 to-teal-300",
      textColor: "text-green-700",
      hoverBg: "hover:from-teal-200 hover:to-teal-400",
    },
    {
      title: "Chemistry",
      description: "Explore Periodic Table, Hydrogen Spectrum and more.",
      href: "/simulations/chemistry",
      bgColor: "from-purple-100 to-purple-300",
      textColor: "text-red-700",
      hoverBg: "hover:from-purple-200 hover:to-purple-400",
    },
  ];

  return (
    <section
      className="py-20 bg-white text-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor Effect */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-500 bg-opacity-10 blur-3xl rounded-full pointer-events-none"
        animate={{
          x: mousePos.x - 64,
          y: mousePos.y - 64,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      />

      {/* Animated Heading */}
      <motion.h2
        className="text-5xl font-bold tracking-tight mb-6 text-gray-900 cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 1 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } ,color: "#374151" }}
      >
        Explore Our{" "}
        <span
          className="text-blue-600"
          // whileHover={{ scale: 1.1, color: "#1e40af" }}
        >
          Simulations
        </span>
      </motion.h2>

      {/* Animated Subheading */}
      <motion.p
        className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 1 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } ,color: "#374151" }}
      >
        Dive into interactive simulations that bring complex concepts to life <br />
        in a fun, engaging, and intuitive way.
      </motion.p>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <Link key={index} href={category.href} aria-label={`Explore ${category.title} simulations`}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className={`group block p-8 bg-gradient-to-tr ${category.bgColor} ${category.hoverBg} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <motion.h3
                className={`text-2xl font-semibold ${category.textColor} group-hover:underline cursor-pointer`}
                whileHover={{ scale: 1.05, color: "#1e40af" }}
              >
                {category.title}
              </motion.h3>
              <motion.p
                className="text-gray-700 mt-3 cursor-pointer"
                whileHover={{ scale: 1.02, color: "#374151" }}
              >
                {category.description}
              </motion.p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
