'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-['Pacifico'] text-2xl font-bold text-white">hoya</h3>
            <p className="text-gray-400 leading-relaxed">
              사용자 경험을 중시하는 프론트엔드 개발자입니다. 
              항상 새로운 기술을 배우고 성장하고자 합니다.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-github-fill text-gray-400 text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-gray-400 text-xl"></i>
              </a>
              <a 
                href="mailto:contact@example.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-mail-fill text-gray-400 text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">About</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">Experience</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a>
              <a href="#education" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">Education</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-gray-400"></i>
                <span className="text-gray-400">contact@kimminseong.dev</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-gray-400"></i>
                <span className="text-gray-400">+82 10-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-gray-400"></i>
                <span className="text-gray-400">Seoul, South Korea</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} 김민성. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}