"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=developer%20working%20at%20computer%20in%20dark%20room%2C%20modern%20workspace%20setup%2C%20multiple%20monitors%20with%20dark%20theme%2C%20coding%20environment%2C%20clean%20dark%20desk%20with%20plants%2C%20professional%20atmosphere%2C%20moody%20lighting&width=600&height=500&seq=about002&orientation=landscape"
              alt="개발자 작업 환경"
              className="w-full rounded-2xl shadow-xl object-cover border border-gray-700"
            />

            {/* Stats Cards */}
            <div className="absolute -bottom-6 -right-6 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">열정적인 프론트엔드 개발자</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                안녕하세요! 사용자 중심의 웹 애플리케이션을 만드는 것에 열정을 가진 프론트엔드 개발자 김민성입니다.
              </p>
              <p className="text-gray-400 leading-relaxed">
                React, JavaScript, Next.js를 주로 사용하여 현대적이고 반응형인 웹 애플리케이션을 개발합니다. 새로운
                기술을 배우는 것을 좋아하며, 사용자 경험을 최우선으로 생각하는 개발자입니다.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">핵심 가치</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600/20 rounded-full mt-0.5">
                    <i className="ri-lightbulb-line text-blue-400 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">창의성</h5>
                    <p className="text-gray-400 text-sm">혁신적이고 창의적인 솔루션을 통해 문제를 해결합니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600/20 rounded-full mt-0.5">
                    <i className="ri-team-line text-blue-400 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">협업</h5>
                    <p className="text-gray-400 text-sm">팀워크를 중시하며 효과적인 커뮤니케이션을 지향합니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600/20 rounded-full mt-0.5">
                    <i className="ri-trophy-line text-blue-400 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">품질</h5>
                    <p className="text-gray-400 text-sm">높은 품질의 코드와 사용자 경험을 제공하기 위해 노력합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
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
