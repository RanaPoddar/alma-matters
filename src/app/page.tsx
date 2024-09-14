import FeaturesSection from "@/Components/Features";
import FeedbackAndFAQ from "@/Components/FeedbackAndFAQ";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import WhyUsSection from "@/Components/WhyUsSection";

export default function Home() {
  return (
    <div className="w-full bg-primaryWhite">
      <Navbar/>
      <HeroSection/>
      <WhyUsSection/>
      <FeaturesSection/>
      <FeedbackAndFAQ/>
      <Footer/>
    </div>
  );
}
