import Image from "next/image";
import { cn } from "@/lib/cn";

interface PageBannerProps {
  src: string;
  alt: string;
  className?: string;
  /** Priorité de chargement (pages d’entrée) */
  priority?: boolean;
}

export function PageBanner({
  src,
  alt,
  className,
  priority = true,
}: PageBannerProps) {
  return (
    <div
      className={cn(
        "relative w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
