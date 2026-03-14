import { motion } from "framer-motion";
import heroDesk from "@/assets/hero-desk-3d.png";

const HeroSection = () => {
  return (
    <section className="hero-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-left"
          >
            <div className="mono-label text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-sync" />
              Campus Admin Intelligence
            </div>

            <h1 className="heading-display mb-6">
              Intelligence at the Heart of Campus Admin.
            </h1>

            <p className="body-large max-w-lg mb-10">
              Welcome to Staff Desk—the automated engine for biometric attendance, 
              multi-level approvals, and precision payroll.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="btn-success text-center text-base">
                Streamline Your College
              </a>
              <a href="#features" className="btn-outline-nav text-center text-base py-4">
                Explore Features
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>150+</span>
                <span className="text-sm text-muted-foreground">Colleges Managed</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>50K+</span>
                <span className="text-sm text-muted-foreground">Faculty Tracked</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>99.9%</span>
                <span className="text-sm text-muted-foreground">Uptime</span>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={heroDesk}
                alt="Staff Desk 3D isometric illustration showing biometric scanner, attendance dashboard, and payslip"
                className="w-full max-w-xl animate-float"
                loading="eager"
              />
              {/* Ambient glow */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-primary rounded-full scale-75" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
