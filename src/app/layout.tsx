import "./globals.css";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexleonsoria.com"),
  title: "Alex León | Estrategia Tecnológica e IA",
  description: "Ayudo a empresas y entidades públicas a transformar la tecnología en eficiencia, rentabilidad y crecimiento real.",
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-lime/30 selection:text-navy flex flex-col">
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-24 md:h-28 flex items-center justify-between">
            <a href="/#inicio" className="block mr-8 flex items-center">
              <Image 
                src="/img/logotipoalexleon.png" 
                alt="Alex León Logo Premium" 
                width={252}
                height={84}
                className="h-[60px] md:h-[84px] w-auto" 
                priority
              />
            </a>
            <div className="hidden md:flex items-center gap-8 text-[1.05rem] font-semibold">
              <a href="/#inicio" className="text-[#003358] hover:text-[#00B4D8] transition-colors">Inicio</a>
              <a href="/#servicios" className="text-[#003358] hover:text-[#00B4D8] transition-colors">Servicios</a>
              <a href="/#metodo" className="text-[#003358] hover:text-[#00B4D8] transition-colors">El Método</a>
              <a href="/#autoridad" className="text-[#003358] hover:text-[#00B4D8] transition-colors">Autoridad</a>
              <a href="/#blog" className="text-[#003358] hover:text-[#00B4D8] transition-colors">Blog</a>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow pt-24 md:pt-28">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-50 py-12 border-t border-slate-200 text-center flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <a href="/#inicio" className="block">
              <Image 
                src="/img/logotipoalexleon.png" 
                alt="Alex León Logo Premium" 
                width={216}
                height={72}
                className="h-[72px] w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/alexleonsoria/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#003358]/60 hover:text-[#00B4D8] transition-colors p-2 hover:-translate-y-1 duration-200"
              aria-label="Perfil de LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Alex Rodolfo León Soria. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
