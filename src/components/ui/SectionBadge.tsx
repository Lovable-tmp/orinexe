interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "light";
}

const SectionBadge = ({ children, variant = "default" }: SectionBadgeProps) => {
  const baseClasses = "inline-block px-4 py-1.5 rounded-full text-sm font-medium";
  
  const variantClasses = {
    default: "bg-accent/10 text-accent",
    light: "bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};

export default SectionBadge;
