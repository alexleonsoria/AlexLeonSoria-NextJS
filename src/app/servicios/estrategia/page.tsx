import EstrategiaClient from "./EstrategiaClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estrategia y Diagnóstico Tecnológico | Alex León",
  description: "Evalúa tu madurez digital, optimiza tus costos en TI y define un roadmap estratégico priorizado por ROI real para tu organización.",
  openGraph: {
    title: "Estrategia y Diagnóstico Tecnológico | Alex León",
    description: "Define una hoja de ruta tecnológica alineada al P&L y objetivos estratégicos de tu negocio.",
    url: "https://www.alexleonsoria.com/servicios/estrategia",
    type: "website",
    images: [
      {
        url: "/img/estrategia-tecnologica.jpg",
        width: 1200,
        height: 630,
        alt: "Estrategia Tecnológica Alex León",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estrategia y Diagnóstico Tecnológico | Alex León",
    description: "Hoja de ruta tecnológica alineada a resultados de negocio reales.",
    images: ["/img/estrategia-tecnologica.jpg"],
  }
};

export default function Page() {
  return <EstrategiaClient />;
}
