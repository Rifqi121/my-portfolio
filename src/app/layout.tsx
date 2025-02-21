import "./globals.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-gray-900 text-white">
      <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        {children} {/* Untuk merender halaman yang aktif */}
      </body>
    </html>
  );
}
