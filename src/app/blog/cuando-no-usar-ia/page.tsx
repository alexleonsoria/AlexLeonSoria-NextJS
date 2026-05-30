import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuándo NO usar IA: decisiones tecnológicas que evitan sobrecostos | Alex León",
  description: "La IA está de moda, pero implementarla sin justificación real infla costos de nube y genera deuda técnica. Conoce cuándo un enfoque tradicional o RPA es mejor.",
  openGraph: {
    title: "Cuándo NO usar IA: decisiones que evitan sobrecostos | Alex León",
    description: "Evita la trampa de usar IA por moda. Analiza cuándo es mejor optar por automatizaciones tradicionales, reglas de negocio o simple lógica transaccional.",
    url: "https://www.alexleonsoria.com/blog/cuando-no-usar-ia",
    type: "article",
    images: [
      {
        url: "/img/blog-no-ia.jpg",
        width: 1200,
        height: 630,
        alt: "Cuándo no usar Inteligencia Artificial",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuándo NO usar IA: decisiones que evitan sobrecostos",
    description: "Evaluación de costos, latencia y mantenibilidad antes de optar por modelos de IA o LLMs.",
    images: ["/img/blog-no-ia.jpg"],
  }
};

export default function Page() {
  return (
    <article className="bg-white">
      {/* HERO */}
      <header className="relative py-24 bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-dot-pattern opacity-50 z-0"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#003358] mb-6 leading-tight">
            Cuándo NO usar IA: decisiones tecnológicas que evitan sobrecostos innecesarios
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-500 font-medium">
            <span>Por <strong className="text-[#00B4D8]">Alex Leon Soria</strong></span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>Blog de Perspectiva Ejecutiva</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate prose-headings:text-[#003358] prose-a:text-[#00B4D8]">
          <p className="lead text-xl text-slate-600 font-light mb-12">
            La Inteligencia Artificial ha dominado la conversación ejecutiva. Sin embargo, no todas las problemáticas requieren una solución basada en redes neuronales o LLMs (Large Language Models). Muchas empresas están adoptando IA impulsadas por la presión del mercado, a menudo sin comprender que esto puede agregar una capa innecesaria de costos, complejidad técnica y la famosa "deuda técnica".
          </p>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">El error de usar IA por moda</h2>
          <p className="text-slate-700 mb-6">
            Cuando la prioridad es "ser innovadores" en lugar de "resolver el problema", vemos proyectos sobredimensionados. Implementar IA implica costos de infraestructura cloud, validación constante de resultados y mantenimiento de modelos, lo cual rara vez se refleja en el presupuesto inicial. Introducir IA en un proceso donde no hace falta es equivalente a reparar un reloj con un martillo hidráulico.
          </p>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">Casos donde NO se necesita IA</h2>
          <ul className="space-y-4 text-slate-700 mb-8 list-disc pl-6">
            <li><strong>Reglas de negocio claras:</strong> Si un proceso puede definirse con condiciones lógicas ('if/then/else') o árboles de decisión cerrados, un motor de reglas tradicional o simple RPA es más rápido, es determinista (no alucina) y su mantenimiento es exponencialmente más económico.</li>
            <li><strong>Automatización básica:</strong> Integrar sistemas a través de APIs (por ejemplo, tomar datos desde un CRM y llevarlos a un ERP) no requiere IA.</li>
            <li><strong>Consultas transaccionales exactas:</strong> Si un usuario necesita consultar su saldo en tiempo real, no lo pases por un bot con LLM; devuélvele un dato estructurado de una base de datos tradicional.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">Impacto en costos y complejidad innecesaria</h2>
          <p className="text-slate-700 mb-6">
            Forzar IA en un proyecto infla el CapEx (inversión inicial) debido a la arquitectura robusta y a la consultoría especializada, pero el mayor impacto está en el OpEx (costo operativo). El procesamiento de tokens y la latencia incrementan las facturas de nube mensuales. Si un sistema tradicional cumple la misma función con menor riesgo de error y costos predecibles, es siempre la decisión ejecutiva correcta.
          </p>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">Cómo tomar mejores decisiones tecnológicas</h2>
          <p className="text-slate-700 mb-6">
            Pregunta siempre: ¿Cuál es el problema raíz? Antes de escoger la tecnología, evalúa el coste operativo, la mantenibilidad y la precisión requerida al 100%. Si la lógica es perfectamente calculable, mantente en un enfoque clásico u orientate a la automatización de flujos simples (RPA/Integración).
          </p>

          <div className="bg-[#F8FAFC] border-l-4 border-[#C0DF16] p-6 rounded-r-xl my-16 shadow-sm">
            <h3 className="font-bold text-[#003358] text-xl mb-2">En conclusión</h3>
            <p className="text-slate-700 font-light mb-0">
              La mejor solución no siempre es la más avanzada, sino la que es más eficiente para el negocio. Descartar la IA a tiempo es una de las mejores decisiones de ahorro que puede tomar un líder tecnológico.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#003358] text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-6">¿Estás a punto de invertir en innovación?</h2>
          <p className="text-[#E0F7FA] text-lg font-light mb-12">
            Asegúrate de tomar la decisión tecnológica correcta antes de asignar presupuesto. 
          </p>
          <Link 
            href="/#contacto" 
            className="inline-flex items-center justify-center gap-3 bg-[#C0DF16] text-[#003358] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a8c414] transition-all shadow-lg"
          >
            Agenda una consultoría para evaluar tu caso
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
