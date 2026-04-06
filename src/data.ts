import project_torche from "./assets/images/project_torche.webp";
import project_pp12 from "./assets/images/project_pp12.webp";
import project_sm_b2b from "./assets/images/project_sm_b2b.webp";
import project_dmc from "./assets/images/project_dmc.webp";
import project_sm from "./assets/images/project_sm.webp";
import project_sm_ds from "./assets/images/project_sm_ds.webp";

import react from "./assets/images/react.webp";
import tailwind from "./assets/images/tailwind.webp";
import html from "./assets/images/html.svg";
import css from "./assets/images/css.svg";
import typescript from "./assets/images/typescript.svg";
import javascript from "./assets/images/javascript.svg";
import chakraui from "./assets/images/chakraui.svg";
import nextjs from "./assets/images/nextjs.svg";
import redux from "./assets/images/redux.svg";

export const projects = [
  {
    slug: "skillmapper-b2c",
    title: "SkillMapper B2C",
    description:
      "Consumer learning platform with AI-assisted discovery, personalized journeys, and secure payment workflows.",
    image: project_sm,
    href: "https://skillmapper.com/",
    story: `
      <p>
        SkillMapper B2C is a consumer learning platform designed to help users find relevant courses, build skill paths, and progress efficiently.
        Core capabilities include AI-powered course search, user profiles, assessment support, and integrated payment flows.
      </p>

      <br />

      <p>
        As a frontend engineer, I focused on performance and product usability. By improving caching strategy and optimizing state management,
        I reduced page load and interaction latency by roughly 50%, which directly improved retention and engagement metrics.
      </p>

      <br />

      <p>
        I also contributed to reusable architecture by building a shared utility layer and atomic UI components used across multiple features.
        This improved delivery speed, reduced UI inconsistencies, and supported long-term maintainability as the product scaled.
      </p>
    `,
    tags: ["React", "Next.js", "Material UI", "TanStack Query"],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "TanStack Query",
      "Material UI",
      "Next Intl",
    ],
  },
  {
    slug: "dmc-ikatek",
    title: "Disaster Management Center - IKATEK Unhas",
    description:
      "End-to-end disaster reporting and donation platform with an operations dashboard and role-based access.",
    image: project_dmc,
    href: "https://www.dmcikatek-uh.org/",
    story: `
      <p>
        This project was built for the Disaster Management Center (DMC) of IKATEK Unhas to support reporting, donation collection, and response coordination.
        The platform centralizes incident reporting, program creation, and donation tracking in one operational workflow.
      </p>

      <br />

      <p>
        As lead developer, I designed the relational data model and implemented core business flows for reporting and program management.
        I also introduced reusable Blade components to improve consistency, reduce duplicated code, and streamline future updates.
      </p>

      <br />

      <p>
        The solution included role-based access control and browser push notifications to improve security and communication quality.
        With a fully responsive interface, the platform now supports field users and administrators across mobile and desktop environments.
      </p>
    `,
    tags: ["Laravel", "Livewire", "Tailwind CSS"],
    stack: [
      "Laravel",
      "Livewire 3",
      "Tailwind CSS",
      "JavaScript",
      "MySQL",
      "Service Worker",
    ],
  },
  {
    slug: "skillmapper-design-system",
    title: "SkillMapper Design System",
    image: project_sm_ds,
    description:
      "Scalable design system built with Storybook and atomic design to standardize UI delivery across teams.",
    story: `
      <p>
        I developed the SkillMapper Design System to standardize interface implementation and improve collaboration between design and engineering.
        The system established shared foundations for spacing, typography, interaction patterns, and component composition.
      </p>

      <br />

      <p>
        Built with React, TypeScript, and Material UI, the component library followed Atomic Design principles to keep modules reusable and easy to extend.
        This structure reduced one-off UI work and created a clearer path for scaling product features.
      </p>

      <br />

      <p>
        Storybook documentation was introduced to improve discoverability, usage clarity, and review efficiency.
        The result was faster development cycles, higher consistency, and a more reliable handoff process across teams.
      </p>
    `,
    tags: ["React", "Material UI", "Storybook"],
    stack: ["React", "Material UI", "TypeScript", "Storybook"],
  },
  {
    slug: "semen-tiga-roda-dashboard",
    title: "Semen Tiga Roda Dashboard",
    image: project_pp12,
    description:
      "Internal operational dashboard for daily monitoring, site management, inventory workflows, and reporting.",
    story: `
      <p>
        The Semen Tiga Roda Dashboard was built as an internal platform to improve visibility into daily operations.
        It consolidated site monitoring, item management, user administration, and reporting into a single interface.
      </p>

      <br />

      <p>
        I contributed to frontend implementation and focused on a modular architecture that supports rapid iteration.
        The UI was designed for clarity and efficiency, enabling internal teams to complete routine workflows with minimal friction.
      </p>

      <br />

      <p>
        The stack leveraged Next.js, Axios, Material UI, and TanStack Query to ensure stable data flow and fast performance.
        Lighthouse audits consistently achieved top-tier scores, including <b>100/100 for performance and SEO</b> in key release checkpoints.
      </p>
    `,
    tags: ["Next.js", "Material UI", "TanStack Query"],
    stack: ["Next.js", "Material UI", "TypeScript", "Axios", "TanStack Query"],
  },
  {
    slug: "skillmapper-b2b",
    title: "SkillMapper B2B",
    description:
      "B2B learning platform for workforce upskilling with AI discovery, assignment workflows, analytics, and budget controls.",
    image: project_sm_b2b,
    href: "https://skillmapper.com/business",
    story: `
      <p>
        SkillMapper B2B is a SaaS platform that helps organizations manage employee learning and certification programs.
        It combines AI-assisted course discovery, task assignment, people management, and performance analytics in one system.
      </p>

      <br />

      <p>
        I was responsible for frontend delivery using React, Next.js, and Material UI, working closely with design and backend teams.
        My contributions focused on reliable UX patterns, scalable component structure, and predictable data interaction across complex dashboards.
      </p>

      <br />

      <p>
        The platform also integrated subscription and billing workflows through Stripe to support enterprise plan management.
        Overall, this project strengthened operational visibility for HR teams and improved decision-making through actionable learning analytics.
      </p>
    `,
    tags: ["React", "Redux", "Next.js", "Material UI"],
    stack: ["React", "Redux", "Next.js", "Material UI", "TypeScript", "Axios"],
  },
  {
    slug: "torche-career-app",
    title: "Torche Career App",
    description:
      "Career platform developed during internship with responsive UI, routing, and structured state management.",
    image: project_torche,
    story: `
      <p>
        During my internship at Torche Education, I built a careers application to improve how candidates discover and apply for open roles.
        The product emphasized clear information architecture, responsive design, and straightforward navigation.
      </p>

      <br />

      <p>
        In addition to the public-facing career pages, I implemented dashboard features for HR workflows such as listing management
        and application tracking. This included forms, filtering, and operational views to support faster recruitment coordination.
      </p>

      <br />

      <p>
        The application was developed with React, Redux, React Router, and Tailwind CSS.
        This project provided practical experience in production-style frontend delivery and strengthened my foundation in scalable UI engineering.
      </p>
    `,
    href: "https://github.com/arctanziru/career-page-Torche",
    tags: ["React", "Redux", "React Router", "Tailwind"],
    stack: [
      "React",
      "Redux",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "TypeScript",
    ],
  },
];

export const frameworks = [
  { name: "React.js", image: react, level: 93 },
  { name: "Next.js", image: nextjs, level: 90 },
  { name: "Remix", level: 82 },
  { name: "Tailwind CSS", image: tailwind, level: 87 },
  { name: "Chakra UI", image: chakraui, level: 80 },
  { name: "Material UI", level: 88 },
  { name: "Redux", image: redux, level: 90 },

  { name: "TanStack Query", level: 88 },
];

export const languages = [
  { name: "HTML", image: html, level: 85 },
  { name: "CSS", image: css, level: 80 },
  { name: "JavaScript", image: javascript, level: 93 },
  { name: "TypeScript", image: typescript, level: 93 },
  { name: "Go", level: 72 },
  { name: "Python", level: 76 },
  { name: "PostgreSQL", level: 80 },
  { name: "MySQL", level: 84 },
];
