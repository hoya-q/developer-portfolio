"use client";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      period: "2022.03 - 현재",
      location: "서울, 대한민국",
      description:
        "대규모 웹 애플리케이션의 프론트엔드 개발을 담당하며, React와 TypeScript를 활용한 사용자 인터페이스를 구축합니다.",
      achievements: [
        "웹 성능 30% 향상을 통한 사용자 경험 개선",
        "컴포넌트 라이브러리 구축으로 개발 효율성 50% 증대",
        "신입 개발자 3명 멘토링 및 교육 담당",
        "CI/CD 파이프라인 구축으로 배포 시간 80% 단축",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2020.09 - 2022.02",
      location: "서울, 대한민국",
      description:
        "스타트업 환경에서 다양한 프로젝트의 프론트엔드 개발을 담당했으며, 빠른 개발과 품질을 동시에 추구했습니다.",
      achievements: [
        "MVP 제품 개발로 시리즈 A 투자 유치에 기여",
        "반응형 웹 디자인 구현으로 모바일 사용자 증가율 40% 달성",
        "REST API 연동 및 상태 관리 최적화",
        "코드 리뷰 프로세스 도입으로 코드 품질 향상",
      ],
      technologies: ["React", "JavaScript", "Styled Components", "Redux", "Jest"],
    },
    {
      company: "WebAgency Pro",
      position: "Junior Frontend Developer",
      period: "2019.06 - 2020.08",
      location: "서울, 대한민국",
      description: "다양한 클라이언트의 웹사이트 및 웹 애플리케이션 개발에 참여하며 기초 실력을 다졌습니다.",
      achievements: [
        "20개 이상의 반응형 웹사이트 개발 완료",
        "WordPress 커스텀 테마 개발",
        "클라이언트 요구사항 분석 및 기술 제안",
        "HTML/CSS/JavaScript 기초 역량 강화",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            다양한 환경에서의 개발 경험을 통해 성장해온 여정입니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="hidden md:flex w-16 h-16 bg-blue-600 rounded-full items-center justify-center relative z-10 mr-8 flex-shrink-0">
                  <i className="ri-briefcase-line text-white text-xl"></i>
                </div>

                {/* Experience Card */}
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 w-full hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300">
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
                        <div className="flex items-center">
                          <i className="ri-map-pin-line mr-2"></i>
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{experience.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">주요 성과</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">사용 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
