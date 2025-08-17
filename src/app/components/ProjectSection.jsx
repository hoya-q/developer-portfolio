"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription: "React와 Node.js를 사용한 풀스택 쇼핑몰 플랫폼",
    description:
      "React와 Node.js를 사용한 풀스택 쇼핑몰 플랫폼입니다. 사용자 인증, 결제 시스템, 관리자 대시보드 등을 구현했습니다. 현대적인 UI/UX와 함께 높은 성능을 제공하며, 모바일 반응형 디자인을 적용했습니다.",
    image:
      "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%2C%20clean%20shopping%20cart%20design%2C%20product%20grid%20layout%2C%20minimalist%20ui%20design%2C%20professional%20web%20application&width=600&height=400&seq=proj001&orientation=landscape",
    tech: ["React", "JavaScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "fullstack",
    features: [
      "사용자 인증 및 권한 관리",
      "상품 관리 및 카테고리 시스템",
      "Stripe 결제 시스템 연동",
      "주문 관리 및 배송 추적",
      "관리자 대시보드",
      "반응형 모바일 디자인",
    ],
    challenges: "대용량 상품 데이터 처리와 결제 시스템의 보안성 확보가 주요 과제였습니다.",
    solution: "Redis 캐싱과 데이터베이스 최적화를 통해 성능을 개선하고, Stripe의 보안 기능을 활용했습니다.",
    duration: "3개월",
    teamSize: "4명",
  },
  {
    id: 2,
    title: "Task Management App",
    shortDescription: "팀 협업을 위한 할일 관리 애플리케이션",
    description:
      "팀 협업을 위한 할일 관리 애플리케이션입니다. 드래그 앤 드롭, 실시간 동기화, 팀원 초대 기능을 제공합니다. Kanban 보드 방식으로 직관적인 작업 관리가 가능하며, 실시간 알림 시스템을 구축했습니다.",
    image:
      "https://readdy.ai/api/search-image?query=task%20management%20dashboard%20interface%2C%20kanban%20board%20design%2C%20project%20management%20app%2C%20clean%20ui%20with%20cards%20and%20columns%2C%20modern%20web%20application&width=600&height=400&seq=proj002&orientation=landscape",
    tech: ["Next.js", "JavaScript", "Prisma", "PostgreSQL", "Socket.io", "React DnD"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "frontend",
    features: [
      "Kanban 보드 인터페이스",
      "드래그 앤 드롭 기능",
      "실시간 협업 기능",
      "팀원 초대 및 권한 관리",
      "프로젝트 진행률 추적",
      "댓글 및 파일 첨부",
    ],
    challenges: "실시간 동기화와 충돌 해결이 주요 기술적 도전이었습니다.",
    solution: "Socket.io를 활용한 실시간 통신과 Optimistic UI 업데이트를 구현했습니다.",
    duration: "2개월",
    teamSize: "2명",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    shortDescription: "실시간 날씨 정보 대시보드",
    description:
      "실시간 날씨 정보를 제공하는 대시보드입니다. 지역별 날씨 검색, 7일 예보, 인터랙티브 차트를 제공합니다. 다양한 기상 데이터를 시각화하여 사용자가 쉽게 이해할 수 있도록 구성했습니다.",
    image:
      "https://readdy.ai/api/search-image?query=weather%20dashboard%20interface%2C%20climate%20data%20visualization%2C%20weather%20app%20design%2C%20charts%20and%20graphs%2C%20modern%20ui%20with%20weather%20icons&width=600&height=400&seq=proj003&orientation=landscape",
    tech: ["React", "JavaScript", "Chart.js", "Weather API", "Styled Components"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "frontend",
    features: [
      "실시간 날씨 정보",
      "7일 일기예보",
      "시간대별 상세 예보",
      "지역별 날씨 검색",
      "인터랙티브 차트",
      "날씨 알림 설정",
    ],
    challenges: "API 응답 속도 최적화와 데이터 시각화가 주요 과제였습니다.",
    solution: "API 호출 최적화와 Chart.js 라이브러리를 활용한 효과적인 데이터 시각화를 구현했습니다.",
    duration: "1개월",
    teamSize: "1명",
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription: "반응형 포트폴리오 웹사이트",
    description:
      "반응형 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션, SEO 최적화가 적용되었습니다. 다크모드 지원과 함께 접근성을 고려한 사용자 친화적인 인터페이스를 제공합니다.",
    image:
      "https://readdy.ai/api/search-image?query=portfolio%20website%20design%2C%20creative%20layout%2C%20modern%20web%20design%2C%20clean%20interface%2C%20developer%20portfolio%20showcase&width=600&height=400&seq=proj004&orientation=landscape",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "frontend",
    features: [
      "반응형 디자인",
      "다크모드 지원",
      "부드러운 애니메이션",
      "SEO 최적화",
      "접근성 준수",
      "MDX 블로그 시스템",
    ],
    challenges: "성능 최적화와 SEO 개선이 주요 목표였습니다.",
    solution: "Next.js의 SSG 기능과 이미지 최적화, 메타태그 최적화를 통해 해결했습니다.",
    duration: "2주",
    teamSize: "1명",
  },
  {
    id: 5,
    title: "Social Media App",
    shortDescription: "소셜 미디어 모바일 애플리케이션",
    description:
      "소셜 미디어 플랫폼입니다. 실시간 채팅, 이미지 업로드, 팔로우 시스템, 피드 타임라인 기능을 구현했습니다. 모바일 우선 설계로 부드러운 사용자 경험을 제공합니다.",
    image:
      "https://readdy.ai/api/search-image?query=social%20media%20app%20interface%2C%20mobile-first%20design%2C%20chat%20interface%2C%20social%20network%20ui%2C%20modern%20app%20design&width=600&height=400&seq=proj005&orientation=landscape",
    tech: ["React Native", "Firebase", "Redux", "Socket.io", "Expo"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "mobile",
    features: [
      "사용자 프로필 관리",
      "게시글 작성 및 공유",
      "실시간 채팅 시스템",
      "이미지/비디오 업로드",
      "팔로우/팔로워 시스템",
      "푸시 알림",
    ],
    challenges: "실시간 기능과 대용량 미디어 처리가 주요 과제였습니다.",
    solution: "Firebase의 실시간 데이터베이스와 Cloud Storage를 활용하여 해결했습니다.",
    duration: "4개월",
    teamSize: "3명",
  },
  {
    id: 6,
    title: "Blog Platform",
    shortDescription: "개인 블로그 플랫폼",
    description:
      "개인 블로그 플랫폼입니다. 마크다운 에디터, 태그 시스템, 댓글 기능, 검색 기능이 포함되어 있습니다. 작성자와 독자 모두를 고려한 직관적인 인터페이스를 제공합니다.",
    image:
      "https://readdy.ai/api/search-image?query=blog%20platform%20interface%2C%20content%20management%20system%2C%20writing%20interface%2C%20clean%20blog%20design%2C%20modern%20cms&width=600&height=400&seq=proj006&orientation=landscape",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "fullstack",
    features: [
      "마크다운 에디터",
      "태그 및 카테고리 시스템",
      "댓글 및 좋아요 기능",
      "검색 및 필터링",
      "RSS 피드 생성",
      "관리자 대시보드",
    ],
    challenges: "SEO 최적화와 콘텐츠 관리 시스템 구축이 핵심이었습니다.",
    solution: "Next.js의 SSG/ISR 기능과 효율적인 데이터 구조 설계로 해결했습니다.",
    duration: "6주",
    teamSize: "2명",
  },
];

const categories = [
  { id: "all", name: "전체" },
  { id: "frontend", name: "Frontend" },
  { id: "fullstack", name: "Fullstack" },
  { id: "mobile", name: "Mobile" },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

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
                        Code
                      </Button>
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
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                    <TabsTrigger
                      value="overview"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      개요
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      상세정보
                    </TabsTrigger>
                    <TabsTrigger
                      value="tech"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      기술스택
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
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
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            <i className="ri-external-link-line mr-2"></i>
                            라이브 데모
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4">
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

                    <div>
                      <h4 className="font-semibold text-white mb-2">도전 과제</h4>
                      <p className="text-gray-300 mb-4">{project.challenges}</p>

                      <h4 className="font-semibold text-white mb-2">해결 방안</h4>
                      <p className="text-gray-300">{project.solution}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="tech" className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-3">사용 기술</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.tech.map((tech, index) => (
                          <div key={index} className="flex items-center p-3 bg-gray-700 rounded-lg">
                            <div className="w-8 h-8 flex items-center justify-center bg-blue-600/20 rounded-lg mr-3">
                              <i className="ri-code-line text-blue-400"></i>
                            </div>
                            <span className="font-medium text-white">{tech}</span>
                          </div>
                        ))}
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
