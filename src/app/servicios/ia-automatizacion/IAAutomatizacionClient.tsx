"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function IAAutomatizacionClient() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center py-20 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-dot-pattern opacity-50 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-4 inline-flex items-center rounded-full bg-[#E0F7FA] px-3 py-1 text-sm font-semibold text-[#00B4D8]">
              Mis Servicios
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#003358] mb-6 leading-tight">
              Automatización e IA aplicada para mejorar productividad y reducir costos
            </h1>
            <p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
              Transforma procesos manuales en operaciones eficientes mediante automatización e inteligencia artificial.
            </p>
            <a 
              href="/#contacto" 
              className="inline-flex items-center justify-center gap-3 bg-[#C0DF16] text-[#003358] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a8c414] transition-all shadow-lg shadow-[#C0DF16]/20"
            >
              AGENDA UNA CONSULTORÍA
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square bg-slate-200 w-full h-[400px]">
              <Image 
                src="/img/automatizacion-ia.jpg" 
                alt="Automatización e IA" 
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA Y SOLUCIÓN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-[#003358] mb-8">¿El problema?</h2>
            <ul className="space-y-6">
              {[
                "Procesos manuales lentos que retrasan la operación",
                "Costos operativos elevados debido a ineficiencias",
                "Baja eficiencia del equipo, dedicado a tareas repetitivas"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 mt-1">
                    <span className="font-bold">×</span>
                  </div>
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[#003358] mb-8">La solución</h2>
            <div className="prose prose-lg text-slate-600 font-light prose-p:leading-relaxed">
              <p>
                Automatizo las tareas repetitivas que quitan tiempo valioso a tu equipo. Utilizo herramientas de integración, <strong>RPA</strong> (Automatización Robótica de Procesos) e <strong>Inteligencia Artificial Generativa</strong> para agilizar flujos de trabajo clave.
              </p>
              <p>
                Diseño sistemas que pueden leer documentos, extraer datos, y conectar distintas plataformas en segundos, liberando tu fuerza de trabajo para tareas verdaderamente estratégicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EJEMPLO DE SOLUCIÓN */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-[#003358] mb-12 text-center">Ejemplo de solución</h2>
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
             <h3 className="text-xl md:text-2xl font-bold text-[#00B4D8] mb-8 border-b border-slate-200 pb-4">
               Caso: Automatización del procesamiento documental con IA
             </h3>
             
             <div className="space-y-8">
               <div>
                 <h4 className="font-bold text-[#003358] mb-2">Contexto:</h4>
                 <p className="text-slate-600 font-light leading-relaxed">Un equipo operativo gestionaba grandes volúmenes de documentos de forma manual, generando retrasos y errores en el procesamiento.</p>
               </div>
               
               <div>
                 <h4 className="font-bold text-[#003358] mb-2">Problema:</h4>
                 <p className="text-slate-600 font-light leading-relaxed">Los tiempos de respuesta eran altos y el equipo dedicaba gran parte de su tiempo a tareas repetitivas sin valor estratégico.</p>
               </div>
               
               <div>
                 <h4 className="font-bold text-[#003358] mb-2">Intervención:</h4>
                 <p className="text-slate-600 font-light leading-relaxed">Se implementó una solución basada en IA para la extracción y clasificación automática de información desde documentos. Además, se integró con los sistemas existentes para automatizar el flujo completo del proceso.</p>
               </div>
               
               <div className="bg-white p-6 rounded-2xl border border-[#C0DF16]/50 shadow-sm relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#C0DF16]"></div>
                 <h4 className="font-extrabold text-[#003358] mb-2 flex items-center gap-2">
                   <CheckCircle2 className="w-5 h-5 text-[#C0DF16]" />
                   Resultado:
                 </h4>
                 <p className="text-slate-700 font-medium leading-relaxed">Se redujo significativamente el tiempo de procesamiento, se eliminaron tareas manuales repetitivas y el equipo pudo enfocarse en actividades de mayor valor.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#003358] mb-16">
            Resultados que obtendrás
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ahorro de tiempo", desc: "Tareas de horas ejecutadas en minutos o segundos, operando 24/7." },
              { title: "Reducción de costos", desc: "Menos dependencia de horas hombre y drástica disminución de errores manuales." },
              { title: "Mayor productividad", desc: "Tu equipo logrará crear mayor impacto estratégico al dejar de lado la carga manual." }
            ].map((res, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#E0F7FA] text-[#00B4D8] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#003358] mb-3">{res.title}</h3>
                <p className="text-slate-600 font-light">{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
