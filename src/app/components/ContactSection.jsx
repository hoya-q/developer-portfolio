"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락해주세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">연락 정보</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                프로젝트 문의, 협업 제안, 또는 단순히 안녕하고 인사하고 싶으시다면 아래 연락처로 언제든 연락해주세요.
                48시간 이내에 답변드리겠습니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-lg">
                  <i className="ri-mail-line text-blue-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400">contact@kimminseong.dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-lg">
                  <i className="ri-phone-line text-blue-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-400">+82 10-1234-5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-lg">
                  <i className="ri-map-pin-line text-blue-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400">Seoul, South Korea</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium text-white mb-4">소셜 미디어</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-github-fill text-gray-300 text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-gray-300 text-xl"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-twitter-fill text-gray-300 text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">메시지 보내기</h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-2"></i>
                  <span className="text-green-300">메시지가 성공적으로 전송되었습니다!</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="hong@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none text-white placeholder-gray-400"
                  placeholder="안녕하세요! 프로젝트에 대해 이야기하고 싶습니다..."
                />
                <div className="text-right text-sm text-gray-500 mt-1">{formData.message.length}/500</div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    전송 중...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2"></i>
                    메시지 전송
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
