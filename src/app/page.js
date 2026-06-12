import WhyChoose from "@/app/components/ChooseSection/ChooseSection";
import Hero from "@/app/components/HeroSection/HeroSection";
import Navbar from "@/app/components/NavBar";
import CustomerReviews from "@/app/components/ReviewSection/ReviewSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero>
      </Hero>
      <WhyChoose>
      </WhyChoose>
      <CustomerReviews></CustomerReviews>
    </div>
  );
}
