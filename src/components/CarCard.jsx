import Image from "next/image";
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400 transition-all duration-300 hover:-translate-y-1">
      {/* Car Image */}
      <div className="relative w-full h-60">
        <Image
          src={car.image}
          alt={car.carName}
          fill
          className="object-cover"
        />

        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              car.availability === "Available"
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

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-400">
            <FaCarSide className="text-amber-400 text-lg" />
            <span>{car.carType}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <MdAirlineSeatReclineNormal className="text-amber-400 text-lg" />
            <span>{car.seatCapacity} Seats</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <IoLocationSharp className="text-amber-400 text-lg" />
            <span>{car.location}</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Daily Rent</p>

            <h3 className="text-2xl font-bold text-amber-400">
              ${car.dailyRent}
            </h3>
          </div>

          <Link
            href={`/cars/${car._id}`}
            className="px-5 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;