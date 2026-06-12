"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const BookCarModal = ({ car }) => {
  const [open, setOpen] = useState(false);

  const { data: session } =
    authClient.useSession();

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!session?.user) {
      toast.error(
        "Please login to book a vehicle"
      );
      return;
    }

    try {
      const formData = new FormData(
        e.currentTarget
      );

      const bookingData = {
        carId: car._id,
        carName: car.carName,
        image: car.image,
        dailyRent: car.dailyRent,

        userEmail:
          session.user.email,

        userName:
          session.user.name,

        ownerEmail:
          car.ownerEmail,

        bookingDate:
          new Date().toISOString(),

        driverNeeded:
          formData.get(
            "driverNeeded"
          ),

        specialNote:
          formData.get(
            "specialNote"
          ),

        status: "Confirmed",
      };

      const res = await fetch(
        "http://localhost:5000/bookings",
        {
          method: "POST",
          headers: {
            "content-type":
              "application/json",
          },
          body: JSON.stringify(
            bookingData
          ),
        }
      );

      const data =
        await res.json();

      if (data.insertedId) {
        toast.success(
          "Booking Successful"
        );

        setOpen(false);
      } else {
        toast.error(
          "Booking Failed"
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
      <button
        onClick={() =>
          setOpen(true)
        }
        className="w-full lg:w-fit px-10 py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
      >
        Book Now
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-5">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0B1120]/80 backdrop-blur-2xl border border-white/10 p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-amber-400 text-sm uppercase tracking-[4px]">
                  Premium Reservation
                </span>

                <h2 className="text-3xl font-bold text-white mt-2">
                  Book Vehicle
                </h2>
              </div>

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="text-gray-400 hover:text-white text-3xl transition"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={
                handleBooking
              }
              className="space-y-5"
            >
              <div>
                <label className="block text-gray-300 mb-2">
                  Car Name
                </label>

                <input
                  value={
                    car.carName
                  }
                  readOnly
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white"
                />
              </div>

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

              <div>
                <label className="block text-gray-300 mb-2">
                  Driver Needed
                </label>

                <select
                  name="driverNeeded"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 outline-none"
                >
                  <option
                    value="Yes"
                    className="text-black"
                  >
                    Yes
                  </option>

                  <option
                    value="No"
                    className="text-black"
                  >
                    No
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Special Note
                </label>

                <textarea
                  name="specialNote"
                  rows="4"
                  placeholder="Any special instructions..."
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
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