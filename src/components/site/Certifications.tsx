import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SECTION_IDS } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Certifications() {
  const { t } = useLanguage();
  const certification = t.certifications;

  return (
    <section
      id={SECTION_IDS.certifications}
      aria-labelledby="certifications-title"
      className="section-space border-t"
    >
      <div className="container-page">
        <SectionHeading id="certifications-title" index="05" title={certification.title} />
        <article className="grid gap-8 rounded-md border p-6 sm:grid-cols-[12rem_1fr] sm:items-center sm:p-8">
          <div className="flex aspect-square items-center justify-center rounded-md bg-white p-3">
            <img
              src="/projects/aws-cloud-practitioner-badge.png"
              alt={certification.badgeAlt}
              className="size-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="eyebrow text-primary">{certification.issuer}</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              {certification.credential}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {certification.dateLabel}: {certification.date}
            </p>
            <Button asChild className="mt-6">
              <a href={certification.verificationUrl} target="_blank" rel="noopener noreferrer">
                {certification.verifyLabel}
                <ArrowUpRight aria-hidden="true" />
                <span className="sr-only">{t.a11y.newTab}</span>
              </a>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
