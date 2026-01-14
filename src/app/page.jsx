import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ItemsPreview from "@/components/sections/ItemsPreview";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero></Hero>
     <Features></Features>
     <HowItWorks></HowItWorks>
     <ItemsPreview>`</ItemsPreview>
     <WhyChooseUs></WhyChooseUs>
     <Testimonials></Testimonials>
     <CTA></CTA>
    </div>
  );
}
