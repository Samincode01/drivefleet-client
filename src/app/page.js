import WhyChoose from "@/components/ChooseSection/ChooseSection";
import Hero from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/NavBar";
import CustomerReviews from "@/components/ReviewSection/ReviewSection";
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
