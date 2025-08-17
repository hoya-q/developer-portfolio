"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import SkillSection from "@/app/components/SkillSection";
import ProjectSection from "@/app/components/ProjectSection";
import EducationSection from "@/app/components/EducationSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
