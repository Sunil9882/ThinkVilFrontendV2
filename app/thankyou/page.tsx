"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-gray-900 bg-blue-100 px-6">
      <motion.h2
        className="text-5xl font-bold tracking-tight text-blue-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Thank You for Your Support!
      </motion.h2>

      <motion.p
        className="text-lg text-center max-w-2xl text-gray-700 font-medium leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Your generous contribution helps us continue our mission at ThinkViL—to empower young minds through interactive learning experiences. Thanks to you, we can create more engaging educational content and make learning fun and accessible for students worldwide.
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-400 transition duration-300 rounded-xl hover:text-black"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
