"use client";

import { useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Loader2,
  Brain, 
  Code2, 
  LineChart, 
  Award,
  CheckCircle2,
  Send,
  Building2,
  CheckCircle,
  Cloud,
  TerminalSquare,
  GraduationCap,
  TrendingDown,
  ServerOff,
  Target,
  Clock,
  Users
} from "lucide-react";

export default function HomeClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    objective: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");
    setSubmitSuccess(false);

    // Validation
    if (!formData.name) return setValidationError("El campo 'Tu nombre completo' es obligatorio.");
    if (!formData.email) return setValidationError("El campo 'Correo corporativo' es obligatorio.");
    if (!formData.phone) return setValidationError("El campo 'Teléfono' es obligatorio.");
    if (!formData.objective) return setValidationError("Debes seleccionar '¿Qué objetivo buscas?'.");

    setIsSubmitting(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_telefono: formData.phone,
      user_objetivo: formData.objective,
      user_message: formData.message
    };

    try {
      await emailjs.send(
        "Personal", // Service ID
        "template_crhv02i", // Template ID
        templateParams, // Template params mapping
        "TSx2GpS4ztLKn9GgD" // Public Key
      );
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        objective: "",
        message: ""
      });
    } catch (error) {
      console.error("Error enviando email:", error);
      setValidationError("Ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-lime/30 selection:text-navy">
      <main>
        {/* 2. HERO SECTION */}
        <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white bg-dot-pattern">
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-[position:right_center] md:bg-[position:calc(100%+5rem)_center] lg:bg-[position:calc(100%+10rem)_center]"
            style={{ backgroundImage: `url('/img/banner_hero.jpg')` }}
          />
          {/* Gradient Overlay Layer (White gradient to blend the image) */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/95 to-transparent w-full md:w-3/4 lg:w-[60%]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
            <motion.div 
              className="max-w-2xl py-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1] font-extrabold text-[#003358] mb-6">
                Estrategia tecnológica e IA que generan resultados reales.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Ayudo a empresas y entidades públicas a convertir la tecnología en eficiencia, rentabilidad y crecimiento.
              </p>
              
              <div className="flex flex-col items-start gap-4">
                <a 
                  href="#contacto" 
                  className="inline-flex items-center justify-center gap-3 bg-[#C0DF16] text-[#003358] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a8c414] transition-all hover:scale-105 shadow-xl shadow-[#C0DF16]/20"
                >
                  AGENDA UNA CONSULTORÍA
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRESENTACIÓN VIDEO */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-extrabold text-[#003358] mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Conoce cómo la tecnología puede generar resultados reales en tu negocio
            </motion.h2>
            
            <motion.div 
              className="relative w-full max-w-[800px] mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 bg-slate-100 border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/KdJLK7d5H-E"
                title="Presentación Alex León Soria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center gap-3 bg-[#C0DF16] text-[#003358] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a8c414] transition-all shadow-lg hover:scale-105"
              >
                AGENDA UNA CONSULTORÍA
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* PROBLEMAS QUE RESUELVO */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003358] mb-6">Los problemas que están frenando tu negocio</h2>
              <div className="w-20 h-1.5 bg-[#C0DF16] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                Si te identificas con alguno de estos puntos, es momento de replantear tu estrategia tecnológica.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Proyectos TI que no generan resultados", icon: <TrendingDown className="w-6 h-6 text-red-500" /> },
                { title: "Sistemas que limitan tu crecimiento", icon: <ServerOff className="w-6 h-6 text-orange-500" /> },
                { title: "Decisiones tecnológicas sin impacto estratégico", icon: <Target className="w-6 h-6 text-slate-500" /> },
                { title: "Costos TI fuera de control", icon: <LineChart className="w-6 h-6 text-purple-500" /> },
                { title: "Dependencia excesiva de proveedores", icon: <Users className="w-6 h-6 text-blue-500" /> },
                { title: "Procesos manuales que deberían estar automatizados", icon: <Clock className="w-6 h-6 text-cyan-500" /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003358] mb-2">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MIS SERVICIOS */}
        <section id="servicios" className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003358] mb-6">Mis Servicios</h2>
              <div className="w-20 h-1.5 bg-[#C0DF16] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <LineChart />,
                  title: "Diagnóstico y estrategia tecnológica",
                  desc: "Para empresas que necesitan resultados reales, no solo planes sobre el papel.",
                  bullets: ["Evaluación de madurez digital", "Roadmap alineado a resultados", "Optimización de costos TI"],
                  link: "/servicios/estrategia"
                },
                {
                  icon: <Brain />,
                  title: "Automatización e IA aplicada",
                  desc: "Uso de tecnología para reducir costos operativos y mejorar la productividad.",
                  bullets: ["Automatización de procesos (RPA/BPM)", "IA generativa aplicada a operaciones", "Optimización de procesos clave del negocio"],
                  link: "/servicios/ia-automatizacion"
                },
                {
                  icon: <Code2 />,
                  title: "Desarrollo de sistemas a medida",
                  desc: "Soluciones tecnológicas que impactan directamente en la operación y resultados.",
                  bullets: ["Sistemas internos", "Plataformas digitales", "Modernización de sistemas legacy"],
                  link: "/servicios/desarrollo"
                }
              ].map((serv, i) => (
                <Link
                  href={serv.link}
                  key={i}
                  className="bg-white border border-slate-100 p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 relative group shadow-lg shadow-slate-200/50 flex flex-col cursor-pointer"
                >
                  <div className="w-16 h-16 bg-[#F0FBFC] border border-[#E0F7FA] text-[#00B4D8] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00B4D8] group-hover:text-white transition-colors shadow-sm">
                    {serv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003358] mb-4 leading-tight">{serv.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light mb-6 flex-grow">{serv.desc}</p>
                  
                  <ul className="space-y-3">
                    {serv.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. EL MÉTODO ALEX LEÓN */}
        <section id="metodo" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex justify-center order-2 md:order-1"
              >
                <div className="absolute inset-0 bg-[#C0DF16] rounded-full blur-3xl scale-90 translate-x-4 translate-y-4 opacity-20"></div>
                <div className="absolute inset-0 bg-[#00B4D8] rounded-full blur-3xl scale-90 -translate-x-4 -translate-y-4 opacity-10"></div>
                
                <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl ring-1 ring-slate-100 aspect-square w-4/5 max-w-sm bg-slate-100 flex flex-col items-center justify-center text-slate-400">
                  <Image 
                    src="/img/perfil_alex.jpg" 
                    alt="Alex León Profile" 
                    width={384}
                    height={384}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    priority
                  />
                  <div className="relative z-0 flex flex-col items-center justify-center">
                     <GraduationCap className="w-16 h-16 text-slate-300 mb-4" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:pl-4 lg:pl-10 order-1 md:order-2"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#003358] mb-12">El Método Alex León</h3>
                
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Diagnóstico estratégico", desc: "Analizo detalladamente tu operación actual, tecnología y estructura de costos." },
                    { step: "2", title: "Identificación de oportunidades", desc: "Detecto exactamente dónde la tecnología puede generar un impacto real." },
                    { step: "3", title: "Implementación ágil", desc: "Despliegue de soluciones rápidas, de forma iterativa y completamente medibles." },
                    { step: "4", title: "Resultados", desc: "Logramos optimización de métricas, eficiencia operativa y escalabilidad." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-[#E0F7FA] text-[#003358] font-bold text-lg flex items-center justify-center flex-shrink-0 border border-[#00B4D8]/20">
                        {item.step}
                      </div>
                      <div className="pt-2">
                        <h4 className="text-lg font-bold text-[#003358] mb-1">{item.title}</h4>
                        <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. SECCIÓN DE AUTORIDAD */}
        <section id="autoridad" className="py-24 bg-[#003358] relative border-y border-[#00223d]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="text-5xl lg:text-5xl font-extrabold text-[#C0DF16] mb-3">+20</div>
                <div className="text-sm font-medium text-white tracking-wide uppercase">años liderando TI corporativa</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="text-5xl lg:text-5xl font-extrabold text-[#00B4D8] mb-3">CIO</div>
                <div className="text-sm font-medium text-white tracking-wide uppercase">& Country Manager exp.</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="text-5xl lg:text-5xl font-extrabold text-[#C0DF16] mb-3">+50</div>
                <div className="text-sm font-medium text-white tracking-wide uppercase">proyectos tech liderados</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="text-5xl lg:text-5xl font-extrabold text-[#00B4D8] mb-3">Sector Público</div>
                <div className="text-sm font-medium text-white tracking-wide uppercase">experiencia en transformación</div>
              </motion.div>
            </div>
            
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-[#E0F7FA] font-light leading-relaxed italic">
                "Entiendo el lenguaje del negocio y los retos de la ejecución tecnológica porque he estado iterativamente del lado del cliente pidiendo resultados."
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-center text-xl font-bold text-[#00B4D8] mb-10 tracking-widest uppercase text-sm">Respaldo Profesional</h4>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "AWS Certified Cloud Practitioner",
                  "Professional Scrum Master",
                  "ITIL",
                  "Vertex AI Studio (Google)",
                  "Machine Learning Microsoft (2026)"
                ].map((cert, index) => (
                  <span key={index} className="bg-white/10 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#C0DF16] hover:text-[#003358] hover:border-[#C0DF16] transition-all cursor-default">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

             {/* Carrusel de logos */}
             <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 text-white/60 hover:text-white/90 transition-opacity">
                <div className="flex items-center gap-3 font-bold text-2xl tracking-wide"><Cloud className="w-8 h-8 text-[#00B4D8] opacity-80"/> AWS</div>
                <div className="flex items-center gap-3 font-bold text-2xl tracking-wide"><TerminalSquare className="w-8 h-8 text-[#C0DF16] opacity-80"/> Microsoft</div>
                <div className="flex items-center gap-3 font-bold text-2xl tracking-wide"><CheckCircle className="w-8 h-8 text-[#00B4D8] opacity-80"/> ITIL</div>
                <div className="flex items-center gap-3 font-bold text-2xl tracking-wide"><Award className="w-8 h-8 text-[#C0DF16] opacity-80"/> Scrum.org</div>
              </div>
          </div>
        </section>

        {/* 6. DIFERENCIADORES & A QUIÉN AYUDO */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Diferenciadores */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-extrabold text-[#003358] mb-8">Por qué trabajar conmigo</h3>
                <div className="space-y-4">
                  {[
                    "Visión negocio + tecnología: Entiendo tu P&L además de la ejecución.",
                    "Experiencia real: He liderado operaciones TI, no solo teoría.",
                    "Capacidad de ejecución: Llevamos las estrategias a la realidad técnica.",
                    "Experiencia sector público: Interoperabilidad y optimización demostrable."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                       <CheckCircle2 className="w-6 h-6 text-[#C0DF16] flex-shrink-0 mt-0.5" />
                       <span className="text-slate-700 font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* A quién ayudo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-extrabold text-[#003358] mb-8">¿A quién ayudo?</h3>
                
                <div className="space-y-6">
                  {/* Card Empresas */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00B4D8]/10 rounded-bl-full"></div>
                     <h4 className="flex items-center gap-3 text-xl font-bold text-[#003358] mb-4 relative z-10">
                       <Building2 className="w-6 h-6 text-[#00B4D8]" /> 
                       Empresas (Pymes y Medianas)
                     </h4>
                     <ul className="space-y-3 relative z-10">
                       <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> Necesitan orden, eficiencia y crecimiento.</li>
                       <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> No pueden costear a las grandes corporaciones de consultoría.</li>
                       <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> Buscan impacto profundo y resultados muy rápidos.</li>
                     </ul>
                  </div>

                  {/* Card Gobierno */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#C0DF16]/20 rounded-bl-full"></div>
                     <h4 className="flex items-center gap-3 text-xl font-bold text-[#003358] mb-4 relative z-10">
                       <Award className="w-6 h-6 text-[#C0DF16]" /> 
                       Gobierno & Sector Público
                     </h4>
                     <ul className="space-y-3 relative z-10">
                       <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> Impulsando reales transformaciones digitales.</li>
                       <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> Optimizando su interoperabilidad y normativas.</li>
                       <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0" /> Simplificando procesos de atención integrados al ciudadano.</li>
                     </ul>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 8. BLOG / CONTENIDO */}
        <section id="blog" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003358] mb-6">BLOG DE PERSPECTIVA EJECUTIVA</h2>
              <div className="w-20 h-1.5 bg-[#C0DF16] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                Análisis y experiencia práctica para tomar mejores decisiones tecnológicas en entornos reales.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Cuándo NO usar IA: decisiones tecnológicas que evitan sobrecostos innecesarios", 
                  desc: "Evita implementar IA donde no aporta valor real y aprende a priorizar soluciones más eficientes.",
                  link: "/blog/cuando-no-usar-ia"
                },
                { 
                  title: "Automatización documental: cuándo usar OCR, IA o soluciones simples",
                  desc: "Reduce costos y riesgos eligiendo la tecnología adecuada para cada tipo de proceso.",
                  link: "/blog/ocr-vs-ia"
                },
                { 
                  title: "IA en desarrollo de software: cómo controlar costos y evitar dependencias",
                  desc: "Aprende a usar IA sin disparar costos ni generar dependencia tecnológica.",
                  link: "/blog/ia-desarrollo-costos"
                }
              ].map((post, i) => (
                <Link
                  href={post.link}
                  key={i}
                  className="group block bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-[#00B4D8] hover:shadow-xl hover:shadow-[#00B4D8]/10 transition-all flex flex-col cursor-pointer"
                >
                  <div className="h-auto min-h-[12rem] bg-slate-50 relative overflow-hidden flex flex-col p-8 items-start justify-center text-left">
                    <div className="absolute inset-0 bg-[#003358]/5 group-hover:bg-[#00B4D8]/5 transition-colors"></div>
                    <h3 className="text-xl font-bold text-[#003358] group-hover:text-[#00B4D8] transition-colors leading-snug relative z-10 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 relative z-10">
                      {post.desc}
                    </p>
                  </div>
                  <div className="p-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-[#00B4D8] font-semibold text-sm">Leer artículo</span>
                    <ArrowRight className="w-5 h-5 text-[#00B4D8] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CONTACTO PARA MANTENER FUNCIONALIDAD */}
        <section id="contacto" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#003358] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-white mb-2">Pasemos a la acción</h3>
                <p className="text-[#E0F7FA] mb-8 font-light">Cuéntame cuál es tu reto principal hoy y diseñemos un roadmap de ejecución.</p>
                
                <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>
                  {validationError && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm mb-4">
                      {validationError}
                    </div>
                  )}
                  {submitSuccess && (
                    <div className="bg-[#C0DF16]/20 border border-[#C0DF16]/50 text-white px-4 py-3 rounded-xl text-sm mb-4">
                      ¡Tu solicitud ha sido enviada con éxito! Me pondré en contacto contigo muy pronto.
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#C0DF16] focus:ring-1 focus:ring-[#C0DF16] transition-all placeholder:text-slate-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#C0DF16] focus:ring-1 focus:ring-[#C0DF16] transition-all placeholder:text-slate-300"
                        placeholder="Correo corporativo"
                      />
                    </div>
                  </div>

                  <div>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#C0DF16] focus:ring-1 focus:ring-[#C0DF16] transition-all placeholder:text-slate-300"
                      placeholder="Teléfono"
                    />
                  </div>
                  
                  <div>
                    <select 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#C0DF16] focus:ring-1 focus:ring-[#C0DF16] transition-all appearance-none cursor-pointer"
                      value={formData.objective}
                      onChange={(e) => setFormData({...formData, objective: e.target.value})}
                    >
                      <option value="" disabled className="text-slate-800">¿Qué objetivo buscas?</option>
                      <option value="Quiero optimizar costos TI" className="text-slate-800">Quiero optimizar costos TI</option>
                      <option value="Quiero implementar IA" className="text-slate-800">Quiero implementar IA</option>
                      <option value="Necesito desarrollar un sistema" className="text-slate-800">Necesito desarrollar un sistema</option>
                      <option value="No tengo claro por dónde empezar" className="text-slate-800">No tengo claro por dónde empezar</option>
                    </select>
                  </div>

                  <div>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#C0DF16] focus:ring-1 focus:ring-[#C0DF16] transition-all resize-none placeholder:text-slate-300"
                      placeholder="Agrega un breve contexto (opcional)..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center gap-2 bg-[#C0DF16] text-[#003358] font-extrabold py-5 rounded-xl transition-all shadow-lg text-lg ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-[#a8c414] shadow-[#C0DF16]/20'}`}
                  >
                    {isSubmitting ? (
                      <>
                        ENVIANDO...
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </>
                    ) : (
                      <>
                        AGENDA UNA CONSULTORÍA
                        <Send className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
