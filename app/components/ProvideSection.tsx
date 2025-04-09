"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, BookText, Video } from "lucide-react";

const features = [
  {
    title: "Interactive Learning",
    description:
      "Explore complex scientific concepts through engaging, hands-on simulations designed to make learning intuitive and memorable.",
    image: "/All_Images/ProvideSection/learning.png",
    icon: <Beaker className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Reinforcing Concepts",
    description:
      "Reinforce your knowledge with ThinkViL Questions, designed to challenge and deepen your understanding through real-world applications.",
    image: "/All_Images/ProvideSection/question.jpg",
    icon: <BookText className="w-8 h-8 text-teal-600" />,
  },
  {
    title: "Video Tutorials",
    description:
      "Discover how to navigate ThinkViL simulations to enhance your understanding of Physics, Chemistry, and Mathematics.",
    link: "https://www.youtube.com/@Thinkvil",
    image: "/All_Images/ProvideSection/youtube.png",
    icon: <Video className="w-8 h-8 text-rose-600" />,
  },
];

const ProvideSection = () => {
  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
        {/* Section Title */}
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 underline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            How We Help ?
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-5xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            Explore our innovative tools and interactive resources designed to simplify complex concepts, reinforce learning, and enhance your understanding through engaging simulations and video tutorials.
          </motion.p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={1000}
          loop={true}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col lg:flex-row items-center bg-gray-200 p-6 sm:p-10 lg:p-16 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                {/* Left Side: Text & Icon */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <motion.div
                    className="p-3 bg-gray-100 rounded-full w-fit mx-auto lg:mx-0 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <motion.h3
                    className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-md sm:text-lg text-gray-700 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                  >
                    {feature.description}
                  </motion.p>

                  {feature.link && (
                    <motion.a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-indigo-600 text-white font-medium px-8 py-2 rounded-xl font-medium hover:bg-indigo-700 hover:text-black transition-all duration-300 mb-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                    >
                      Watch Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                {/* Right Side: Image with Animations */}
                <div className="w-full lg:w-1/2 relative h-60 sm:h-72 md:h-80 lg:h-96 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ scale: 0.95 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-3xl shadow-md"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProvideSection;
