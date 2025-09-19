const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
      {/* Foto Profil */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-b from-blue-400 to-blue-800">
          <img
            src="/assets/pasfoto.png"
            alt="Rifqi"
            className="w-full h-full object-cover rounded-full border-4 border-gray-900"
          />
        </div>
      </div>

      {/* Teks Perkenalan */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start mt-6 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold">Hi There👋</h1>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">I'm Rifqi Fauzan Adzikra</h2>
        <p className="text-lg md:text-xl mt-4">Developer</p>

        <a href="#projects" className="mt-6 px-6 py-3 bg-blue-700 rounded-lg text-white btn-hover cursor-pointer">
  View My Projects
</a>

      </div>
    </section>
  );
};

export default Hero;
