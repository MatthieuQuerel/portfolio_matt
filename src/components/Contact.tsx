"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 max-w-4xl mx-auto text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }} 
      >
        <p className="font-mono text-turquoise mb-4">04. Et maintenant ?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-light mb-6">Me Contacter</h2>
        <p className="text-slate text-lg mb-12 leading-relaxed">
          Je suis actuellement ouvert aux nouvelles opportunités de mission. Que vous ayez une question ou un projet ambitieux en tête, ma boîte de réception est toujours ouverte.
        </p>
        
        <a
          href="mailto:marius@example.com"
          className="inline-block border border-turquoise text-turquoise px-8 py-4 rounded font-mono hover:bg-turquoise/10 transition-colors"
        >
          Dire Bonjour
        </a>
      </motion.div>
    </section>
  );
}
