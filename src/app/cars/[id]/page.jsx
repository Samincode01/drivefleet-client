import Image from "next/image";
import { FaCarSide, FaCalendarCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import BookCarModal from "@/components/BookCarModal/page";
const CarDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:5000/cars/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
        Failed to load car details
      </div>
    );
  }

  const car = await res.json();

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
        Car not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050816] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src={car.image}
              alt={car.carName}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  car.availability === "Available"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {car.availability}
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white mb-4">
              {car.carName}
            </h1>

            <p className="text-amber-400 text-4xl font-bold mb-8">
              ${car.dailyRent}
              <span className="text-lg text-gray-400"> / day</span>
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <FaCarSide className="text-amber-400 text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Type</p>
                  <h3 className="text-white">{car.carType}</h3>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <MdAirlineSeatReclineNormal className="text-amber-400 text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Seats</p>
                  <h3 className="text-white">{car.seatCapacity}</h3>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <IoLocationSharp className="text-amber-400 text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <h3 className="text-white">{car.location}</h3>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <FaCalendarCheck className="text-amber-400 text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Bookings</p>
                  <h3 className="text-white">{car.bookingCount}</h3>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Description
              </h2>

              <p className="text-gray-400 leading-8">
                {car.description}
              </p>
            </div>

            <BookCarModal car={car} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;