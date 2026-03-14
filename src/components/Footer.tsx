const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">SD</span>
            </div>
            <span className="text-base font-bold text-foreground tracking-tight">Staff Desk</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#payroll" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Payroll</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Staff Desk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
