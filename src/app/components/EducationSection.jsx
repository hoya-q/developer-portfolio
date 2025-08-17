"use client";

export default function EducationSection() {
  const educationData = [
    {
      type: "degree",
      institution: "한국대학교",
      degree: "컴퓨터공학과 학사",
      period: "2015.03 - 2019.02",
      location: "서울, 대한민국",
      description:
        "컴퓨터공학 전반에 대한 기초 지식을 습득했습니다. 자료구조, 알고리즘, 데이터베이스, 네트워크 등의 과목을 수강했습니다.",
      achievements: [
        "학점 평균 3.8/4.5 (상위 15%)",
        "컴퓨터공학과 우수상 수상",
        "프로그래밍 동아리 회장 활동",
        "졸업 프로젝트: 웹 기반 학습 관리 시스템",
      ],
    },
  ];

  const certifications = [
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023.08",
      level: "Professional",
      description: "React의 고급 기능과 베스트 프랙티스에 대한 전문 인증",
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023.03",
      level: "Associate",
      description: "AWS 클라우드 서비스를 활용한 애플리케이션 개발 인증",
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2022.11",
      level: "Individual Qualification",
      description: "구글 애널리틱스를 활용한 웹 분석 전문가 인증",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022.05",
      level: "Certification",
      description: "JavaScript를 활용한 알고리즘과 자료구조 기초 인증",
    },
  ];

  const courses = [
    {
      name: "Modern React with Redux",
      provider: "Udemy",
      date: "2023.01",
      duration: "52시간",
      description: "React와 Redux를 활용한 현대적인 웹 애플리케이션 개발",
    },
    {
      name: "Node.js - The Complete Guide",
      provider: "Udemy",
      date: "2022.09",
      duration: "40시간",
      description: "Node.js를 활용한 백엔드 API 개발과 데이터베이스 연동",
    },
    {
      name: "Advanced CSS and Sass",
      provider: "Udemy",
      date: "2022.03",
      duration: "28시간",
      description: "고급 CSS 기법과 Sass를 활용한 현대적인 웹 디자인",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">지속적인 학습을 통해 전문성을 키워가고 있습니다.</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-3">
                <i className="ri-school-line text-white"></i>
              </div>
              학력
            </h3>

            <div className="space-y-6">
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h4 className="text-xl font-bold text-white mb-2">{education.degree}</h4>
                      <div className="flex items-center text-blue-400 mb-2">
                        <i className="ri-building-2-line mr-2"></i>
                        <span className="font-medium">{education.institution}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <i className="ri-calendar-line mr-2"></i>
                          <span>{education.period}</span>
                        </div>
                        <div className="flex items-center">
                          <i className="ri-map-pin-line mr-2"></i>
                          <span>{education.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{education.description}</p>

                  <div>
                    <h5 className="font-semibold text-white mb-4">주요 성과</h5>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-lg mr-3">
                <i className="ri-award-line text-white"></i>
              </div>
              자격증 및 인증
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:shadow-xl hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                      <div className="text-green-400 font-medium mb-2">{cert.issuer}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm">{cert.date}</div>
                      <div className="text-xs text-gray-500">{cert.level}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Online Courses */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-lg mr-3">
                <i className="ri-book-line text-white"></i>
              </div>
              온라인 수료증
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:shadow-xl hover:border-purple-500/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{course.name}</h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 font-medium text-sm">{course.provider}</span>
                    <span className="text-gray-500 text-xs">{course.duration}</span>
                  </div>
                  <div className="text-gray-400 text-sm mb-3">{course.date}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
