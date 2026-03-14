import { motion } from "framer-motion";
import biometricIcon from "@/assets/icon-biometric-sync.png";
import logicIcon from "@/assets/icon-logic-engine.png";
import approvalIcon from "@/assets/icon-approval-flow.png";

const cards = [
  {
    title: "Smart Biometric Sync",
    description: "Automated data fetch every 3 hours. No manual uploads. No data gaps.",
    image: biometricIcon,
    alt: "3D biometric fingerprint scanner syncing with cloud database",
    pill: { label: "Auto-Sync", variant: "success" as const },
    colSpan: "lg:col-span-1",
  },
  {
    title: "Session-Based Logic Engine",
    description: "Track First Half (9–12) and Second Half (12–4) sessions. Automated n-minute late rules applied via secure stored procedures.",
    image: logicIcon,
    alt: "3D clock split into two colored segments for session tracking",
    pill: { label: "Stored Procedures", variant: "warning" as const },
    colSpan: "lg:col-span-2",
  },
  {
    title: "Multilevel Approval Flow",
    description: "Digital hierarchy for OD and Late Waivers. Faculty request → HOD review → Principal's final nod.",
    image: approvalIcon,
    alt: "3D organizational chart showing multilevel approval stamps",
    pill: { label: "3-Level Approval", variant: "success" as const },
    colSpan: "lg:col-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const FeatureGrid = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-left max-w-2xl mb-16">
          <span className="mono-label text-primary mb-4 block">The Triple-Sync Engine</span>
          <h2 className="heading-section mb-4">
            Three Pillars of Campus Precision
          </h2>
          <p className="body-large">
            Every process—from biometric punch to final payslip—flows through a single, 
            intelligent pipeline.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`bento-card flex flex-col ${card.colSpan}`}
            >
              <div className="mb-6">
                <span className={card.pill.variant === "success" ? "status-pill-success" : "status-pill-warning"}>
                  {card.pill.label}
                </span>
              </div>

              <div className="flex-1 flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="w-32 h-32 flex-shrink-0 self-center">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;
