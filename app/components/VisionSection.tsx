"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function VisionSection() {
  const videoRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      { threshold: 0.5 } // Video is considered in view if at least 50% of it is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
      setIsPlaying(false);
    }
  };

  return (
    <motion.section
      className="py-12 px-4 sm:px-6 md:px-8 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight cursor-pointer"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, color: "#2563eb" }}
        >
          Our{" "}
          <motion.span
            className="text-blue-600 border-b-4 border-blue-600 pb-2 cursor-pointer"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1, color: "#1e40af" }}
          >
            Vision
          </motion.span>
        </motion.h2>

        {/* Vision Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02, color: "#374151" }}
        >
          At{" "}
          <motion.span className="font-bold text-blue-700" whileHover={{ scale: 1.1 }}>
            ThinkViL
          </motion.span>
          , we are committed to making <span className="font-bold text-blue-700">STEM</span>  education more engaging and accessible to everyone. Our interactive simulations bridge the gap between abstract concepts and real-world applications, fostering a deeper understanding among learners of all ages.
          <br />  
          Our vision is to continuously explore innovative ways to simplify scientific concepts, making them easier to grasp and more engaging.
        </motion.p>

        {/* Empowerment Message */}
        <motion.p
          className="text-lg font-semibold text-gray-800 italic"
          variants={{
            hidden: { opacity: 0, scale: 1 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.1, color: "#000" }}
        >
          Join us in our mission to make science education more accessible and impactful for everyone!
        </motion.p>

        {/* Video Section */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-full aspect-video">
            <motion.iframe
              ref={videoRef}
              className="absolute inset-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/GZgak41W6cQ?enablejsapi=1&mute=1&loop=1&playlist=GZgak41W6cQ"
              title="ThinkViL Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.iframe>
          </div>
          {/* Animated Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"
            style={{ pointerEvents: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            whileHover={{ opacity: 0.4 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
