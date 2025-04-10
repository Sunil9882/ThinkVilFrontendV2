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
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <motion.h2
            className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-cyan-700 hover:after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:via-blue-600 after:to-cyan-600 after:rounded-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            How We Help ?
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-5xl mx-auto mt-4 leading-relaxed text-balance text-center"
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
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col lg:flex-row items-center bg-gray-100 p-6 sm:p-10 lg:p-16 rounded-xl shadow-md gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 70, damping: 12 }}
              >
                {/* Left Side: Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <motion.div
                    className="p-3 bg-white rounded-full w-fit mx-auto lg:mx-0 mb-4 border-4 border-blue-500"
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
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p className="text-md sm:text-lg text-gray-700 mb-6 leading-relaxed text-balance">
                    {feature.description}
                  </motion.p>

                  {feature.link && (
                    <motion.a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-red-600 text-white font-medium px-8 py-3 rounded-xl hover:text-black transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Watch Now
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.span>
                    </motion.a>
                  )}
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 relative h-60 sm:h-72 md:h-80 lg:h-96">
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ scale: 0.97 }}
                    transition={{ delay: 0.3, duration: 1 }}
                  >
                    <Image
                      src={feature.image}
                      alt={`Illustration for ${feature.title}`}
                      fill
                      className="object-cover rounded-3xl shadow-lg"
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
