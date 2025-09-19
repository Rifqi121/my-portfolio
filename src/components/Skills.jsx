const skills = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Laravel", "Bootstrap","Git", "React", "NodeJS"];

const Skills = () => {
  return (
    <section id="skills" className="h-100 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-gray-700 rounded-lg tool-hover">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
