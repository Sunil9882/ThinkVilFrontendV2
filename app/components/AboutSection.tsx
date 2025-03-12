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

  const title = "Meet the Creators";

  return (
    <section id="about" className="py-10 px-4 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-5xl font-bold tracking-tight mb-12 cursor-pointer relative"
          whileHover={{ scale: 1.08, color: "#4F46E5" }}
        >
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="relative inline-block mx-2">
              {word.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {founders.map((person, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white rounded-full shadow-lg overflow-hidden border-4 border-gray-300">
                <Image
                  src={person.image}
                  alt={`Picture of ${person.name}`}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <div className="mt-2">
                <p className="text-lg font-semibold">{person.name}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile of ${person.name}`}
                  className="inline-flex items-center gap-2 text-indigo-600 hover:underline transition"
                >
                  <Image
                    src="/All_Images/AboutPage/linkedin_icon.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-opacity"
                  />
                  <span>Connect</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto text-gray-700 space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Hey, We’re <span className="font-semibold text-indigo-600">Ashok Kumar</span> and{" "}
            <span className="font-semibold text-indigo-600"> Tara Chand Yadav</span>, alumni of{" "}
            <span className="font-semibold text-indigo-600"> NIT Rourkela</span> and the{" "}
            <span className="font-semibold text-indigo-600"> founders</span> of{" "}
            <span className="font-semibold text-indigo-600"> ThinkViL</span>.
          </p>
          <p>
            During our JEE preparation, we struggled with physics concepts requiring deep visualization.
            This challenge led Ashok to create{" "}
            <span className="font-semibold text-indigo-600">ThinkViL</span>, with Tara Chand joining as a co-founder,
            to build a platform where students can explore science and mathematics through{" "}
            <span className="font-semibold text-indigo-600">interactive simulations</span>, making learning more engaging and intuitive.
          </p>
          <p>
            ThinkViL helps educators to simplify complex topics, making learning fun for students.
          </p>
          <p>
            If you find our simulations helpful, consider supporting us with a donation. Your contribution helps us to create more high-quality content-free or at most affordable.
          </p>
          <p>
            Share your feedback at{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.thinkvil@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-600 hover:underline"
            >
              contact.thinkvil@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/donate">
            <span className="inline-block px-8 py-3 text-xl font-bold bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition cursor-pointer focus:ring-4 focus:ring-indigo-300">
              Support
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
