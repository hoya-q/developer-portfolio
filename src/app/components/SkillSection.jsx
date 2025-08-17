"use client";

export default function SkillSection() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "ri-window-line",
      color: "text-blue-400",
    },
    {
      category: "Backend",
      icon: "ri-server-line",
      color: "text-green-400",
    },
    {
      category: "Mobile",
      icon: "ri-smartphone-line",
      color: "text-purple-400",
    },
    {
      category: "DevOps",
      icon: "ri-settings-3-line",
      color: "text-orange-400",
    },
    {
      category: "UI/UX",
      icon: "ri-palette-line",
      color: "text-pink-400",
    },
    {
      category: "Data",
      icon: "ri-database-2-line",
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Tools</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">다양한 분야에서 사용하는 기술과 도구들입니다.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-800 rounded-xl group-hover:bg-gray-700 transition-colors`}
                >
                  <i className={`${skill.icon} ${skill.color} text-3xl`}></i>
                </div>
                <h3 className="text-white font-semibold text-lg">{skill.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
