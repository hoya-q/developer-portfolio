"use client";

import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { getSkillInfo } from "../../lib/skills";
import projects from "../data/projects.json";

const categories = [
  { id: "all", name: "전체" },
  { id: "frontend", name: "Frontend" },
  { id: "fullstack", name: "Fullstack" },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState(["frontend", "backend", "devops"]);

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            다양한 기술 스택을 활용하여 개발한 프로젝트들입니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300"
                      style={{
                        transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="text-white font-medium">상세보기</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.shortDescription}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-xs font-medium">
                          +{project.tech.length - 3}개
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                      >
                        <i className="ri-github-line mr-2"></i>
                        GitHub 저장소
                      </Button>
                      {project.demo && project.demo && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-400 hover:text-blue-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demo, "_blank");
                          }}
                        >
                          Live Demo
                          <i className="ri-external-link-line ml-2"></i>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="w-[95vw] !max-w-2xl h-[90vh] overflow-y-auto bg-gray-800 border-gray-700 text-white flex flex-col gap-4 dialog-scrollbar">
                <DialogHeader className="flex-shrink-0">
                  <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="overview" className="w-full flex-1 flex flex-col gap-4">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 text-white">
                      개요
                    </TabsTrigger>
                    <TabsTrigger value="details" className="data-[state=active]:bg-blue-600 text-white">
                      상세정보
                    </TabsTrigger>
                    <TabsTrigger value="tech" className="data-[state=active]:bg-blue-600 text-white">
                      기술스택
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4 flex-1 overflow-y-auto custom-scrollbar">
                    <div className="w-full h-64 rounded-lg overflow-hidden ">
                      {project.video ? (
                        <video
                          src={project.video}
                          controls
                          muted
                          className="w-full h-full object-contain"
                          preload="metadata"
                        >
                          브라우저가 비디오를 지원하지 않습니다.
                        </video>
                      ) : (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">프로젝트 정보</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">개발 기간:</span>
                            <span className="font-medium text-gray-300">{project.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">팀 규모:</span>
                            <span className="font-medium text-gray-300">{project.teamSize}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">카테고리:</span>
                            <span className="font-medium text-gray-300 capitalize">{project.category}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">링크</h4>
                        <div className="space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <i className="ri-github-line mr-2"></i>
                            GitHub 저장소
                          </Button>
                          {project.demo && project.demo && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                              onClick={() => window.open(project.demo, "_blank")}
                            >
                              <i className="ri-external-link-line mr-2"></i>
                              라이브 데모
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4 flex-1 overflow-y-auto custom-scrollbar">
                    {project.sldeImages && project.sldeImages.length > 0 && (
                      <div className="w-full h-64 rounded-lg overflow-hidden">
                        <Swiper
                          modules={[Navigation, Pagination]}
                          spaceBetween={0}
                          slidesPerView={1}
                          navigation
                          pagination={{ clickable: true }}
                          className="h-full"
                        >
                          {project.sldeImages.map((image, index) => (
                            <SwiperSlide key={index}>
                              <img
                                src={image}
                                alt={`${project.title} - 이미지 ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    )}
                    {/* 주요 기능 */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">주요 기능</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <i className="ri-checkbox-circle-line text-blue-400 mr-2 mt-0.5 flex-shrink-0"></i>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 맡은 역할 */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">맡은 역할</h4>
                        <ToggleGroup
                          type="multiple"
                          value={selectedRoles}
                          onValueChange={setSelectedRoles}
                          className="bg-gray-700 rounded-lg p-1"
                        >
                          <ToggleGroupItem
                            value="frontend"
                            className="data-[state=on]:bg-blue-600 data-[state=on]:text-white text-gray-300 hover:text-white"
                          >
                            Frontend
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            value="backend"
                            className="data-[state=on]:bg-green-600 data-[state=on]:text-white text-gray-300 hover:text-white"
                          >
                            Backend
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            value="devops"
                            className="data-[state=on]:bg-cyan-600 data-[state=on]:text-white text-gray-300 hover:text-white"
                          >
                            DevOps
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </div>

                      {/* Frontend */}
                      {project.myRole?.frontend &&
                        project.myRole.frontend.length > 0 &&
                        selectedRoles.includes("frontend") && (
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-blue-400 mb-2">Frontend</h5>
                            <ul className="space-y-1">
                              {project.myRole.frontend.map((role, index) => (
                                <li key={index} className="flex items-start">
                                  <i className="ri-arrow-right-s-line text-blue-400 mr-2 mt-0.5 flex-shrink-0 text-xs"></i>
                                  <span className="text-gray-300 text-sm">{role}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {/* Backend */}
                      {project.myRole?.backend &&
                        project.myRole.backend.length > 0 &&
                        selectedRoles.includes("backend") && (
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-green-400 mb-2">Backend</h5>
                            <ul className="space-y-1">
                              {project.myRole.backend.map((role, index) => (
                                <li key={index} className="flex items-start">
                                  <i className="ri-arrow-right-s-line text-green-400 mr-2 mt-0.5 flex-shrink-0 text-xs"></i>
                                  <span className="text-gray-300 text-sm">{role}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {/* DevOps */}
                      {project.myRole?.devops &&
                        project.myRole.devops.length > 0 &&
                        selectedRoles.includes("devops") && (
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-cyan-400 mb-2">DevOps</h5>
                            <ul className="space-y-1">
                              {project.myRole.devops.map((role, index) => (
                                <li key={index} className="flex items-start">
                                  <i className="ri-arrow-right-s-line text-cyan-400 mr-2 mt-0.5 flex-shrink-0 text-xs"></i>
                                  <span className="text-gray-300 text-sm">{role}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>

                    {/* 트러블슈팅 */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">트러블슈팅</h4>
                      <p className="text-gray-300 leading-relaxed">{project.troubleShooting}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="tech" className="space-y-4 flex-1 overflow-y-auto custom-scrollbar">
                    <div>
                      <h4 className="font-semibold text-white mb-3">사용 기술</h4>

                      {/* Frontend */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h5>
                        <div className="flex flex-wrap gap-3">
                          {project.tech
                            .filter((tech) =>
                              [
                                "React",
                                "Next.js",
                                "NextJS",
                                "JavaScript",
                                "TypeScript",
                                "HTML",
                                "HTML5",
                                "Tailwind CSS",
                                "Tailwind",
                                "Sass",
                                "jQuery",
                                "Framer Motion",
                                "Styled Components",
                                "Chart.js",
                                "React DnD",
                              ].includes(tech)
                            )
                            .map((tech, index) => {
                              const skillInfo = getSkillInfo(tech);
                              return (
                                <div
                                  key={index}
                                  className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                  <div
                                    className={`w-10 h-10 rounded-lg ${skillInfo.color} flex items-center justify-center mr-3`}
                                  >
                                    <img src={skillInfo.iconPath} alt={tech} className="w-6 h-6" />
                                  </div>
                                  <span className="font-medium text-white">{tech}</span>
                                </div>
                              );
                            })}
                        </div>
                      </div>

                      {/* Backend */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-green-400 mb-3">Backend</h5>
                        <div className="flex flex-wrap gap-3">
                          {project.tech
                            .filter((tech) =>
                              [
                                "Java",
                                "Java/Spring Boot",
                                "SpringBoot",
                                "Spring Cloud",
                                "Spring Security",
                                "Node.js",
                                "JPA",
                                "Mybatis",
                                "JSP",
                                "PHP",
                                "Socket.io",
                              ].includes(tech)
                            )
                            .map((tech, index) => {
                              const skillInfo = getSkillInfo(tech);
                              return (
                                <div
                                  key={index}
                                  className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                  <div
                                    className={`w-10 h-10 rounded-lg ${skillInfo.color} flex items-center justify-center mr-3`}
                                  >
                                    <img src={skillInfo.iconPath} alt={tech} className="w-6 h-6" />
                                  </div>
                                  <span className="font-medium text-white">{tech}</span>
                                </div>
                              );
                            })}
                        </div>
                      </div>

                      {/* Database */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-orange-400 mb-3">Database</h5>
                        <div className="flex flex-wrap gap-3">
                          {project.tech
                            .filter((tech) => ["MySQL", "MongoDB", "Prisma"].includes(tech))
                            .map((tech, index) => {
                              const skillInfo = getSkillInfo(tech);
                              return (
                                <div
                                  key={index}
                                  className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                  <div
                                    className={`w-10 h-10 rounded-lg ${skillInfo.color} flex items-center justify-center mr-3`}
                                  >
                                    <img src={skillInfo.iconPath} alt={tech} className="w-6 h-6" />
                                  </div>
                                  <span className="font-medium text-white">{tech}</span>
                                </div>
                              );
                            })}
                        </div>
                      </div>

                      {/* DevOps */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-cyan-400 mb-3">DevOps</h5>
                        <div className="flex flex-wrap gap-3">
                          {project.tech
                            .filter((tech) =>
                              [
                                "Git",
                                "Docker",
                                "Jenkins",
                                "Kubernetes",
                                "K8s",
                                "Linux",
                                "Ubuntu",
                                "ArgoCD",
                                "AWS",
                                "Vercel",
                              ].includes(tech)
                            )
                            .map((tech, index) => {
                              const skillInfo = getSkillInfo(tech);
                              return (
                                <div
                                  key={index}
                                  className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                  <div
                                    className={`w-10 h-10 rounded-lg ${skillInfo.color} flex items-center justify-center mr-3`}
                                  >
                                    <img src={skillInfo.iconPath} alt={tech} className="w-6 h-6" />
                                  </div>
                                  <span className="font-medium text-white">{tech}</span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <i className="ri-github-line mr-2"></i>더 많은 프로젝트 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
