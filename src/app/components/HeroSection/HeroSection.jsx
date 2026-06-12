import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
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
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white mb-6">
          🚗 Experience Premium Car Rentals
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Premium Cars For
          <span className="text-amber-400"> Every Journey</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore luxury sedans, family SUVs and premium vehicles
          with flexible rental plans and seamless booking.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center">
          <Link
            href="/explore-cars"
            className="bg-amber-400 text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2"
          >
            Explore Cars
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/register"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}