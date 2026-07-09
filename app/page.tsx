import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import CoreExpertise from "@/components/home/CoreExpertise";
import ProcessFlow from "@/components/home/ProcessFlow";
import IndustriesServed from "@/components/home/IndustriesServed";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import GovernmentSupport from "@/components/home/GovernmentSupport";
import FutureOfCBG from "@/components/home/FutureOfCBG";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSnapshot />
      <CoreExpertise />
      <ProcessFlow />
      <IndustriesServed />
      <WhyChooseUs />
      <FeaturedProjects />
      <GovernmentSupport />
      <FutureOfCBG />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
