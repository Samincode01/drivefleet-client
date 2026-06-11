"use client";

const AddCarPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const carData = Object.fromEntries(formData.entries());

    carData.dailyRent = Number(carData.dailyRent);
    carData.seatCapacity = Number(carData.seatCapacity);
    carData.bookingCount = 0;

    console.log(carData);

    const res = await fetch ('http://localhost:5000/cars',
        {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(carData)
        }
    )
    const data = await res.json
    console.log(data)
    // TODO:
    // axios.post("/cars", carData)
    // toast.success("Car Added Successfully")
    // e.target.reset()
  };

  return (
    <div className="min-h-screen bg-[#050816] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black font-semibold mb-4">
            Vehicle Listing
          </span>

          <h1 className="text-5xl font-bold text-white">
            Add Your Vehicle
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            List your vehicle and start earning by connecting with
            customers looking for reliable and premium rental services.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10">
          <form
            onSubmit={onSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Car Name */}
              <div>
                <label className="block text-white mb-2">
                  Car Name
                </label>

                <input
                  type="text"
                  name="carName"
                  placeholder="BMW M4 Competition"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
                />
              </div>

              {/* Daily Rent */}
              <div>
                <label className="block text-white mb-2">
                  Daily Rent Price ($)
                </label>

                <input
                  type="number"
                  name="dailyRent"
                  placeholder="120"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-white mb-2">
                  Car Type
                </label>

                <select
                  name="carType"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0F172A] border border-white/10 text-white outline-none focus:border-amber-400"
                >
                  <option value="">Select Type</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Convertible">
                    Convertible
                  </option>
                </select>
              </div>

              {/* Seat Capacity */}
              <div>
                <label className="block text-white mb-2">
                  Seat Capacity
                </label>

                <input
                  type="number"
                  name="seatCapacity"
                  placeholder="4"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
                />
              </div>

              {/* Image */}
              <div>
                <label className="block text-white mb-2">
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  placeholder="https://..."
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-white mb-2">
                  Pickup Location
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Dhaka"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
                />
              </div>

              {/* Availability */}
              <div className="md:col-span-2">
                <label className="block text-white mb-2">
                  Availability Status
                </label>

                <select
                  name="availability"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0F172A] border border-white/10 text-white outline-none focus:border-amber-400"
                >
                  <option value="Available">
                    Available
                  </option>
                  <option value="Unavailable">
                    Unavailable
                  </option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-white mb-2">
                Description
              </label>

              <textarea
                name="description"
                rows="6"
                placeholder="Write vehicle details..."
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500 transition"
            >
              Add Vehicle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCarPage;