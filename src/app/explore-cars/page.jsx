"use client";

import { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";

const ExploreCarsPage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [search, setSearch] = useState("");
  const [carType, setCarType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:5000/cars");
        const data = await res.json();

        setCars(data);
        setFilteredCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    let filtered = [...cars];

    if (search) {
      filtered = filtered.filter((car) =>
        car.carName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (carType) {
      filtered = filtered.filter(
        (car) => car.carType === carType
      );
    }

    setFilteredCars(filtered);
  }, [search, carType, cars]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#050816]">
        <span className="loading loading-spinner loading-lg text-amber-400"></span>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050816] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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

        {/* Search & Filter */}
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

        {/* Result Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            Showing{" "}
            <span className="text-amber-400 font-semibold">
              {filteredCars.length}
            </span>{" "}
            vehicles
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
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