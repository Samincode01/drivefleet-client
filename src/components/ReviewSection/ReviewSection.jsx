import { FaStar } from "react-icons/fa";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Michael Anderson",
      role: "Business Traveler",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "The booking process was effortless and the vehicle exceeded my expectations. Highly recommended for business trips.",
    },
    {
      name: "Sophia Williams",
      role: "Family Vacation",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Clean vehicles, transparent pricing, and exceptional customer support. DriveFleet made our family trip stress-free.",
    },
    {
      name: "Daniel Brown",
      role: "Weekend Explorer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      review:
        "Premium cars at competitive rates. The SUV I rented was in perfect condition and drove beautifully.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Customers
            <span className="text-amber-400"> Say</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Trusted by travelers, professionals, and families across the
            country.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-amber-400 transition"
            >
              <div className="flex gap-1 text-amber-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-300 leading-7 mb-8">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-white font-semibold">
                    {review.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}