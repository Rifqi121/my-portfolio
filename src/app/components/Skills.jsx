const skills = [
  { name: "HTML", deviconName: "html5" },
  { name: "CSS", deviconName: "css3" },
  { name: "Tailwind CSS", deviconName: "tailwindcss" },
  { name: "JavaScript", deviconName: "javascript" },
  { name: "Laravel", deviconName: "laravel" },
  { name: "Bootstrap", deviconName: "bootstrap" },
  { name: "Git", deviconName: "git" },
  { name: "Next.js", deviconName: "nextjs" },
  { name: "PHP", deviconName: "php" },
  { name: "MySQL", deviconName: "mysql" },
  { name: "Figma", deviconName: "figma" },
  { name: "Flutter", deviconName: "flutter" },
  { name: "Dart", deviconName: "dart" },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {skills.map((skill, index) => {
            const logoUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.deviconName}/${skill.deviconName}-original.svg`;
            
            return (
              <span key={index} className="px-4 py-2 bg-gray-700 rounded-lg tool-hover flex items-center gap-x-2">
                <img 
                  src={logoUrl} 
                  alt={`${skill.name} logo`} 
                  width="24" 
                  height="24"
                  className="object-contain"
                />
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;