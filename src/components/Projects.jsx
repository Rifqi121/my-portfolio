import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="h-auto bg-gradient-to-b from-gray-800 to-gray-900 text-white relative">
      <div className="max-w-screen-xl px-6 mx-auto">
        <h2 className="text-4xl font-bold text-center">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="h-80 h-xl-100 p-4 bg-gray-700 rounded-lg flex flex-col justify-center">
              <img src={project.image} alt={project.title} className="rounded-lg w-full h-30 object-cover mb-4" />
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="text-sm">{project.description.length > 30
                ? project.description.slice(0, 30) + "..."
                : project.description}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg btn-hover"
              >
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Pop-up */}
{selectedProject && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
  <div className="modal-content bg-gray-800 p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col relative">

      
      {/* Tombol Close */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-white text-2xl close-btn"
      >
        ✖
      </button>

      {/* Konten Modal */}
      <h3 className="text-2xl font-bold text-center">{selectedProject.title}</h3>
      <p className="mt-2 text-sm">{selectedProject.description}</p>
      <p className="mt-2 text-sm font-semibold">Jobdesk: {selectedProject.jobdesk}</p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedProject.tools.map((tool, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 text-sm rounded-lg whitespace-nowrap tool-hover">
            {tool}
          </span>
        ))}
      </div>

      {/* Swiper Carousel */}
      <div className="mt-4">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        className="rounded-lg"
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-play tiap 2 detik
        modules={[Autoplay]} 
        loop={true} 
      >
        {selectedProject.screenshots.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Screenshot ${i + 1}`} className="w-full max-h-60 object-contain rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      {/* Tombol ke Repository */}
      <a
        href={selectedProject.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 px-4 py-2 text-center bg-blue-500 text-white rounded-lg btn-hover transition"
      >
        Go to Repository
      </a>
    </div>
  </div>
)}

    </section>
  );
};

export default Projects;

const projects = [
  {
    title: "SOLVE",
    description: "SOLVE: System for Complaint and Voice Expression merupakan sebuah aplikasi website yang dirancang khusus untuk mahasiswa. Aplikasi ini memberikan platform yang terintegrasi untuk mahasiswa menyampaikan pengaduan, aspirasi, dan saran terkait dengan lingkungan akademik, prodi dan organisasi. SOLVE membuka kesempatan bagi mahasiswa untuk berpartisipasi aktif dalam peningkatan kualitas prodi, memperkuat komunitas akademik, dan meningkatkan pengalaman belajar.",
    link: "https://github.com/Rifqi121/solve",
    image: "/assets/solve1.PNG", // Thumbnail utama
    jobdesk: "Frontend Developer",
    screenshots: [
      "/assets/solve1.PNG",
      "/assets/solve2.PNG",
      "/assets/solve3.PNG",
      "/assets/solve4.PNG",
    ], // Screenshot untuk carousel
    tools:["HTML", "CSS", "Tailwind CSS", "JavaScript", "Laravel"],
  },
  {
    title: "Website Yayasan Al-Ukhuwwah",
    description: "Website Al-Ukhuwwah adalah platform berbasis web yang dirancang khusus untuk Yayasan Al-Ukhuwwah Griya Bandung Asri Barat. Fungsi utama website ini adalah sebagai platform digital yang memudahkan akses informasi, administrasi, dan interaksi dengan masyarakat.",
    link: "https://github.com/Rifqi121/Project_PROKON",
    image: "/assets/alukhuwwah1.PNG",
    jobdesk: "Frontend Developer",
    screenshots: [
      "/assets/alukhuwwah1.PNG",
      "/assets/alukhuwwah2.PNG",
      "/assets/alukhuwwah3.PNG",
      "/assets/alukhuwwah4.PNG",
    ],
    tools:["HTML", "CSS", "JavaScript", "Laravel", "Bootstrap"],
  },
  {
    title: "Website Troposianimal",
    description: "Tropisianimal merupakan sebuah website informasi yang berbagai macam informasi mengenai hewan-hewan yang hidup di daerah yang memiliki iklim tropis. Website tersebut digunakan untuk memperoleh berita-berita serta gambar yang berkaitan dengan hewan yang hidup di daerah beriklim tropis, serta menjadi sarana untuk membangun komunitas bagi pencinta hewan. ",
    link: "",
    image: "/assets/tropo1.PNG",
    jobdesk: "Fullstack Developer",
    screenshots: [
      "/assets/tropo1.PNG",
      "/assets/tropo2.PNG",
      "/assets/tropo3.PNG",
    ],
    tools:["HTML", "CSS", "JavaScript", "Laravel", "Bootstrap", "MySQL"],
  },
  {
    title: "Project Junior Web Developer",
    description: "Project ini merupakan tugas sebagai salah satu syarat serifikasi sebagai Junior Web Developer yang dilaksanakan oleh BNSP. Website ini merupakan website yang berisi informasi mengenai beasiswa.",
    link: "https://github.com/Rifqi121/TugasPraktekAsesi",
    image: "/assets/jwd1.PNG",
    jobdesk: "Fullstack Developer",
    screenshots: [
      "/assets/jwd1.PNG",
      "/assets/jwd2.PNG",
      "/assets/jwd3.PNG",
    ],
    tools:["HTML", "CSS", "JavaScript", "Laravel", "Bootstrap", "MySQL"],
  },
  {
    title: "Project Digitalent Scholarship",
    description: "Project ini merupakan tugas sebagai salah satu syarat serifikasi yang dilaksanakan oleh Digitalent. Website ini merupakan website yang berisi informasi mengenai pariwisata Indonesia.",
    link: "https://github.com/Rifqi121/TugasAkhir_JWD",
    image: "/assets/digi2.PNG",
    jobdesk: "Fullstack Developer",
    screenshots: [
      "/assets/digi1.PNG",
      "/assets/digi2.PNG",
      "/assets/digi3.PNG",
    ],
    tools:["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
  }
];
