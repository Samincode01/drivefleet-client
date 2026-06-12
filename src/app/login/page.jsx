"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Login Failed");
        return;
      }

      toast.success("Login Successful");

      router.push("/");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
   const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
};
  return (
    <section className="min-h-screen bg-[#050816] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg">
        {/* Left Side */}
        <div
          className="hidden lg:flex flex-col justify-end p-10 min-h-[700px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold mb-4">
              Premium Access
            </span>

            <h2 className="text-5xl font-bold text-white leading-tight">
              Drive Your
              <br />
              Dream Car Today
            </h2>

            <p className="text-gray-300 mt-4 max-w-md">
              Access luxury sedans, premium SUVs, and high-performance
              vehicles with a seamless booking experience.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-14">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white">
              Login
            </h1>

            <p className="text-gray-400 mt-3">
              Sign in to manage your bookings and vehicles.
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 mb-2">
                Password
              </label>

              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-gray-400 text-sm">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            {/* Google Login */}
            <button onClick={handleGoogleSignin}
              type="button"
              className="w-full py-4 rounded-xl border border-white/10 text-white flex items-center justify-center gap-3 hover:border-amber-400 transition cursor-pointer"
            >
              <FaGoogle />
              Continue with Google
            </button>
          </form>

          <p className="text-center text-gray-400 mt-8">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-amber-400 font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}