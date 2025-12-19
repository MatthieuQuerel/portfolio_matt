"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-turquoise mb-5">Bonjour, je m'appelle</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-light mb-4 tracking-tight">
          Matthieu.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-8">
          Je construis des architectures web robustes.
        </h2>
        <p className="max-w-xl text-slate text-lg mb-12 leading-relaxed">
          Développeur Fullstack Senior avec <span className="text-turquoise">12 ans d'expérience</span> en freelance.
          J'aide les entreprises à concevoir des solutions scalables, performantes et maintenables en appliquant les principes du Clean Code.
        </p>
        
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 border border-turquoise text-turquoise px-8 py-4 rounded font-mono hover:bg-turquoise/10 transition-colors"
        >
          Démarrer un projet <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}
