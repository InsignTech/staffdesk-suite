import { motion } from "framer-motion";
import payrollChart from "@/assets/payroll-chart-3d.png";

const payrollItems = [
  { label: "Basic Pay", color: "bg-primary", percent: "40%" },
  { label: "HRA", color: "bg-success", percent: "20%" },
  { label: "DA", color: "bg-warning", percent: "15%" },
  { label: "TA", color: "bg-[hsl(180_50%_45%)]", percent: "10%" },
  { label: "Allowances", color: "bg-muted-foreground", percent: "15%" },
];

const PayrollSection = () => {
  return (
    <section id="payroll" className="section-padding bg-primary/[0.03]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-left"
          >
            <span className="mono-label text-primary mb-4 block">Payroll Engine</span>
            <h2 className="heading-section mb-6">
              Precision Payroll, Personalized Splits.
            </h2>
            <p className="body-large mb-8 max-w-lg">
              Custom salary structures (HRA, DA, TA, Allowances) per employee. 
              Automated LOP (Loss of Pay) calculations for unapproved absences.
            </p>

            {/* Salary breakdown */}
            <div className="bento-card !p-6 max-w-md">
              <span className="mono-label text-muted-foreground mb-4 block">Salary Breakdown</span>
              <div className="space-y-3">
                {payrollItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                    <span className="text-sm font-medium text-foreground flex-1">{item.label}</span>
                    <span className="text-sm font-mono text-muted-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>
                      {item.percent}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">LOP Deduction</span>
                <span className="status-pill-warning">Auto-Calculated</span>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex justify-center"
          >
            <img
              src={payrollChart}
              alt="3D pie chart showing salary component breakdown floating above a payslip"
              className="w-full max-w-md animate-float"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PayrollSection;
