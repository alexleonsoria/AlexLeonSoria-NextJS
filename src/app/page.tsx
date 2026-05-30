import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex León | Estrategia Tecnológica e IA",
  description: "Ayudo a empresas y entidades públicas a transformar la tecnología en eficiencia, rentabilidad y crecimiento real.",
  openGraph: {
    title: "Alex León | Estrategia Tecnológica e IA",
    description: "Ayudo a empresas y entidades públicas a transformar la tecnología en eficiencia, rentabilidad y crecimiento real.",
    url: "https://www.alexleonsoria.com",
    type: "website",
    images: [
      {
        url: "/img/home.jpg",
        width: 1200,
        height: 630,
        alt: "Alex León Consultoría Tecnológica",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex León | Estrategia Tecnológica e IA",
    description: "Ayudo a empresas y entidades públicas a transformar la tecnología en eficiencia, rentabilidad y crecimiento real.",
    images: ["/img/home.jpg"],
  }
};

export default function Page() {
  return <HomeClient />;
}
