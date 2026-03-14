import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="bento-card !rounded-[32px] !p-12 md:!p-20 text-left max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Ambient background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-success/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <span className="mono-label text-primary mb-6 block">Get Started</span>
            <h2 className="heading-section mb-6 max-w-xl">
              Ready to Upgrade Your Administration?
            </h2>
            <p className="body-large max-w-lg mb-10">
              Join 150+ colleges running on precision logic. See how Staff Desk 
              transforms your campus operations in a personalized walkthrough.
            </p>
            <a
              href="#"
              className="btn-primary inline-flex items-center gap-2 text-base"
            >
              Schedule a Personalized Demo
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
