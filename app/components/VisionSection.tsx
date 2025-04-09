"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VisionSection() {
  const videoRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      if (videoRef.current) {
        playerRef.current = new (window as any).YT.Player(videoRef.current, {
          events: {
            onReady: () => {
              observeVisibility();
            },
          },
        });
      }
    };

    const loadYouTubeAPI = () => {
      if (!(window as any).YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      } else {
        onYouTubeIframeAPIReady();
      }
    };

    const observeVisibility = () => {
      if (!videoRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (playerRef.current && playerRef.current.playVideo) {
              if (entry.isIntersecting) {
                playerRef.current.playVideo();
              } else {
                playerRef.current.pauseVideo();
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(videoRef.current);
    };

    loadYouTubeAPI();
  }, []);

  return (
    <motion.section
      className="py-12 text-gray-900"
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
          whileHover={{ scale: 1.05, color: "#3b82f6" }}
        >
          Our{" "}
          <motion.span
            className="text-blue-600 border-b-4 border-blue-600 cursor-pointer"
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
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
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
          , we are committed to making <span className="font-bold text-blue-700">STEM</span> education more <span className="font-bold text-blue-700">engaging and accessible</span> to everyone. Our interactive simulations bridge the gap between abstract concepts and real-world applications, fostering a deeper understanding among learners of all ages.
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
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl">
          <div className="relative w-full aspect-video">
            <iframe
              ref={videoRef}
              id="youtube-player"
              className="absolute inset-0 w-full h-full rounded-xl cursor-auto"
              src="https://www.youtube.com/embed/GZgak41W6cQ?enablejsapi=1&fs=1&mute=1&loop=1&controls=1&rel=0&playlist=GZgak41W6cQ"
              title="ThinkViL Introduction Video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"
            style={{ pointerEvents: "none" }}
          ></div>
        </div>
      </div>
    </motion.section>
  );
}
