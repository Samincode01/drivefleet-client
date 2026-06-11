import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-[#050816] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg">

        {/* Left Side */}
        <div
          className="hidden lg:flex flex-col justify-end p-10 min-h-[750px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold mb-4">
              Join DriveFleet
            </span>

            <h2 className="text-5xl font-bold text-white leading-tight">
              Start Your
              <br />
              Journey Today
            </h2>

            <p className="text-gray-300 mt-4 max-w-md">
              Create your account and gain access to premium vehicles,
              instant bookings, and exclusive rental offers.
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <h3 className="text-3xl font-bold text-amber-400">
                  500+
                </h3>
                <p className="text-gray-300">Vehicles</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-amber-400">
                  10K+
                </h3>
                <p className="text-gray-300">Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-14">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white">
              Register
            </h1>

            <p className="text-gray-400 mt-3">
              Create your DriveFleet account and explore premium rentals.
            </p>
          </div>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-300 mb-2">
                Photo URL
              </label>

              <input
                type="text"
                placeholder="Paste your photo URL"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />

              <p className="text-sm text-gray-500 mt-2">
                Must contain uppercase, lowercase and at least 6 characters.
              </p>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-gray-400 text-sm">OR</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full py-4 rounded-xl border border-white/10 text-white flex items-center justify-center gap-3 hover:border-amber-400 transition"
            >
              <FaGoogle />
              Continue with Google
            </button>
          </form>

          <p className="text-center text-gray-400 mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-amber-400 font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}