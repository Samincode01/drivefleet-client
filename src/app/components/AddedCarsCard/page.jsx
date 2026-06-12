"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

const AddedCarsCard = ({ car }) => {
  const [showModal, setShowModal] =
    useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/cars/${car._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success(
          "Car Deleted Successfully"
        );

        window.location.reload();
      } else {
        toast.error(
          "Delete Failed"
        );
      }
    } catch (error) {
      console.log(error);

      toast.error(
        "Something went wrong"
      );
    }
  };

  return (
    <>
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400 transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-60">
          <Image
            src={
              car?.image &&
              typeof car.image ===
                "string" &&
              car.image.startsWith(
                "http"
              )
                ? car.image
                : "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
            }
            alt={
              car?.carName ||
              "Car"
            }
            fill
            className="object-cover"
          />

          {/* Booking Count */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-400 text-black">
              {car.bookingCount ||
                0}{" "}
              Bookings
            </span>
          </div>

          {/* Availability */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                car.availability ===
                "Available"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}
            >
              {car.availability}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            {car.carName}
          </h2>

          <div className="space-y-3 mb-5">
            <div className="flex items-center gap-3 text-gray-400">
              <MdAirlineSeatReclineNormal className="text-amber-400" />
              <span>
                {
                  car.seatCapacity
                }{" "}
                Seats
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <IoLocationSharp className="text-amber-400" />
              <span>
                {car.location}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-5 mb-5">
            <div>
              <p className="text-gray-500 text-sm">
                Daily Rent
              </p>

              <h3 className="text-2xl font-bold text-amber-400">
                $
                {
                  car.dailyRent
                }
              </h3>
            </div>

            <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-sm">
              {car.carType}
            </span>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href={`/update-car/${car._id}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
            >
              <FaEdit />
              Edit
            </Link>

            <button
              onClick={() =>
                setShowModal(
                  true
                )
              }
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 font-semibold hover:bg-red-500 hover:text-white transition"
            >
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-5">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0B1120] p-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              Delete Vehicle
            </h2>

            <p className="text-gray-400 mb-8">
              Are you sure you
              want to delete{" "}
              <span className="text-amber-400">
                {car.carName}
              </span>
              ?
            </p>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  setShowModal(
                    false
                  )
                }
                className="flex-1 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition"
              >
                Cancel
              </button>

              <button
                onClick={
                  handleDelete
                }
                className="flex-1 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddedCarsCard;