"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import AddedCarsCard from "@/components/AddedCarsCard/page";

const MyAddedCarsPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session } = authClient.useSession();

  useEffect(() => {
    const getCars = async () => {
      if (!session?.user?.email) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${session.user.email}`
        );

        const data = await res.json();

        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, [session]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center">
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
            Vehicle Management
          </span>

          <h1 className="text-5xl font-bold text-white mb-4">
            My Added Cars
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            View, update, and manage all vehicles you've listed on
            DriveFleet.
          </p>
        </div>

        {/* Cards */}
        {cars.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <AddedCarsCard
                key={car._id}
                car={car}
                cars={cars}
                setCars={setCars}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-white mb-3">
              No Cars Added Yet
            </h2>

            <p className="text-gray-400">
              Start by adding your first vehicle listing.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAddedCarsPage;