"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.08, duration: 0.1 },
    }),
    hover: {
      y: [0, -6, 0],
      transition: { duration: 0.1, repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <section id="about" className="py-2 bg-gray-50 text-gray-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 cursor-pointer relative transition-colors duration-300"
          whileHover={{ scale: 1.08 }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Meet the Creators Animation */}
          {"Meet the Creators".split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={letterVariants}
              className={`text-blue-${index % 2 === 0 ? "800" : "600"} transition-colors duration-1000 group-hover:text-blue-600 border-b-4 border-blue-600 `}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Founders Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-10 md:gap-16 mb-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {founders.map((person, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
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
                  className="group inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 hover:underline transition"
                >
                  <Image
                    src="/All_Images/AboutPage/linkedin_icon.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    loading="lazy"
                    className="group-hover:opacity-70 transition-opacity duration-300"
                  />
                  <span className="group-hover:text-indigo-800 transition-colors duration-300">Connect</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Text Section */}
        <motion.div
          className="max-w-5xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            Hey, We’re <span className="font-semibold text-indigo-600">Ashok Kumar</span> and 
            <span className="font-semibold text-indigo-600"> Tara Chand Yadav</span>, alumni of 
            <span className="font-semibold text-indigo-600"> NIT Rourkela</span> and the 
            <span className="font-semibold text-indigo-600"> founders</span> of 
            <span className="font-semibold text-indigo-600"> ThinkViL</span>. During our JEE preparation, we struggled with physics concepts requiring deep visualization. This challenge led Ashok to create <span className="font-semibold text-indigo-600">ThinkViL</span>, and Tara Chand joined as a co-founder to develop a platform where students can explore science and mathematics through <span className="font-semibold text-indigo-600">interactive simulations</span>.
          </p>
          <p className="mt-2">
            ThinkViL helps educators simplify complex topics and makes learning fun for students. If you find our simulations helpful, consider supporting us with a <span className="font-semibold text-indigo-600">donation</span>. Your contribution helps us create more high-quality content for free or at the most affordable price.
          </p>
          <p className="mt-2">
            We are always open to suggestions for new simulations! If you have any ideas or feedback, please feel free to reach out to us. We are constantly looking for ways to improve and expand our offerings.
            You can submit your suggestions using the
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSezqoZSLECKaWn-MxZa_1hoAV8TNrRZgoX6vWV31fBz-Z_tqQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 text-indigo-600 hover:underline font-bold px-2"
            >
              Suggestion Form
            </a>
            and you can also share your feedback at 
            <a
              href="mailto:contact.thinkvil@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email ThinkViL"
              className="gap-2 text-indigo-600 hover:underline font-bold px-2"
              >
              contact.thinkvil@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Support Us Button */}
        <motion.div
          className="flex justify-center mt-5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/donate">
            <span className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl font-bold text-white  shadow-md hover:text-black transition-all duration-300 cursor-pointer bg-gradient-to-br from-blue-500 to-green-500 hover:bg-gradient-to-br hover:from-green-500 hover:to-blue-500 rounded-2xl ">
              Support Us
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
