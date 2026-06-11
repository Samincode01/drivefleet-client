import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Drive<span className="text-amber-400">Fleet</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Premium car rental platform offering luxury,
              comfort and reliability for every journey.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Useful Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/explore-cars">
                  Explore Cars
                </Link>
              </li>

              <li>
                <Link href="/add-car">
                  Add Car
                </Link>
              </li>

              <li>
                <Link href="/my-bookings">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Access
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Luxury Cars</li>
              <li>SUV Rentals</li>
              <li>Business Travel</li>
              <li>Weekend Trips</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>📍 Dhaka, Bangladesh</li>
              <li>📞 +880 1234-567890</li>
              <li>✉️ support@drivefleet.com</li>
              <li>🕒 24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500">
          © 2026 DriveFleet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}