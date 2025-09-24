"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function SkillSection() {
  const skillsData = [
    {
      category: "Language",
      icon: "ri-code-s-slash-line",
      color: "text-blue-400",
      proficient: ["JavaScript", "TypeScript", "Java"],
      familiar: [],
    },
    {
      category: "Backend",
      color: "text-green-400",
      proficient: ["Node.js", "SpringBoot", "JPA", "Mybatis"],
      familiar: ["JSP", "PHP"],
    },
    {
      category: "Frontend",
      color: "text-purple-400",
      proficient: ["HTML5", "React", "Tailwind", "Sass", "Next.js"],
      familiar: ["jQuery"],
    },
    {
      category: "Database",
      color: "text-orange-400",
      proficient: ["MySQL"],
      familiar: ["MongoDB"],
    },
    {
      category: "DevOps & Infra",
      color: "text-cyan-400",
      proficient: ["Git", "Docker", "Jenkins"],
      familiar: ["K8s", "Linux", "Ubuntu", "ArgoCD", "AWS"],
    },
  ];

  const getSkillInfo = (skillName) => {
    const skillMap = {
      // 프로그래밍 언어 (파란색 계열)
      JavaScript: { color: "bg-blue-300", iconPath: "/icon/JavaScript.svg" },
      TypeScript: { color: "bg-blue-300", iconPath: "/icon/TypeScript.svg" },
      Java: { color: "bg-blue-300", iconPath: "/icon/Java-Dark.svg" },
      PHP: { color: "bg-blue-300", iconPath: "/icon/PHP-Dark.svg" },

      // 백엔드 프레임워크/런타임 (녹색 계열)
      "Node.js": { color: "bg-green-300", iconPath: "/icon/NodeJS-Dark.svg" },
      SpringBoot: { color: "bg-green-300", iconPath: "/icon/Spring-Dark.svg" },
      JPA: { color: "bg-green-300", iconPath: "/icon/Hibernate-Dark.svg" },
      Mybatis: { color: "bg-green-300", iconPath: "/icon/Mybatis.png" },
      JSP: { color: "bg-green-300", iconPath: "/icon/JSP.png" },

      // 프론트엔드 마크업/스타일링 (보라색 계열)
      HTML5: { color: "bg-purple-300", iconPath: "/icon/HTML.svg" },
      Sass: { color: "bg-purple-300", iconPath: "/icon/Sass.svg" },
      Tailwind: { color: "bg-purple-300", iconPath: "/icon/TailwindCSS-Dark.svg" },

      // 프론트엔드 프레임워크/라이브러리 (분홍색 계열)
      React: { color: "bg-pink-300", iconPath: "/icon/React-Dark.svg" },
      "Next.js": { color: "bg-pink-300", iconPath: "/icon/NextJS-Dark.svg" },
      jQuery: { color: "bg-pink-300", iconPath: "/icon/JQuery.svg" },

      // 데이터베이스 (주황색 계열)
      MySQL: { color: "bg-orange-300", iconPath: "/icon/MySQL-Dark.svg" },
      MongoDB: { color: "bg-orange-300", iconPath: "/icon/MongoDB.svg" },

      // DevOps/인프라 (회색 계열)
      Git: { color: "bg-gray-300", iconPath: "/icon/Git.svg" },
      Docker: { color: "bg-gray-300", iconPath: "/icon/Docker.svg" },
      Jenkins: { color: "bg-gray-300", iconPath: "/icon/Jenkins-Dark.svg" },
      K8s: { color: "bg-gray-300", iconPath: "/icon/Kubernetes.svg" },
      Linux: { color: "bg-gray-300", iconPath: "/icon/Linux-Dark.svg" },
      Ubuntu: { color: "bg-gray-300", iconPath: "/icon/Ubuntu.png" },
      ArgoCD: { color: "bg-gray-300", iconPath: "/icon/ArgoCD.png" },
      AWS: { color: "bg-gray-300", iconPath: "/icon/AWS-Dark.svg" },
    };

    return skillMap[skillName] || { color: "bg-gray-300", iconPath: "/icon/Code.svg" };
  };

  return (
    <TooltipProvider>
      <section className="w-full min-h-screen bg-gray-800 flex items-center">
        <div className="container mx-auto px-6 w-full py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Tools</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">다양한 분야에서 사용하는 기술과 도구들입니다.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              {/* 테이블 헤더 */}
              <div className="bg-gray-800 border-b border-gray-700">
                <div className="grid grid-cols-3 gap-4 p-4 font-semibold text-gray-300">
                  <div className="text-center text-base">구분</div>
                  <div className="text-center text-base">많이 해봤어요</div>
                  <div className="text-center text-base">해본 적 있어요</div>
                </div>
              </div>

              {/* 테이블 바디 */}
              <div className="divide-y divide-gray-700">
                {skillsData.map((skill, categoryIndex) => (
                  <div key={categoryIndex} className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-800 transition-colors">
                    {/* 카테고리 컬럼 */}
                    <div className="flex items-center justify-center">
                      <div className="flex flex-col items-center space-y-1 bg-slate-50 rounded-[3px] px-2">
                        <span className="font-medium text-gray-700 text-center text-sm">{skill.category}</span>
                      </div>
                    </div>

                    {/* 숙련도 높은 스킬 컬럼 */}
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                      {skill.proficient.length > 0 ? (
                        skill.proficient.map((skillName, index) => {
                          const skillInfo = getSkillInfo(skillName);
                          return (
                            <Tooltip key={index}>
                              <TooltipTrigger asChild>
                                <div
                                  className={`w-10 h-10 rounded-lg ${skillInfo.color} flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
                                >
                                  <img src={skillInfo.iconPath} alt={skillName} className="w-6 h-6" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skillName}</p>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })
                      ) : (
                        <span className="text-gray-500 text-xs">-</span>
                      )}
                    </div>

                    {/* 숙련도 낮은 스킬 컬럼 */}
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                      {skill.familiar.length > 0 ? (
                        skill.familiar.map((skillName, index) => {
                          const skillInfo = getSkillInfo(skillName);
                          return (
                            <Tooltip key={index}>
                              <TooltipTrigger asChild>
                                <div
                                  className={`w-10 h-10 rounded-lg ${skillInfo.color} flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
                                >
                                  <img src={skillInfo.iconPath} alt={skillName} className="w-6 h-6" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skillName}</p>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })
                      ) : (
                        <span className="text-gray-500 text-xs">-</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
