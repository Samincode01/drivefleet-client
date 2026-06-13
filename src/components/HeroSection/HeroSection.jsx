"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "Premium",
    "Cars",
    "For",
    "Every",
    "Journey",
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 max-w-5xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white mb-6"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400"></span>
          </span>

          Experience Premium Car Rentals
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {words.map((word, index) => (
            <motion.span
              key={word}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.25,
              }}
              className={`inline-block mr-4 ${
                index >= 3
                  ? "text-amber-400"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 1.3,
          }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Explore luxury sedans, family SUVs and
          premium vehicles with flexible rental
          plans and seamless booking.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 1.6,
          }}
          className="mt-10 flex flex-col md:flex-row gap-5 justify-center"
        >
          <Link
            href="/explore-cars"
            className="bg-amber-400 text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-amber-500 transition"
          >
            Explore Cars
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/register"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}