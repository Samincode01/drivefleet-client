"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateCarPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState(null);

  useEffect(() => {
    const getCar = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`
        );

        const data = await res.json();

        setCar(data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load car");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getCar();
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedCar = {
      carName: formData.get("carName"),
      dailyRent: Number(
        formData.get("dailyRent")
      ),
      seatCapacity: Number(
        formData.get("seatCapacity")
      ),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type":
              "application/json",
          },
          body: JSON.stringify(updatedCar),
        }
      );

      const data = await res.json();

      if (
        data.modifiedCount > 0 ||
        data.matchedCount > 0
      ) {
        toast.success(
          "Car Updated Successfully"
        );

        setTimeout(() => {
          router.push(
            "/my-added-cars"
          );
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Failed to Update Car"
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-amber-400"></span>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050816] py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold mb-4">
            Vehicle Management
          </span>

          <h1 className="text-5xl font-bold text-white">
            Update Vehicle
          </h1>

          <p className="text-gray-400 mt-4">
            Modify vehicle information
            and save changes.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <form
            onSubmit={handleUpdate}
            className="space-y-6"
          >
            <div>
              <label className="block text-white mb-2">
                Car Name
              </label>

              <input
                type="text"
                name="carName"
                defaultValue={
                  car?.carName
                }
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Daily Rent Price ($)
              </label>

              <input
                type="number"
                name="dailyRent"
                defaultValue={
                  car?.dailyRent
                }
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Seat Capacity
              </label>

              <input
                type="number"
                name="seatCapacity"
                defaultValue={
                  car?.seatCapacity
                }
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
            >
              Update Vehicle
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateCarPage;