import { NextSeo } from "next-seo";
import type { NextPage } from "next";
// custom components
import HeroSection from "../components/home/HeroSection";
import WelcomeSection from "../components/home/WelcomeSection";
import PlansSection from "../components/home/PlansSection";
import ReviewSection from "../components/home/ReviewSection";
import TransformationSection from "../components/home/TransformationSection";
import TestimonialSection from "../components/home/TestimonialSection";
import AboutMe from "../components/home/AboutMe";

const home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Union Xesthetic"
        description="Union Xesthetic Fitness training program provides personalized fitness plan for muscle building and fat loss. This is most comprehensive program and trains you for complete health, fitness and performance. Your improvement will happen in all components of physical fitness. You will not only be able to do daily tasks efficiently, but also take part in competitive sports."
      />
      <HeroSection />
      <WelcomeSection />
      <TransformationSection />
      <PlansSection />
      <ReviewSection />
      <TestimonialSection />
      <AboutMe />
    </div>
  );
};

export default home;
