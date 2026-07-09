// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  category: "association" | "ecommerce" | "blog" | "hng" | "portfolio" | "saas";
  image: string;
  link: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Eventvivo",
    description: "Invitations numériques, RSVP, QR Codes et suivi des invités en temps réel. Créez votre événement gratuitement (mariage, anniversaire, baptême, dot, etc.).",
    category: "saas",
    image: "/images/eventvivo.webp",
    link: "#",
    featured: true,
  },
  {
    id: 1,
    title: "AgriLink",
    description: "Plateforme de mise en relation géolocalisée entre producteurs et consommateurs. Publiez vos produits, trouvez des circuits courts et contactez directement via WhatsApp.",
    category: "saas",
    image: "/images/agrilink-placeholder.webp",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Communauté ProLife",
    description: "Plateforme de gestion centralisée des membres, adhésions, archives et événements.",
    category: "association",
    image: "/images/prolife.webp",
    link: "https://communaute-prolife.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Marathon Commercial de Cotonou 2026",
    description: "Landing page officielle pour l'événement business organisé par l'Association Élite de Akossiwa (AEA).",
    category: "association",
    image: "/images/marathon.webp",
    link: "https://marathon-commercial-de-cotonou.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Association Ya Tchegbo",
    description: "Site associatif mettant en valeur les actions solidaires et facilitant l'engagement.",
    category: "association",
    image: "/images/yatchegbo.webp",
    link: "https://yatchegbo.vercel.app/",
  },
  {
    id: 5,
    title: "Burkina Humanitaire",
    description: "Site web moderne pour une association engagée dans l'aide aux enfants et personnes démunies.",
    category: "association",
    image: "/images/burkina.webp",
    link: "https://burkinahumanitaire.vercel.app/",
  },
  {
    id: 6,
    title: "ICMDA",
    description: "Site pour une association engagée dans l'action humanitaire, valorisant leurs projets de terrain.",
    category: "association",
    image: "/images/icmda.webp",
    link: "https://icmda.vercel.app/",
  },
  {
    id: 7,
    title: "Hawa Sweet House",
    description: "Site e-commerce pour une pâtisserie artisanale avec commande via WhatsApp.",
    category: "ecommerce",
    image: "/images/sweethouse.webp",
    link: "https://hawasweethouse-site.vercel.app/",
  },
  {
    id: 8,
    title: "Ô Bons Rappels",
    description: "Blog de rappels spirituels, conseils inspirants et enseignements accessibles.",
    category: "blog",
    image: "/images/bons-rappels.webp",
    link: "https://m-tech-cod.github.io/bons-rappels/",
  },
  {
    id: 9,
    title: "Task Management Card",
    description: "Composant de gestion de tâches avec interface SaaS moderne, responsive et accessible.",
    category: "hng",
    image: "/images/todo.webp",
    link: "https://todo-card-hng-6zg2.vercel.app/",
  },
  {
    id: 10,
    title: "Real-Time Analytics Dashboard",
    description: "Tableau de bord de visualisation de données en temps réel.",
    category: "hng",
    image: "/images/realtime-dashboard.webp",
    link: "https://realtime-dashboard-873a.vercel.app/",
  },
  {
    id: 11,
    title: "Invoice Management App",
    description: "Application de gestion de factures",
    category: "hng",
    image: "/images/gestion-facture.webp",
    link: "https://invoice-app-nine-mocha.vercel.app/",
  },
  {
    id: 12,
    title: "Portfolio SvelteKit",
    description: "Portfolio développeur moderne.",
    category: "hng",
    image: "/images/svelte.webp",
    link: "https://svelte-three.vercel.app/",
  },
  {
    id: 13,
    title: "Habit Tracker PWA",
    description: "Application progressive de suivi d'habitudes, performante et installable.",
    category: "hng",
    image: "/images/habit-tracker.webp",
    link: "https://habit-tracker-26fm.vercel.app/",
  },
  {
    id: 14,
    title: "WhisperBox Messenger",
    description: "Application de messagerie sécurisée avec chiffrement de bout en bout.",
    category: "hng",
    image: "/images/messagerie.webp",
    link: "https://m-tech-cod-e2ee-messenger-zere.vercel.app/",
  },
];