"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getSkillInfo } from "@/lib/skills";

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

  return (
    <TooltipProvider>
      <section id="skills" className="w-full min-h-screen bg-gray-800 flex items-center">
        <div className="container mx-auto px-6 w-full py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="200">
              Skills & Tools
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4" data-aos="fade-up" data-aos-delay="400"></div>
            <p className="text-base text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="500">
              다양한 분야에서 사용하는 기술과 도구들입니다.
            </p>
          </div>

          <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="800">
            <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              {/* 테이블 헤더 */}
              <div className="bg-gray-800 border-b border-gray-700">
                <div className="grid grid-cols-3 gap-4 p-4 font-semibold text-gray-300">
                  <div className="text-center text-base" data-aos="fade-up" data-aos-delay="1000">
                    구분
                  </div>
                  <div className="text-center text-base" data-aos="fade-up" data-aos-delay="1100">
                    많이 해봤어요
                  </div>
                  <div className="text-center text-base" data-aos="fade-up" data-aos-delay="1200">
                    해본 적 있어요
                  </div>
                </div>
              </div>

              {/* 테이블 바디 */}
              <div className="divide-y divide-gray-700">
                {skillsData.map((skill, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-800 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={1300 + categoryIndex * 100}
                  >
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
                                  data-aos="zoom-in"
                                  data-aos-delay={1400 + categoryIndex * 100 + index * 50}
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
                                  data-aos="zoom-in"
                                  data-aos-delay={1400 + categoryIndex * 100 + index * 50}
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
