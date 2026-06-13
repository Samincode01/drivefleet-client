import {
  FaCarSide,
  FaHeadset,
  FaBolt,
  FaMoneyBillWave,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCarSide />,
    title: "Premium Fleet",
    desc: "Choose from luxury sedans, SUVs, hatchbacks, and premium vehicles maintained to the highest standards.",
  },
  {
    icon: <FaBolt />,
    title: "Instant Booking",
    desc: "Book your preferred vehicle in minutes with a simple and seamless reservation experience.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise charges. Enjoy clear daily rental rates and affordable pricing plans.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to assist you before, during, and after your trip.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose
            <span className="text-amber-400"> DriveFleet</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Experience premium car rentals with transparent pricing,
            well-maintained vehicles, and exceptional customer support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-amber-400 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-black flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}