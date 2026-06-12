"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaCarSide, FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  const { data: session, isPending } =
    authClient.useSession();

  const handleLogout = async () => {
    try {
      const { error } =
        await authClient.signOut();

      if (error) {
        toast.error("Logout Failed");
        return;
      }

      toast.success(
        "Logged Out Successfully"
      );

      setOpen(false);

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const navLinkClass = (path) =>
    pathname === path
      ? "text-amber-400 font-semibold"
      : "text-white hover:text-amber-400 transition duration-300";

  if (!mounted || isPending) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center">
              <FaCarSide className="text-black text-xl" />
            </div>

            <h1 className="text-3xl font-bold text-white">
              Drive
              <span className="text-amber-400">
                Fleet
              </span>
            </h1>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={navLinkClass("/")}
            >
              Home
            </Link>

            <Link
              href="/explore-cars"
              className={navLinkClass(
                "/explore-cars"
              )}
            >
              Explore Cars
            </Link>

            <Link
              href={
                session?.user
                  ? "/add-car"
                  : "/login"
              }
              className={navLinkClass(
                "/add-car"
              )}
            >
              Add Car
            </Link>

            <Link
              href={
                session?.user
                  ? "/my-bookings"
                  : "/login"
              }
              className={navLinkClass(
                "/my-bookings"
              )}
            >
              My Bookings
            </Link>
          </nav>

          {/* User Area */}
          {session?.user ? (
            <div className="relative hidden md:block">
              <button
                onClick={() =>
                  setOpen(!open)
                }
                className="group flex cursor-pointer items-center gap-3 rounded-full px-3 py-2 transition-all duration-300 hover:bg-white/10"
              >
                <FaUserCircle className="text-4xl text-amber-400 transition-all duration-300 group-hover:scale-110" />

                <span className="font-medium text-white transition-colors duration-300 group-hover:text-amber-400">
                  {session.user.name}
                </span>
              </button>

              {open && (
                <div className="absolute right-0 mt-4 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120]/95 backdrop-blur-xl shadow-2xl">
                  <div className="px-5 py-4 border-b border-white/10">
                    <h3 className="text-white font-semibold">
                      {session.user.name}
                    </h3>

                    <p className="text-gray-400 text-sm truncate">
                      {session.user.email}
                    </p>
                  </div>

                  <Link
                    href="/add-car"
                    onClick={() =>
                      setOpen(false)
                    }
                    className={`block px-5 py-3 transition ${
                      pathname ===
                      "/add-car"
                        ? "bg-amber-400/10 text-amber-400"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    Add Car
                  </Link>

                  <Link
                    href="/my-bookings"
                    onClick={() =>
                      setOpen(false)
                    }
                    className={`block px-5 py-3 transition ${
                      pathname ===
                      "/my-bookings"
                        ? "bg-amber-400/10 text-amber-400"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    My Bookings
                  </Link>

                  <Link
                    href="/my-added-cars"
                    onClick={() =>
                      setOpen(false)
                    }
                    className={`block px-5 py-3 transition ${
                      pathname ===
                      "/my-added-cars"
                        ? "bg-amber-400/10 text-amber-400"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    My Added Cars
                  </Link>

                  <button
                    onClick={
                      handleLogout
                    }
                    className="w-full text-left px-5 py-3 text-red-400 hover:bg-white/5 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden md:flex items-center justify-center px-7 py-3 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition duration-300"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu */}
          <button className="md:hidden text-white text-3xl">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}