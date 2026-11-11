import type { Lang } from "./site";

/**
 * All visible copy, in both languages.
 * French is the source of truth; English is a faithful translation.
 * Every key must exist in both languages (enforced by the Content type and tests).
 *
 * CONFIDENTIALITY: never name the current employer, its clients, colleagues,
 * supervisors, internal tools, clusters, domains or URLs. Never invent metrics,
 * clients, testimonials or certifications.
 */

export type ProjectVisual =
  "ephemeral" | "citybus" | "waterwatch" | "cloudinfragen" | "smart-copro" | "plant-disease";

export interface Project {
  slug: string;
  visual: ProjectVisual;
  image?: string;
  shortTitle: string;
  title: string;
  summary: string;
  context?: string;
  achievements?: string[];
  result?: string;
  stack: string[];
  /** Public repository URL. Empty string = not available yet. */
  repository: string;
  visualAlt: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  dateTime: string;
  points: { text: string; linkToFeatured?: boolean }[];
}

export interface EducationItem {
  title: string;
  place: string;
  period?: string;
  details?: string;
  kind: "degree" | "prep";
}

export interface Content {
  meta: { title: string; description: string };
  a11y: {
    skipToContent: string;
    primaryNav: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    switchLanguageShort: string;
    switchLanguageTargetLang: Lang;
    themeToggle: string;
    newTab: string;
  };
  nav: {
    projects: string;
    experience: string;
    skills: string;
    certifications: string;
    education: string;
    contact: string;
  };
  hero: {
    name: string;
    role: string;
    intro: string;
    photoAlt: string;
    contactCta: string;
    cvCta: string;
  };
  projects: {
    title: string;
    intro: string;
    featuredLabel: string;
    visualComingSoon: string;
    view: string;
    close: string;
    detailLabel: string;
    contextLabel: string;
    achievementsLabel: string;
    resultLabel: string;
    stackLabel: string;
    repositoryLabel: string;
    items: Project[];
  };
  experience: {
    title: string;
    featuredLinkLabel: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    groups: { name: string; items: string[] }[];
  };
  certifications: {
    title: string;
    credential: string;
    issuer: string;
    dateLabel: string;
    date: string;
    verifyLabel: string;
    verificationUrl: string;
    badgeAlt: string;
  };
  education: {
    title: string;
    kinds: Record<EducationItem["kind"], string>;
    items: EducationItem[];
  };
  contact: {
    title: string;
    sentence: string;
    formTitle: string;
    linksTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    requiredHint: string;
    submit: string;
    privacyNote: string;
    opened: string;
    errorSummary: string;
    characters: string;
    errors: {
      nameRequired: string;
      nameTooLong: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageTooLong: string;
    };
    mail: {
      subject: string;
      nameLine: string;
      emailLine: string;
    };
    phoneLabel: string;
    emailLinkLabel: string;
    linkedinLinkLabel: string;
    githubLinkLabel: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
}

const fr: Content = {
  meta: {
    title: "Abdelouahed Akabbab — Ingénieur logiciel Full-Stack & DevOps",
    description:
      "Portfolio d'Abdelouahed Akabbab, ingénieur logiciel Full-Stack & DevOps diplômé de l'ENSIAS : Java/Spring Boot, React, Angular, Kubernetes et CI/CD. Disponible pour des missions freelance.",
  },
  a11y: {
    skipToContent: "Aller au contenu",
    primaryNav: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchLanguage: "Switch to English",
    switchLanguageShort: "EN",
    switchLanguageTargetLang: "en",
    themeToggle: "Thème sombre",
    newTab: "(nouvel onglet)",
  },
  nav: {
    projects: "Projets",
    experience: "Expérience",
    skills: "Compétences",
    certifications: "Certifications",
    education: "Formation",
    contact: "Contact",
  },
  hero: {
    name: "Abdelouahed Akabbab",
    role: "Ingénieur logiciel Full-Stack & DevOps",
    intro:
      "Je conçois des applications web complètes et les pipelines qui les livrent. Diplômé de l'ENSIAS, je travaille avec Java/Spring Boot, React, Angular, Kubernetes et CI/CD. Disponible pour des missions freelance.",
    photoAlt: "Portrait d'Abdelouahed Akabbab",
    contactCta: "Me contacter",
    cvCta: "Télécharger mon CV",
  },
  projects: {
    title: "Projets",
    intro: "Une sélection de projets, de l'application au pipeline qui la déploie.",
    featuredLabel: "Projet phare",
    visualComingSoon: "Visuel à venir",
    view: "Voir le projet",
    close: "Fermer",
    detailLabel: "Détail du projet",
    contextLabel: "Contexte",
    achievementsLabel: "Réalisations",
    resultLabel: "Résultat",
    stackLabel: "Stack",
    repositoryLabel: "Voir le dépôt",
    items: [
      {
        slug: "citybus",
        visual: "citybus",
        image: "/projects/citybus.png",
        shortTitle: "CityBus",
        title: "CityBus, plateforme de transport urbain",
        summary:
          "Plateforme cloud-native à microservices pour la billetterie, les horaires, le suivi GPS en direct et les abonnements.",
        context:
          "Système de transport urbain construit autour de services Spring Boot et d'une interface React. L'architecture combine passerelle API, découverte et configuration centralisées, messagerie événementielle et déploiement Kubernetes sur GCP.",
        achievements: [
          "Services indépendants pour les utilisateurs, les billets, les horaires, la géolocalisation, les abonnements et les notifications.",
          "Authentification JWT, API Gateway Spring Cloud, découverte Eureka et configuration Spring Cloud Config.",
          "Suivi des véhicules et mises à jour temps réel via STOMP sur WebSocket et événements Kafka.",
          "Infrastructure Terraform sur GKE, conteneurs Docker et CI/CD GitHub Actions avec tests et déploiement.",
        ],
        stack: [
          "Java 17",
          "Spring Boot 3",
          "Spring Cloud",
          "Spring Security / JWT",
          "Kafka",
          "React 18",
          "TypeScript",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Docker",
          "Kubernetes (GKE)",
          "Terraform",
          "GitHub Actions",
          "Zipkin",
        ],
        repository: "https://github.com/yousfiwiame/Urban-Transport-System",
        visualAlt: "Logo CityBus, projet de transport urbain.",
      },
      {
        slug: "environnements-ephemeres",
        visual: "ephemeral",
        image: "/projects/environnements-kubernetes-ephemeres.png",
        shortTitle: "Environnements Kubernetes éphémères",
        title: "Environnements Kubernetes éphémères et modernisation de la chaîne CI/CD",
        summary:
          "Des environnements de test isolés, créés à la demande et détruits automatiquement, après un audit de la chaîne CI/CD existante.",
        context:
          "Projet de fin d'études et stage, 2026. Une équipe produit avait besoin d'environnements de test isolés, créés à la demande et détruits automatiquement. J'ai audité la chaîne CI/CD existante, puis automatisé le cycle de vie complet d'un environnement.",
        achievements: [
          "Trois pipelines (création, prolongation de la durée de vie, nettoyage) orchestrés avec Jenkins.",
          "Manifestes Kubernetes générés à partir de modèles et déployés automatiquement.",
          "DNS, stockage objet et namespaces gérés et nettoyés automatiquement.",
          "Agent de build conteneurisé sur mesure, avec les identifiants stockés dans le coffre-fort Jenkins.",
        ],
        stack: ["Jenkins", "Kubernetes", "Helm", "Docker", "Python", "Jinja2"],
        repository: "",
        visualAlt:
          "Schéma : trois pipelines Jenkins (créer, prolonger, nettoyer) pilotent un namespace Kubernetes éphémère avec ses manifestes, son DNS et son stockage objet.",
      },
      {
        slug: "waterwatch",
        visual: "waterwatch",
        image: "/projects/waterwatch.png",
        shortTitle: "WaterWatch",
        title: "WaterWatch, suivi de la qualité de l'eau par satellite",
        summary:
          "Plateforme Jakarta EE et Next.js pour analyser la qualité de l'eau et détecter les proliférations d'algues à partir d'images Sentinel Hub.",
        context:
          "L'utilisateur sélectionne une zone d'intérêt sur une carte interactive. La plateforme récupère les images satellite puis présente les résultats de plusieurs analyses environnementales dans un tableau de bord sécurisé.",
        achievements: [
          "Sélection cartographique de zones d'intérêt et récupération d'images via l'API Sentinel Hub.",
          "Analyse des indices NDWI, Sen2Coral et du modèle d'apprentissage automatique Cyanonet.",
          "API REST Jakarta EE avec authentification JWT et données utilisateur dans PostgreSQL.",
          "Interface Next.js/TypeScript avec tableau de bord multi-onglets.",
        ],
        stack: [
          "Jakarta EE",
          "Java 17",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "JWT",
          "Sentinel Hub",
          "NDWI",
          "Sen2Coral",
          "Cyanonet",
        ],
        repository: "https://github.com/ABDELOUAHEDTEX/development-platform-lfella7a",
        visualAlt: "Logo WaterWatch, plateforme de suivi environnemental par satellite.",
      },
      {
        slug: "cloudinfragen",
        visual: "cloudinfragen",
        image: "/projects/cloudinfragen.png",
        shortTitle: "CloudInfraGen",
        title: "CloudInfraGen, génération de code d'infrastructure cloud",
        summary:
          "Plateforme MDE qui transforme une description en langage naturel ou JSON en code Terraform, après génération et validation d'un modèle EMF.",
        context:
          "Le projet réunit un moteur Java/Eclipse EMF, une extension VS Code et un serveur Python/FastAPI optionnel utilisant Ollama pour convertir le langage naturel en JSON.",
        achievements: [
          "Conversion de descriptions en français ou en anglais, ou de fichiers JSON, en modèles d'infrastructure structurés.",
          "Validation des contraintes du méta-modèle EMF avant la génération de fichiers Terraform.",
          "Extension VS Code avec coloration des fichiers .nlp, autocomplétion, CodeLens et diagnostics en temps réel.",
          "Prise en charge de plus de 12 types de ressources cloud et suite de 16 tests automatisés selon le README.",
        ],
        stack: [
          "Java 17",
          "Maven",
          "Eclipse EMF 2.25",
          "Jackson 2.15",
          "JUnit 5",
          "TypeScript",
          "Python 3.11",
          "FastAPI",
          "Ollama",
          "Terraform",
        ],
        repository: "https://github.com/ABDELOUAHEDTEX/mde-project-cloudte",
        visualAlt: "Logo CloudInfraGen, plateforme de génération de code Terraform.",
      },
      {
        slug: "smart-copro",
        visual: "smart-copro",
        image: "/projects/smart-copro.png",
        shortTitle: "Smart Copro",
        title: "Smart Copro, gestion intelligente de l'énergie en copropriété",
        summary:
          "Application web de suivi des consommations électriques des parties communes, avec alertes, réclamations et rapports.",
        context:
          "Le projet propose une plateforme multi-rôles pour les syndics, résidents, conseils syndicaux et techniciens de maintenance, avec un backend Django REST et un frontend React.",
        achievements: [
          "Saisie et import CSV/Excel de relevés, historique et visualisation des consommations.",
          "Détection des dépassements de seuils et gestion des alertes.",
          "Soumission et suivi des réclamations, ainsi que gestion des interventions.",
          "Tableaux de bord et génération de rapports PDF/Excel.",
        ],
        stack: [
          "Python 3.10+",
          "Django 5",
          "Django REST Framework",
          "React 18",
          "TypeScript 5",
          "Vite",
          "Tailwind CSS",
          "Pandas",
          "ReportLab",
          "SQLite",
          "PostgreSQL",
        ],
        repository: "https://github.com/RidaELHAIBA/PFA-PROJECT",
        visualAlt: "Logo Smart Copro, application de gestion de l'énergie en copropriété.",
      },
      {
        slug: "plant-disease-detection",
        visual: "plant-disease",
        image: "/projects/plant-disease-detection.png",
        shortTitle: "Plant Disease Detection",
        title: "Détection des maladies des plantes par image",
        summary:
          "Application web qui prédit les maladies d'une plante à partir d'une photo de feuille grâce à un modèle de deep learning.",
        context:
          "Le projet associe une interface React à une API Flask pour l'inférence d'un modèle entraîné avec TensorFlow/Keras.",
        achievements: [
          "Téléversement d'une image de feuille depuis l'interface web pour obtenir une prédiction.",
          "API backend Flask dédiée à l'inférence du modèle.",
          "Modèle TensorFlow/Keras et scripts ou notebooks d'entraînement dans le dépôt.",
        ],
        stack: [
          "Python",
          "Flask",
          "TensorFlow",
          "Keras",
          "Pillow",
          "React",
          "Vite",
          "TypeScript",
          "Tailwind CSS",
        ],
        repository: "https://github.com/hibaalaoui/pfa-plant-disease-detection",
        visualAlt: "Icône de feuille pour le projet de détection des maladies des plantes.",
      },
    ],
  },
  experience: {
    title: "Expérience",
    featuredLinkLabel: "voir le projet",
    items: [
      {
        role: "Stagiaire DevOps & Full-Stack",
        organization: "Entreprise de plateforme DevOps, Casablanca",
        period: "Févr. – août 2026",
        dateTime: "2026-02/2026-08",
        points: [
          {
            text: "Audit de la chaîne DevOps (Kubernetes, CI/CD), avec des pistes d'optimisation des coûts et du délai de mise en production.",
          },
          { text: "Pipelines d'environnements éphémères", linkToFeatured: true },
          {
            text: "Plateforme web de supervision des clusters : front-end Angular, back-end Spring Boot.",
          },
        ],
      },
      {
        role: "Stagiaire Full-Stack & DevOps",
        organization: "SmartFactory, Mohammedia",
        period: "Juin – sept. 2025",
        dateTime: "2025-06/2025-09",
        points: [
          {
            text: "Application web complète : Angular, API REST Spring Boot, authentification JWT, tableaux de bord.",
          },
          {
            text: "Conteneurisation Docker, orchestration Kubernetes, pipeline CI/CD GitHub Actions.",
          },
        ],
      },
      {
        role: "Stage d'initiation : architecture data",
        organization: "Direction régionale de la transition énergétique, Agadir",
        period: "Juin – juil. 2024",
        dateTime: "2024-06/2024-07",
        points: [
          { text: "Modélisation relationnelle et mise en place d'un Data Warehouse." },
          {
            text: "Tableaux de bord géospatiaux interactifs et automatisation des traitements ETL en Python.",
          },
        ],
      },
    ],
  },
  skills: {
    title: "Compétences",
    groups: [
      {
        name: "Back-end",
        items: ["Java", "Spring Boot", "Spring Security", "API REST", "JPA/Hibernate", "Node.js"],
      },
      {
        name: "Front-end",
        items: ["Angular", "React", "TypeScript", "HTML5", "CSS3", "Tailwind"],
      },
      {
        name: "DevOps & Cloud",
        items: [
          "Kubernetes",
          "Docker",
          "Helm",
          "Jenkins",
          "GitHub Actions",
          "Terraform",
          "Ansible",
          "ArgoCD",
        ],
      },
      {
        name: "Données",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Apache Kafka"],
      },
      {
        name: "Supervision, langages & outils",
        items: ["Prometheus", "Grafana", "AWS", "Scaleway", "Python", "Git"],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    credential: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    dateLabel: "Date d'obtention",
    date: "Date non communiquée",
    verifyLabel: "Vérifier la certification",
    verificationUrl:
      "https://www.credly.com/badges/03756d20-4ef8-4c16-981a-c463b24c9076/public_url",
    badgeAlt: "Badge AWS Certified Cloud Practitioner délivré par Amazon Web Services.",
  },
  education: {
    title: "Formation",
    kinds: {
      degree: "Diplôme",
      prep: "Classes préparatoires",
    },
    items: [
      {
        kind: "degree",
        title: "Diplôme d'ingénieur d'État, Génie logiciel",
        place: "ENSIAS, Rabat",
        period: "2026",
        details: "Mention Assez Bien. Option : Ingénierie logicielle et systèmes d'information.",
      },
      {
        kind: "prep",
        title: "Classes préparatoires MP (Mathématiques & Physique)",
        place: "Lycée Reda Slaoui, Agadir",
        period: "2021 – 2023",
      },
    ],
  },
  contact: {
    title: "Contact",
    sentence: "Une mission, un projet ou une question ? Écrivez-moi, je réponds sous 24 heures.",
    formTitle: "Écrire un message",
    linksTitle: "Liens",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    messageLabel: "Message",
    requiredHint: "Tous les champs sont obligatoires.",
    submit: "Ouvrir ma messagerie",
    privacyNote:
      "Le formulaire ouvre votre logiciel de messagerie avec le message pré-rempli. Rien n'est envoyé à un serveur.",
    opened:
      "Votre messagerie devrait s'ouvrir avec le message pré-rempli. Si rien ne se passe, écrivez directement à",
    errorSummary: "Merci de corriger les champs signalés.",
    characters: "caractères",
    errors: {
      nameRequired: "Indiquez votre nom.",
      nameTooLong: "Votre nom ne doit pas dépasser 100 caractères.",
      emailRequired: "Indiquez votre adresse e-mail.",
      emailInvalid: "Cette adresse e-mail ne semble pas valide.",
      messageRequired: "Écrivez votre message.",
      messageTooLong: "Votre message ne doit pas dépasser 1 500 caractères.",
    },
    mail: {
      subject: "Contact depuis le portfolio",
      nameLine: "Nom :",
      emailLine: "E-mail :",
    },
    phoneLabel: "Téléphone",
    emailLinkLabel: "E-mail",
    linkedinLinkLabel: "LinkedIn",
    githubLinkLabel: "GitHub",
  },
  footer: {
    rights: "Tous droits réservés.",
    backToTop: "Retour en haut",
  },
};

const en: Content = {
  meta: {
    title: "Abdelouahed Akabbab — Full-Stack & DevOps Software Engineer",
    description:
      "Portfolio of Abdelouahed Akabbab, Full-Stack & DevOps software engineer and ENSIAS graduate: Java/Spring Boot, React, Angular, Kubernetes and CI/CD. Available for freelance missions.",
  },
  a11y: {
    skipToContent: "Skip to content",
    primaryNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Passer en français",
    switchLanguageShort: "FR",
    switchLanguageTargetLang: "fr",
    themeToggle: "Dark theme",
    newTab: "(new tab)",
  },
  nav: {
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    certifications: "Certifications",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    name: "Abdelouahed Akabbab",
    role: "Full-Stack & DevOps Software Engineer",
    intro:
      "I build complete web applications and the pipelines that ship them. ENSIAS engineering graduate, working with Java/Spring Boot, React, Angular, Kubernetes and CI/CD. Available for freelance missions.",
    photoAlt: "Portrait of Abdelouahed Akabbab",
    contactCta: "Get in touch",
    cvCta: "Download my CV",
  },
  projects: {
    title: "Projects",
    intro: "A selection of projects, from the application to the pipeline that deploys it.",
    featuredLabel: "Featured project",
    visualComingSoon: "Visual coming soon",
    view: "View project",
    close: "Close",
    detailLabel: "Project details",
    contextLabel: "Context",
    achievementsLabel: "Achievements",
    resultLabel: "Result",
    stackLabel: "Stack",
    repositoryLabel: "View repository",
    items: [
      {
        slug: "citybus",
        visual: "citybus",
        image: "/projects/citybus.png",
        shortTitle: "CityBus",
        title: "CityBus, urban transport platform",
        summary:
          "A cloud-native microservices platform for ticketing, schedules, live GPS tracking and commuter subscriptions.",
        context:
          "An urban transport system built with Spring Boot services and a React interface. Its architecture combines an API gateway, centralized service discovery and configuration, event messaging, and Kubernetes deployment on GCP.",
        achievements: [
          "Independent services for users, tickets, schedules, geolocation, subscriptions and notifications.",
          "JWT authentication, Spring Cloud API Gateway, Eureka discovery and Spring Cloud Config.",
          "Vehicle tracking and live updates through STOMP over WebSocket and Kafka events.",
          "Terraform infrastructure on GKE, Docker containers and GitHub Actions CI/CD with tests and deployment.",
        ],
        stack: [
          "Java 17",
          "Spring Boot 3",
          "Spring Cloud",
          "Spring Security / JWT",
          "Kafka",
          "React 18",
          "TypeScript",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Docker",
          "Kubernetes (GKE)",
          "Terraform",
          "GitHub Actions",
          "Zipkin",
        ],
        repository: "https://github.com/yousfiwiame/Urban-Transport-System",
        visualAlt: "CityBus logo for the urban transport project.",
      },
      {
        slug: "environnements-ephemeres",
        visual: "ephemeral",
        image: "/projects/environnements-kubernetes-ephemeres.png",
        shortTitle: "Ephemeral Kubernetes environments",
        title: "Ephemeral Kubernetes environments and CI/CD modernization",
        summary:
          "Isolated test environments, created on demand and destroyed automatically, following an audit of the existing CI/CD chain.",
        context:
          "Final-year project and internship, 2026. A product team needed isolated test environments, created on demand and destroyed automatically. I audited the existing CI/CD chain, then automated the full lifecycle of an environment.",
        achievements: [
          "Three pipelines (create, extend lifetime, clean up) orchestrated with Jenkins.",
          "Kubernetes manifests generated from templates and deployed automatically.",
          "DNS, object storage and namespaces managed and cleaned up automatically.",
          "Custom containerized build agent, with credentials stored in the Jenkins vault.",
        ],
        stack: ["Jenkins", "Kubernetes", "Helm", "Docker", "Python", "Jinja2"],
        repository: "",
        visualAlt:
          "Diagram: three Jenkins pipelines (create, extend, clean up) drive an ephemeral Kubernetes namespace with its manifests, DNS and object storage.",
      },
      {
        slug: "waterwatch",
        visual: "waterwatch",
        image: "/projects/waterwatch.png",
        shortTitle: "WaterWatch",
        title: "WaterWatch, satellite water-quality monitoring",
        summary:
          "Jakarta EE and Next.js platform for assessing water quality and detecting algal blooms from Sentinel Hub imagery.",
        context:
          "Users select an area of interest on an interactive map. The platform retrieves satellite imagery and presents several environmental analyses in a secure dashboard.",
        achievements: [
          "Map-based area selection and satellite imagery retrieval through the Sentinel Hub API.",
          "Analysis with NDWI, Sen2Coral and the Cyanonet machine-learning model.",
          "Jakarta EE REST API with JWT authentication and PostgreSQL user data.",
          "Next.js/TypeScript interface with a multi-tab results dashboard.",
        ],
        stack: [
          "Jakarta EE",
          "Java 17",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "JWT",
          "Sentinel Hub",
          "NDWI",
          "Sen2Coral",
          "Cyanonet",
        ],
        repository: "https://github.com/ABDELOUAHEDTEX/development-platform-lfella7a",
        visualAlt: "WaterWatch logo for the satellite environmental monitoring platform.",
      },
      {
        slug: "cloudinfragen",
        visual: "cloudinfragen",
        image: "/projects/cloudinfragen.png",
        shortTitle: "CloudInfraGen",
        title: "CloudInfraGen, cloud infrastructure code generation",
        summary:
          "An MDE platform that turns natural-language or JSON descriptions into Terraform code after generating and validating an EMF model.",
        context:
          "The project combines a Java/Eclipse EMF engine, a VS Code extension, and an optional Python/FastAPI server using Ollama to convert natural language into JSON.",
        achievements: [
          "Converts French or English descriptions, or JSON files, into structured infrastructure models.",
          "Validates metamodel constraints before generating Terraform files.",
          "VS Code extension with .nlp syntax highlighting, autocomplete, CodeLens and real-time diagnostics.",
          "Supports more than 12 cloud resource types and includes 16 automated tests, according to the README.",
        ],
        stack: [
          "Java 17",
          "Maven",
          "Eclipse EMF 2.25",
          "Jackson 2.15",
          "JUnit 5",
          "TypeScript",
          "Python 3.11",
          "FastAPI",
          "Ollama",
          "Terraform",
        ],
        repository: "https://github.com/ABDELOUAHEDTEX/mde-project-cloudte",
        visualAlt: "CloudInfraGen logo for the Terraform code generation platform.",
      },
      {
        slug: "smart-copro",
        visual: "smart-copro",
        image: "/projects/smart-copro.png",
        shortTitle: "Smart Copro",
        title: "Smart Copro, intelligent energy management for condominiums",
        summary:
          "A web application for tracking common-area electricity consumption, with alerts, claims and reports.",
        context:
          "The project provides a multi-role platform for property managers, residents, council members and maintenance technicians, with a Django REST backend and React frontend.",
        achievements: [
          "Manual entry and CSV/Excel import of readings, consumption history and visualizations.",
          "Threshold-exceedance detection and alert management.",
          "Claim submission and tracking, plus maintenance intervention management.",
          "Dashboards and PDF/Excel report generation.",
        ],
        stack: [
          "Python 3.10+",
          "Django 5",
          "Django REST Framework",
          "React 18",
          "TypeScript 5",
          "Vite",
          "Tailwind CSS",
          "Pandas",
          "ReportLab",
          "SQLite",
          "PostgreSQL",
        ],
        repository: "https://github.com/RidaELHAIBA/PFA-PROJECT",
        visualAlt: "Smart Copro logo for condominium energy management.",
      },
      {
        slug: "plant-disease-detection",
        visual: "plant-disease",
        image: "/projects/plant-disease-detection.png",
        shortTitle: "Plant Disease Detection",
        title: "Image-based plant disease detection",
        summary:
          "A web application that predicts plant diseases from a leaf photo using a deep-learning model.",
        context:
          "The project pairs a React interface with a Flask API for inference using a model trained with TensorFlow/Keras.",
        achievements: [
          "Upload a leaf image through the web interface to get a prediction.",
          "Flask backend API dedicated to model inference.",
          "TensorFlow/Keras model and training scripts or notebooks included in the repository.",
        ],
        stack: [
          "Python",
          "Flask",
          "TensorFlow",
          "Keras",
          "Pillow",
          "React",
          "Vite",
          "TypeScript",
          "Tailwind CSS",
        ],
        repository: "https://github.com/hibaalaoui/pfa-plant-disease-detection",
        visualAlt: "Leaf icon for the plant disease detection project.",
      },
    ],
  },
  experience: {
    title: "Experience",
    featuredLinkLabel: "see the project",
    items: [
      {
        role: "DevOps & Full-Stack Intern",
        organization: "DevOps platform company, Casablanca",
        period: "Feb. – Aug. 2026",
        dateTime: "2026-02/2026-08",
        points: [
          {
            text: "DevOps chain audit (Kubernetes, CI/CD) with optimization paths for cost and time-to-production.",
          },
          { text: "Ephemeral environment pipelines", linkToFeatured: true },
          {
            text: "Web monitoring platform for clusters: Angular front-end, Spring Boot back-end.",
          },
        ],
      },
      {
        role: "Full-Stack & DevOps Intern",
        organization: "SmartFactory, Mohammedia",
        period: "June – Sept. 2025",
        dateTime: "2025-06/2025-09",
        points: [
          {
            text: "Complete web application: Angular, Spring Boot REST API, JWT authentication, dashboards.",
          },
          {
            text: "Docker containerization, Kubernetes orchestration, GitHub Actions CI/CD pipeline.",
          },
        ],
      },
      {
        role: "Initiation internship: data architecture",
        organization: "Regional Energy Transition Directorate, Agadir",
        period: "June – July 2024",
        dateTime: "2024-06/2024-07",
        points: [
          { text: "Relational modelling and Data Warehouse implementation." },
          { text: "Interactive geospatial dashboards and Python ETL automation." },
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        name: "Back-end",
        items: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JPA/Hibernate", "Node.js"],
      },
      {
        name: "Front-end",
        items: ["Angular", "React", "TypeScript", "HTML5", "CSS3", "Tailwind"],
      },
      {
        name: "DevOps & Cloud",
        items: [
          "Kubernetes",
          "Docker",
          "Helm",
          "Jenkins",
          "GitHub Actions",
          "Terraform",
          "Ansible",
          "ArgoCD",
        ],
      },
      {
        name: "Data",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Apache Kafka"],
      },
      {
        name: "Monitoring, languages & tools",
        items: ["Prometheus", "Grafana", "AWS", "Scaleway", "Python", "Git"],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    credential: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    dateLabel: "Date obtained",
    date: "Date not provided",
    verifyLabel: "Verify certification",
    verificationUrl:
      "https://www.credly.com/badges/03756d20-4ef8-4c16-981a-c463b24c9076/public_url",
    badgeAlt: "AWS Certified Cloud Practitioner badge issued by Amazon Web Services.",
  },
  education: {
    title: "Education",
    kinds: {
      degree: "Degree",
      prep: "Preparatory classes",
    },
    items: [
      {
        kind: "degree",
        title: "State Engineering Diploma, Software Engineering",
        place: "ENSIAS, Rabat",
        period: "2026",
        details: "Grade: Assez Bien (Good). Option: Software Engineering and Information Systems.",
      },
      {
        kind: "prep",
        title: "Preparatory classes MP (Maths & Physics)",
        place: "Lycée Reda Slaoui, Agadir",
        period: "2021 – 2023",
      },
    ],
  },
  contact: {
    title: "Contact",
    sentence: "A mission, a project or a question? Write to me, I reply within 24 hours.",
    formTitle: "Write a message",
    linksTitle: "Links",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    requiredHint: "All fields are required.",
    submit: "Open my email app",
    privacyNote:
      "This form opens your email app with the message pre-filled. Nothing is sent to a server.",
    opened:
      "Your email app should open with the message pre-filled. If nothing happens, write directly to",
    errorSummary: "Please fix the highlighted fields.",
    characters: "characters",
    errors: {
      nameRequired: "Please enter your name.",
      nameTooLong: "Your name must not exceed 100 characters.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "This email address doesn't look valid.",
      messageRequired: "Please write your message.",
      messageTooLong: "Your message must not exceed 1,500 characters.",
    },
    mail: {
      subject: "Contact from the portfolio",
      nameLine: "Name:",
      emailLine: "Email:",
    },
    phoneLabel: "Phone",
    emailLinkLabel: "Email",
    linkedinLinkLabel: "LinkedIn",
    githubLinkLabel: "GitHub",
  },
  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export const content: Record<Lang, Content> = { fr, en };
