"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Github, Mail } from "lucide-react";
import Image from "next/image";

const titles = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="hero"
      className="w-full min-h-screen flex items-center justify-center relative overflow-x-hidden bg-gradient-to-br from-gray-900 to-gray-800 pt-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                안녕하세요,
                <br />
                <span className="text-blue-400">지정호</span>입니다.
              </h1>

              <div className="h-16 flex items-center" data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                  Creative{" "}
                  <span className="inline-block transition-all duration-500 text-blue-400 font-bold" key={currentTitle}>
                    {titles[currentTitle]}
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-lg leading-relaxed" data-aos="fade-up" data-aos-delay="700">
              작은 창피함을 두려워하지 않고, 이를 성장의 발판으로 삼으며 끊임없이 배우고 발전하는 개발자가 되고자
              합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="900">
              <button
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                프로젝트 보기
                <ArrowRight size={20} className="ml-2" />
              </button>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                연락하기
                <Mail size={20} className="ml-2" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4" data-aos="fade-up" data-aos-delay="1100">
              <Link
                href="https://github.com/hoya-q"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://velog.io/@kiik52/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <BookOpen size={24} />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <div className="relative z-10">
              <Image
                src="/images/heroSection-main.jpg"
                alt="개발자 프로필"
                width={400}
                height={500}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover object-top border border-gray-700"
                data-aos="zoom-in"
                data-aos-delay="600"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full opacity-50 -z-10"
              data-aos="fade-in"
              data-aos-delay="800"
            ></div>
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/10 rounded-full opacity-50 -z-10"
              data-aos="fade-in"
              data-aos-delay="1000"
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}
