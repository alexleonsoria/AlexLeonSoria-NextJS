import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización documental: cuándo usar OCR, IA o soluciones simples | Alex León",
  description: "Elegir la tecnología documental correcta ahorra miles de dólares en operaciones. Conoce cuándo aplicar OCR estructurado, IA para no estructurados o APIs directas.",
  openGraph: {
    title: "Automatización documental: cuándo usar OCR, IA o soluciones simples | Alex León",
    description: "Analizamos las diferencias de costo, latencia y mantenibilidad entre OCR rígido, IA cognitiva e integraciones nativas de datos.",
    url: "https://www.alexleonsoria.com/blog/ocr-vs-ia",
    type: "article",
    images: [
      {
        url: "/img/blog-ocr.jpg",
        width: 1200,
        height: 630,
        alt: "Automatización documental con OCR e Inteligencia Artificial",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización documental: cuándo usar OCR, IA o soluciones simples",
    description: "Elección de tecnologías óptimas para transcripción y procesamiento de documentos comerciales.",
    images: ["/img/blog-ocr.jpg"],
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
            Automatización documental: cuándo usar OCR, IA o soluciones simples
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
            Un problema operativo clásico en muchas empresas es la dependencia de equipos dedicados exclusivamente a leer facturas, contratos o tickets, y transcribir datos de forma manual. Este "tecleo" no solo es lento y propenso a errores, sino extremadamente costoso. Afortunadamente, hoy tenemos múltiples caminos para resolverlo, pero la clave está en escoger la tecnología correcta.
          </p>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">Diferencia entre OCR, IA y automatización tradicional</h2>
          <p className="text-slate-700 mb-6">
            A menudo se confunden, pero tienen usos muy distintos. El <strong>OCR (Reconocimiento Óptico de Caracteres)</strong> funciona como un "calco estructural": sabe leer texto de una imagen si le indicas exactamente en qué coordenadas mirar. Por otro lado, la <strong>Inteligencia Artificial (IA Generativa o Visión Computacional Avanzada)</strong> puede leer el documento, entender el contexto (por ejemplo, saber que "monto", "total" o "importe" son lo mismo) y extraer el dato sin importar dónde esté ubicado. La automatización tradicional es usar APIs o formatos digitales crudos (como XML/JSON), los cuales no requieren lectura de imagen en absoluto.
          </p>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">Cuándo usar OCR (estructurado)</h2>
          <p className="text-slate-700 mb-6">
            El OCR es tu mejor amigo cuando tienes documentos <strong>altamente estructurados</strong> que nunca cambian su formato. Ejemplo: DNI (cédula de identidad), pasaportes, formularios estándar internos o plantillas únicas emitidas por el gobierno. Si sabes que el "RUC" siempre estará en la posición X=10, Y=20, el OCR es extremadamente rápido, determinista y económico. Escalar estas transacciones costará centavos.
          </p>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">Cuándo usar IA (documentos complejos)</h2>
          <p className="text-slate-700 mb-6">
            La IA entra a la cancha cuando lidias con <strong>documentos no estructurados o semiestructurados</strong>. Ejemplos típicos son las facturas de cientos de proveedores (cada una diseña su factura distinto), recibos (fotografiados con celular, arrugados), o la extracción de cláusulas legales extensas dentro de contratos. Aquí la IA aporta valor porque infiere el campo deseado. El costo transaccional es un poco mayor y requiere monitoreo humano (Human-In-The-Loop) para casos de baja confianza (ej. letras ilegibles), pero destraba cuellos de botella masivos de procesamiento.
          </p>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">Cuándo NO usar ninguna (procesos simples)</h2>
          <p className="text-slate-700 mb-6">
            Si el documento con el que lidias nace en formato digital (Ej.: Tu proveedor ya genera facturas electrónicas XML/JSON o recibes la data directamente en un CSV o Excel estándar), <strong>ni OCR ni IA tienen cabida</strong>. En este caso deberías estar exigiendo una integración por API, un script simple de mapeo de datos u otra herramienta clásica de conectividad o RPA para inyectar los datos directo a tu ERP. Procesar una imagen de un PDF generado digitalmente de una fuente nativa es desperdiciar ciclos de computación y dinero.
          </p>

          <h2 className="text-2xl font-bold text-[#003358] mt-12 mb-4">Impacto en costos y eficiencia</h2>
          <p className="text-slate-700 mb-6">
            Mapear correctamente la herramienta según la complejidad documental tiene un impacto profundo en tus márgenes operativos. Usar IA generativa para leer plantillas estáticas es regalar el presupuesto a los proveedores de la nube. Por el contrario, intentar configurar 5,000 reglas OCR para 5,000 tipos diferentes de facturas te atrapará en un ciclo infinito de soporte, mantenimiento de plantillas que cambian todo el tiempo y pérdida de agilidad operativa.
          </p>

          <div className="bg-[#F8FAFC] border-l-4 border-[#C0DF16] p-6 rounded-r-xl my-16 shadow-sm">
            <h3 className="font-bold text-[#003358] text-xl mb-2">En conclusión</h3>
            <p className="text-slate-700 font-light mb-0">
              Elegir bien la tecnología (ya sea OCR, API, automatización o IA) en lugar de subirse a ciegas a una tendencia reduce costos, acorta el tiempo de implementación y mitiga drásticamente los riesgos de fracaso para tu operación.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#003358] text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-6">¿Tu equipo pierde horas transcribiendo recibos y contratos?</h2>
          <p className="text-[#E0F7FA] text-lg font-light mb-12">
            Analicemos tu documentación y escojamos la arquitectura correcta.
          </p>
          <Link 
            href="/#contacto" 
            className="inline-flex items-center justify-center gap-3 bg-[#C0DF16] text-[#003358] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a8c414] transition-all shadow-lg"
          >
            Agenda una consultoría para optimizar tus procesos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
