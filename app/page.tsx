import HeroSection from "@/components/HeroSection";
import HomeSearchBar from "./HomeSearchBar";
import StatsBanner from "@/components/StatsBanner";
import HomeFeatured from "./HomeFeatured";
import HomeCategories from "./HomeCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import DestinationGallery from "@/components/DestinationGallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import NewsletterBanner from "@/components/NewsletterBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeSearchBar />
      <StatsBanner />
      <HomeFeatured />
      <HomeCategories />
      <WhyChooseUs />
      <DestinationGallery />
      <TestimonialSlider />
      <NewsletterBanner />
    </>
  );
}
