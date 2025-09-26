"use client";

import AOS from "aos";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Akiaka",
      position: "Junior Frontend Developer",
      period: "2023.12 - 2025.02",
      description:
        "아키아카(Akiaka)는 클라우드 기반 아카이빙 및 디지털 기록관리 솔루션을 제공하는 IT 기업입니다. \n이곳에서 프론트엔드 개발자로 근무하며, 자사 서비스와 외주 프로젝트에서 웹 애플리케이션 UI/UX 구현을 담당했습니다. React와 TypeScript를 중심으로 사용자 친화적인 인터페이스를 개발하고 서비스 품질 향상에 기여했습니다.",
      achievements: [
        "AI 자막·번역 서비스 Snappi에 참여하여 사용자 가이드 기능을 기획·구현, 신규 사용자 유입률 15% 증가 및 이탈률 6% 감소",
        "과학 컨퍼런스 행사에서 interactive 3D 웹/앱을 구현하여 만족도 80% 달성, 이를 기반으로 과학유산플랫폼 사업 수주",
        "국립중앙과학관 고도화 프로젝트에서 풀스택 개발을 담당하며, 이관된 데이터 30만 건을 페이징 처리하여 초기 로딩 속도 40% 개선",
        "과학유산플랫폼 프로젝트에서 사용자 입력 최적화를 위한 debounce hook을 구현, 불필요한 API 호출 60% 감소 및 응답 속도 25% 향상",
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "tanstack/react-query",
        "shadcn-ui",
        "react-hook-form",
      ],
    },
    {
      company: "Kakao Games",
      position: "Game Operation",
      period: "2020.06 - 2022.06",
      description:
        "게임 서비스 운영 전반에 필요한 정책을 수립하고, 라이브 서비스 이슈와 리스크 및 유저 커뮤니티를 관리합니다. \n15종 이상의 모바일 게임 운영 업무 담당하며, 공식 카페 관리 및 유저 동향 모니터링을 통한 원활한 게임 환경 제공합니다.",
      achievements: [
        "가디언테일즈, 오딘, 우마무스메 서비스 런칭 참여 (3종 대형 프로젝트 성공적 출시 기여)",
        "유저 동향 분석 및 커뮤니티 모니터링으로 게임 장애 발생률 30% 감소",
        "오딘 사내테스트에서 사용자 관점의 피드백 및 크리티컬 버그 정리로 우수 설문 선정 및 상품 수여",
        "유저 데이터 관리 및 불법 프로그램 사용자 제재, 제재 성공률 95% 이상 달성",
        "게임 점검 및 장애 상황 신속 대응으로 평균 복구 시간 20% 단축, 점검/이벤트 공지 작성",
        "공식 카페 활성화를 위한 콘텐츠 기획 및 관리",
        "QA 테스트 및 디바이스별 게임 정상 동작 확인",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="100">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            다양한 환경에서의 개발 경험을 통해 성장해온 여정입니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                data-aos="fade-up"
                data-aos-delay={500 + index * 200}
              >
                {/* Timeline Dot */}
                <div
                  className="hidden md:flex w-16 h-16 bg-blue-600 rounded-full items-center justify-center relative z-10 mr-8 flex-shrink-0"
                  data-aos="zoom-in"
                  data-aos-delay={500 + index * 200}
                >
                  <i className="ri-briefcase-line text-white text-xl"></i>
                </div>

                {/* Experience Card */}
                <div
                  className="bg-gray-800 border border-gray-700 rounded-2xl p-8 w-full hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300"
                  data-aos="fade-left"
                  data-aos-delay={500 + index * 200}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
                      <div className="flex items-center text-blue-400 mb-2">
                        <i className="ri-building-line mr-2"></i>
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <i className="ri-calendar-line mr-2"></i>
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 whitespace-break-spaces">{experience.description}</p>

                  {/* Achievements */}
                  <div className="mb-6" data-aos="fade-up" data-aos-delay={500 + index * 200}>
                    <h4 className="text-lg font-semibold text-white mb-4">주요 성과</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start"
                          data-aos="fade-up"
                          data-aos-delay={300 + index * 200 + achievementIndex * 100}
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}

                  {experience.technologies ? (
                    <div data-aos="fade-up" data-aos-delay={500 + index * 200}>
                      <h4 className="text-lg font-semibold text-white mb-4">사용 기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium"
                            data-aos="fade-up"
                            data-aos-delay={1000 + index * 200 + techIndex * 50}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
