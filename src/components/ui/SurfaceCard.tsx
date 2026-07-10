import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function SurfaceCard({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-white/5 rounded-lg p-6 md:p-8",
        hover && "transition-all duration-300 hover:border-brand-red/30 hover:bg-surface-light",
        className
      )}
    >
      {children}
    </div>
  );
}
