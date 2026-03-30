export type NavItem = {
  title: string;
  slug: string;
};

export type NavGroup = {
  title: string;
  basePath: "/docs" | "/guide";
  items: NavItem[];
};

export const docsNav: NavGroup[] = [
  {
    title: "Getting Started",
    basePath: "/docs",
    items: [
      { title: "About", slug: "about" },
      { title: "Features", slug: "features" },
      { title: "Requirements", slug: "requirements" },
      { title: "Installation", slug: "installation" },
      { title: "Quick Start", slug: "quick-start" }
    ]
  },
  {
    title: "Usage",
    basePath: "/docs",
    items: [
      { title: "Usage", slug: "usage" },
      { title: "Examples", slug: "examples" },
      { title: "Templates", slug: "templates" }
    ]
  },
  {
    title: "Configuration",
    basePath: "/docs",
    items: [
      { title: "Docker", slug: "docker" },
      { title: "Database", slug: "database" },
      { title: "Authentication", slug: "authentication" },
      { title: "Frontend Assets", slug: "frontend" }
    ]
  },
  {
    title: "Operations",
    basePath: "/docs",
    items: [
      { title: "Deployment", slug: "deployment" },
      { title: "Troubleshooting", slug: "troubleshooting" },
      { title: "FAQ", slug: "faq" }
    ]
  },
  {
    title: "Development",
    basePath: "/docs",
    items: [
      { title: "Development", slug: "development" },
      { title: "Advanced Usage", slug: "advanced-usage" },
      { title: "Contributing", slug: "contributing" },
      { title: "Changelog", slug: "changelog" },
      { title: "API Documentation", slug: "api-documentation" },
      { title: "License", slug: "license" }
    ]
  }
];

export const guideNav: NavGroup[] = [
  {
    title: "Panduan",
    basePath: "/guide",
    items: [
      { title: "Mulai", slug: "mulai" },
      { title: "Instalasi", slug: "instalasi" },
      { title: "Konfigurasi", slug: "konfigurasi" },
      { title: "CLI", slug: "cli" }
    ]
  }
];
