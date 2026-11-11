/** User-approved public contact details and other language-neutral site facts. */
export const site = {
  name: "Abdelouahed Akabbab",
  email: "akabbababdelouahed@gmail.com",
  secondaryEmail: "akabbababdelouahed2@gmail.com",
  phone: "+212 7 77 92 87 18",
  whatsapp: "https://wa.me/212777928718",
  linkedin: "https://www.linkedin.com/in/abdelouahed-akabbab/",
  linkedinLabel: "linkedin.com/in/abdelouahed-akabbab",
  github: "https://github.com/ABDELOUAHEDTEX",
  githubLabel: "github.com/ABDELOUAHEDTEX",
  facebookName: "Abdelouahed Wahidon",
  instagram: "https://www.instagram.com/a9baab/",
  photo: "/photo.jpg",
  cv: "/cv.pdf",
  cvDownloadName: "CV_Abdelouahed_Akabbab.pdf",
} as const;

export type Lang = "fr" | "en";

export const LANGS: readonly Lang[] = ["fr", "en"] as const;

export const SECTION_IDS = {
  experience: "experience",
  projects: "projets",
  skills: "competences",
  certifications: "certifications",
  education: "formation",
  contact: "contact",
} as const;

export type SectionKey = keyof typeof SECTION_IDS;

export const PROJECT_HASH_PREFIX = "projet-";
