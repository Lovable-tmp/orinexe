import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isSecurityCard?: boolean;
  delay?: number;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  isSecurityCard = false,
  delay = 0 
}: ServiceCardProps) => {
  return (
    <article 
      className="card-elevated p-6 md:p-8 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={isSecurityCard ? "icon-box-security" : "icon-box"}>
        <Icon 
          className={`w-7 h-7 ${isSecurityCard ? "text-security" : "text-accent"}`} 
        />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mt-5 mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;
