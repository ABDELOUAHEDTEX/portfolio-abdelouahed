import type { ProjectVisual as VisualKind } from "@/content/content";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  visual: VisualKind;
  image?: string;
  alt: string;
  title: string;
  placeholder: string;
  className?: string;
}

const placeholderTones: Record<VisualKind, string> = {
  ephemeral:
    "from-slate-100 via-slate-50 to-blue-100 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950",
  citybus: "from-blue-100 via-white to-sky-100",
  waterwatch: "from-cyan-100 via-white to-blue-100",
  cloudinfragen: "from-indigo-100 via-white to-sky-100",
  "smart-copro": "from-sky-100 via-white to-blue-100",
  "plant-disease": "from-emerald-100 via-white to-lime-100",
};

export function ProjectVisual({
  visual,
  image,
  alt,
  title,
  placeholder,
  className,
}: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-white",
        className,
      )}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          className="block h-full w-full object-contain p-8 sm:p-12"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          role="img"
          aria-label={`${placeholder}: ${title}`}
          className={cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br p-8 text-center",
            placeholderTones[visual],
          )}
        >
          <div
            aria-hidden="true"
            className="absolute size-56 rounded-full border border-current/10"
          />
          <div
            aria-hidden="true"
            className="absolute size-40 rounded-full border border-current/10"
          />
          <div className="relative max-w-sm">
            <p className="eyebrow text-primary">{placeholder}</p>
            <p className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
