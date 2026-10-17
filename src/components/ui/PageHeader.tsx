interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}

export default function PageHeader({
  title,
  description,
  className = "",
  descriptionClassName = "mb-12",
}: PageHeaderProps) {
  return (
    <header className={className}>
      <h1 className={`text-2xl font-semibold text-foreground ${description ? "mb-6" : "mb-8"}`}>
        {title}
      </h1>
      {description && (
        <p className={`text-secondary ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </header>
  );
}
