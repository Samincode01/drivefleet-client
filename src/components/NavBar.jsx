"use client";

import Link from "next/link";
import { FaCarSide } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#050816]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center">
              <FaCarSide className="text-black text-xl" />
            </div>

            <h1 className="text-3xl font-bold text-white">
              Drive<span className="text-amber-400">Fleet</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-amber-400 font-medium hover:text-amber-300 transition"
            >
              Home
            </Link>

            <Link
              href="/explore-cars"
              className="text-white hover:text-amber-400 transition"
            >
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              className="text-white hover:text-amber-400 transition"
            >
              Add Car
            </Link>

            <Link
              href="/my-bookings"
              className="text-white hover:text-amber-400 transition"
            >
              My Bookings
            </Link>
          </nav>

          {/* Login Button */}
          <Link
            href="/login"
            className="hidden md:flex items-center justify-center px-7 py-3 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-3xl">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}