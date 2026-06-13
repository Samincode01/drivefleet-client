import Link from "next/link";
import { FaCarCrash, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#050816] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-amber-400/10 flex items-center justify-center border border-amber-400/20">
            <FaCarCrash className="text-6xl text-amber-400" />
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-extrabold text-white mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Route Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition duration-300"
        >
          <FaArrowLeft />
          Back To Home
        </Link>
      </div>
    </section>
  );
}