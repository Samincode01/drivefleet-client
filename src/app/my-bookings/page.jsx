"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const MyBookingsPage = () => {
  const { data: session } =
    authClient.useSession();

  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchBookings =
      async () => {
        try {
          const res = await fetch(
            `http://localhost:5000/bookings/${session.user.email}`
          );

          const data =
            await res.json();

          setBookings(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchBookings();
  }, [session]);

  const handleCancel =
    async (id) => {
      try {
        const res = await fetch(
          `http://localhost:5000/bookings/${id}`,
          {
            method: "DELETE",
          }
        );

        const data =
          await res.json();

        if (
          data.deletedCount > 0
        ) {
          toast.success(
            "Booking Cancelled Successfully"
          );

          setBookings((prev) =>
            prev.filter(
              (booking) =>
                booking._id !== id
            )
          );
        } else {
          toast.error(
            "Failed To Cancel Booking"
          );
        }
      } catch (error) {
        console.log(error);

        toast.error(
          "Something went wrong"
        );
      }
    };

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
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold mb-4">
            Reservations
          </span>

          <h1 className="text-5xl font-bold text-white mb-4">
            My Bookings
          </h1>

          <p className="text-gray-400">
            Manage all your vehicle reservations.
          </p>
        </div>

        {bookings.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map(
              (booking) => (
                <div
                  key={
                    booking._id
                  }
                  className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400 transition-all duration-300"
                >
                  <div className="relative h-60">
                    <Image
                      src={
                        booking?.image &&
                        booking.image.startsWith(
                          "http"
                        )
                          ? booking.image
                          : "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                      }
                      alt={
                        booking.carName
                      }
                      fill
                      className="object-cover"
                    />

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        Confirmed
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {
                        booking.carName
                      }
                    </h2>

                    <div className="space-y-3 mb-5 text-gray-400">
                      <p>
                        Driver:
                        {" "}
                        {
                          booking.driverNeeded
                        }
                      </p>

                      <p>
                        Date:
                        {" "}
                        {new Date(
                          booking.bookingDate
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-5 mb-5">
                      <div>
                        <p className="text-gray-500 text-sm">
                          Daily Rent
                        </p>

                        <h3 className="text-2xl font-bold text-amber-400">
                          $
                          {
                            booking.dailyRent
                          }
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        handleCancel(
                          booking._id
                        )
                      }
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 font-semibold hover:bg-red-500 hover:text-white transition"
                    >
                      <FaTrash />
                      Cancel Booking
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-white mb-3">
              No Bookings Yet
            </h2>

            <p className="text-gray-400">
              Explore cars and make your first reservation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;