import IAAutomatizacionClient from "./IAAutomatizacionClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización e IA Aplicada | Alex León",
  description: "Transforma tus procesos manuales repetitivos en flujos eficientes operados por RPA, agentes de IA e integración de sistemas.",
  openGraph: {
    title: "Automatización e IA Aplicada a Procesos | Alex León",
    description: "Uso estratégico de IA generativa y automatizaciones para reducir tus costos operativos y mejorar la productividad de tu equipo.",
    url: "https://www.alexleonsoria.com/servicios/ia-automatizacion",
    type: "website",
    images: [
      {
        url: "/img/automatizacion-ia.jpg",
        width: 1200,
        height: 630,
        alt: "Automatización e Inteligencia Artificial",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización e IA Aplicada | Alex León",
    description: "Transformando procesos con inteligencia artificial aplicada y automatización de flujos.",
    images: ["/img/automatizacion-ia.jpg"],
  }
};

export default function Page() {
  return <IAAutomatizacionClient />;
}
