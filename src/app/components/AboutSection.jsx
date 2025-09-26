"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="200">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" data-aos="fade-up" data-aos-delay="400"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative" data-aos="fade-right" data-aos-delay="600">
            <Image
              src="/images/aboutSection-main.jpg"
              alt="개발자 작업 환경"
              width={500}
              height={600}
              className="w-full rounded-2xl shadow-xl object-cover border border-gray-700"
              priority
              data-aos="zoom-in"
              data-aos-delay="800"
            />

            {/* Stats Cards */}
            <div
              className="absolute bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="600">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white" data-aos="fade-up" data-aos-delay="800">
                열정적인 풀스택 개발자
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="900">
                안녕하세요! 사용자 중심의 웹 애플리케이션을 만드는 것에 열정을 가진 풀스택 개발자 지정호입니다.
              </p>
              <p className="text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="1000">
                React, JavaScript, Next.js를 활용한 프론트엔드와 Java, Spring Boot, MySQL 기반의 백엔드를 주로 다루며,
                현대적이고 반응형 웹 애플리케이션을 개발합니다. 새로운 기술 습득을 즐기며, 항상 사용자 경험(UX)을
                최우선으로 고려하는 개발자입니다.
              </p>
            </div>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="1100">
              <h4 className="text-xl font-semibold text-white" data-aos="fade-up" data-aos-delay="1200">
                핵심 가치
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="1300">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600/20 rounded-full mt-0.5">
                    <i className="ri-lightbulb-line text-blue-400 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">창의성(Creativity)</h5>
                    <p className="text-gray-400 text-sm">
                      혁신적이고 창의적인 아이디어를 바탕으로 문제를 해결하며, 새로운 가능성을 탐구합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="1400">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600/20 rounded-full mt-0.5">
                    <i className="ri-team-line text-blue-400 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">협업(Collaboration)</h5>
                    <p className="text-gray-400 text-sm">
                      팀워크를 중시하고, 원활한 커뮤니케이션을 통해 함께 성장하는 협력적인 개발 문화를 지향합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="1500">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600/20 rounded-full mt-0.5">
                    <i className="ri-trophy-line text-blue-400 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">품질(Quality)</h5>
                    <p className="text-gray-400 text-sm">
                      안정적이고 유지보수 가능한 코드를 작성하며, 최적의 사용자 경험을 제공하는 것을 최우선으로 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 이력서 다운로드 */}
            {/* TODO:이력서 첨삭 완료 후 넣기 */}
            <div className="pt-4" data-aos="fade-up" data-aos-delay="1600">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-download-line mr-2"></i>
                이력서 다운로드
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
