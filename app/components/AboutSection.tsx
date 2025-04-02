"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [dropEffect, setDropEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDropEffect(false);
      setTimeout(() => setDropEffect(true), 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const founders = [
    {
      name: "Ashok Kumar",
      image: "/All_Images/AboutPage/ashok.jpg",
      linkedin: "https://www.linkedin.com/in/ashok-kumar-233613202",
    },
    {
      name: "Tara Chand Yadav",
      image: "/All_Images/AboutPage/tara.jpg",
      linkedin: "https://www.linkedin.com/in/tara-chand-yadav-3969031b5/",
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-10 px-4 bg-gray-50 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 cursor-pointer relative"
          whileHover={{ scale: 1.08, color: "#4338CA" }}
        >
          {"Meet the Creators".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="relative inline-block mx-2">
              {word.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
              {word === "Creators" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600"></div>
              )}
            </span>
          ))}
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-16 mb-12"
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}
        >
          {founders.map((person, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-white rounded-full shadow-lg overflow-hidden border-4 border-gray-300">
                <Image
                  src={person.image}
                  alt={`Picture of ${person.name}`}
                  fill
                  priority={index === 0}
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <div className="mt-2">
                <p className="text-base sm:text-lg font-semibold">{person.name}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${person.name}'s LinkedIn Profile`}
                  className="inline-flex items-center gap-2 text-indigo-600 hover:underline transition"
                >
                  <Image
                    src="/All_Images/AboutPage/linkedin_icon.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    loading="lazy"
                    className="hover:opacity-80 transition-opacity"
                  />
                  <span>Connect</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Hey, We’re <span className="font-semibold text-indigo-600">Ashok Kumar</span> and 
            <span className="font-semibold text-indigo-600"> Tara Chand Yadav</span>, alumni of 
            <span className="font-semibold text-indigo-600"> NIT Rourkela</span> and the 
            <span className="font-semibold text-indigo-600"> founders</span> of 
            <span className="font-semibold text-indigo-600"> ThinkViL</span>. During our JEE preparation, we struggled with physics concepts requiring deep visualization. This challenge led Ashok to create <span className="font-semibold text-indigo-600">ThinkViL</span>, and Tara Chand joined as a co-founder to develop a platform where students can explore science and mathematics through <span className="font-semibold text-indigo-600">interactive simulations</span>.
          </p>
          <p>
            ThinkViL helps educators simplify complex topics and makes learning fun for students. If you find our simulations helpful, consider supporting us with a <span className="font-semibold text-indigo-600">donation</span>. Your contribution helps us create more high-quality content for free or at the most affordable price.
          </p>
          <p>
            Share your feedback at <span className="font-semibold text-indigo-600">contact.thinkvil@gmail.com</span>.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/donate">
            <span className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl font-bold bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-800 transition cursor-pointer focus:ring-4 focus:ring-indigo-300 hover:text-black">
              Support Us
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
