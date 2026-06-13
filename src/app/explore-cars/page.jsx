"use client";

import { useEffect, useState } from "react";
import CarCard from "@/app/components/CarCard";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";

const ExploreCarsPage = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [carType, setCarType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams();

        if (search.trim()) {
          params.append("search", search.trim());
        }

        if (carType) {
          params.append("type", carType);
        }

        const session = await authClient.getSession();

        const token =
          session?.data?.session?.token;
console.log("TOKEN:", token);
        const res = await fetch(
          `http://localhost:5000/cars?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, carType]);

  return (
    <section className="min-h-screen bg-[#050816] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold mb-4">
            Premium Fleet
          </span>

          <h1 className="text-5xl font-bold text-white mb-4">
            Explore Cars
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover luxury sedans, family SUVs, hatchbacks,
            and premium vehicles tailored to every journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by car name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
          />

          <select
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-[#0F172A] border border-white/10 text-white outline-none focus:border-amber-400"
          >
            <option value="">All Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Luxury">Luxury</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>

        <div className="mb-8">
          <p className="text-gray-400">
            Showing{" "}
            <span className="text-amber-400 font-semibold">
              {cars.length}
            </span>{" "}
            vehicles
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
    <Spinner size="lg" />
  </div>
        ) : cars.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard
                key={car._id}
                car={car}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-white mb-3">
              No Cars Found
            </h2>

            <p className="text-gray-400">
              Try changing your search or filter options.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreCarsPage;