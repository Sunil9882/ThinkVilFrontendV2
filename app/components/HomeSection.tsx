"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cube";

const imagePaths = [
  "/All_Images/HomeSection/screen_show_img1.png",
  "/All_Images/HomeSection/screen_show_img2.png",
  "/All_Images/HomeSection/screen_show_img3.png",
  "/All_Images/HomeSection/screen_show_img4.png",
];

export default function HomeSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-white">
      <div className="w-full max-w-none mx-auto relative">
        <motion.div
          className="relative w-full h-[60vh] sm:h-[60vh] md:h-[50vh] lg:h-[60vh] overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* 3D Cube Swiper */}
          <Swiper
            modules={[EffectCube, Autoplay]}
            effect="cube"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="w-full h-full"
            touchStartPreventDefault={false}
            passiveListeners={false}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.9,
            }}
          >
            {imagePaths.map((src, index) => (
              <SwiperSlide key={index} className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover w-full h-full rounded-xl"
                  priority={index === 0}
                  sizes="100vw"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay Text Section */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white rounded-xl z-50 drop-shadow-lg p-6"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* First Line (Hover Triggers Animation) */}
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center"
              animate={hovered ? { x: [0, 20, -20, 0] } : { x: 0 }}
              transition={{ repeat: hovered ? Infinity : 0, duration: 2 }}
            >
              Let's Simplify 
            </motion.h1>

            {/* Second Line (Hover Triggers Animation) */}
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-blue-400"
              animate={hovered ? { x: [0, -20, 20, 0] } : { x: 0 }}
              transition={{ repeat: hovered ? Infinity : 0, duration: 2 }}
            >
              Science
            </motion.h1>

            {/* Description Text (Hover Triggers Animation) */}
            <motion.p
              className="text-md md:text-lg lg:text-xl mt-4 max-w-2xl text-center leading-relaxed"
              animate={hovered ? { x: [0, 10, -10, 0] } : { x: 0 }}
              transition={{ repeat: hovered ? Infinity : 0, duration: 2 }}
            >
              Explore interactive simulations that spark creativity and critical thinking in{" "}
              <span className="text-yellow-400 font-semibold">Physics</span>,{" "}
              <span className="text-green-400 font-semibold">Chemistry</span>, and{" "}
              <span className="text-red-400 font-semibold">Mathematics</span>.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
