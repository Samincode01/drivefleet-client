"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import { authClient } from "@/lib/auth-client";

const TopPicks = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const session =
          await authClient.getSession();

        const token =
          session?.data?.session?.token;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/cars`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        setCars(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <section className="bg-[#050816] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold mb-4">
            Featured Collection
          </span>

          <h2 className="text-5xl font-bold text-white mb-4">
            Top Picks
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most popular vehicles chosen
            for comfort, luxury, and performance.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-400 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {cars.map((car) => (
              <CarCard
                key={car._id}
                car={car}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Link
            href="/explore-cars"
            className="px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
          >
            View All Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;