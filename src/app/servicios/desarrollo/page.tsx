import DesarrolloClient from "./DesarrolloClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo de Sistemas a Medida | Alex León",
  description: "Modernización de sistemas legados, portales web robustos y desarrollo de software escalable, 100% alineados con tus objetivos de negocio.",
  openGraph: {
    title: "Desarrollo de Software y Sistemas a Medida | Alex León",
    description: "Software a medida construido a partir de tus verdaderas necesidades del negocio, con entregas ágiles e incrementales.",
    url: "https://www.alexleonsoria.com/servicios/desarrollo",
    type: "website",
    images: [
      {
        url: "/img/desarrollo-software.jpg",
        width: 1200,
        height: 630,
        alt: "Desarrollo de Software Alex León",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de Sistemas a Medida | Alex León",
    description: "Construcción de software a medida enfocado en resultados de negocio.",
    images: ["/img/desarrollo-software.jpg"],
  }
};

export default function Page() {
  return <DesarrolloClient />;
}
