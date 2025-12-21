import SectionBadge from "./SectionBadge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleId?: string;
  subtitle?: string;
  centered?: boolean;
  badgeVariant?: "default" | "light";
}

const SectionHeader = ({
  badge,
  title,
  titleId,
  subtitle,
  centered = true,
  badgeVariant = "default",
}: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {badge && (
        <div className="mb-4">
          <SectionBadge variant={badgeVariant}>{badge}</SectionBadge>
        </div>
      )}
      <h2
        id={titleId}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
