"use client";

import { useState } from "react";

const BookCarModal = ({ car }) => {
  const [open, setOpen] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const bookingData = {
      carId: car._id,
      carName: car.carName,
      totalPrice: car.dailyRent,
      bookingDate: new Date(),
      driverNeeded: formData.get("driverNeeded"),
      specialNote: formData.get("specialNote"),
    };

    console.log(bookingData);

    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full lg:w-fit px-10 py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
      >
        Book Now
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-5">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0B1120]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(244,185,66,0.08)] p-8">
            {/* Gold Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 via-transparent to-transparent pointer-events-none" />

            {/* Header */}
            <div className="relative flex justify-between items-center mb-8">
              <div>
                <span className="text-amber-400 text-sm uppercase tracking-[4px]">
                  Premium Reservation
                </span>

                <h2 className="text-3xl font-bold text-white mt-2">
                  Book Vehicle
                </h2>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-3xl transition cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleBooking}
              className="relative space-y-5"
            >
              {/* Car Name */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Car Name
                </label>

                <input
                  value={car.carName}
                  readOnly
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white"
                />
              </div>

              {/* Rent */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Daily Rent
                </label>

                <input
                  value={`$${car.dailyRent}`}
                  readOnly
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white"
                />
              </div>

              {/* Driver Needed */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Driver Needed
                </label>

                <select
                  name="driverNeeded"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition"
                >
                  <option className="text-black" value="Yes">Yes</option>
                  <option className="text-black" value="No">No</option>
                </select>
              </div>

              {/* Note */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Special Note
                </label>

                <textarea
                  name="specialNote"
                  rows="4"
                  placeholder="Any special instructions or requirements..."
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition cursor-pointer"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCarModal;