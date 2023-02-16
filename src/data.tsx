import project1 from "./assets/images/project1.webp";
import project2 from "./assets/images/project2.webp";
import project3 from "./assets/images/project3.webp";
import project4 from "./assets/images/project4.webp";
import project5 from "./assets/images/project5.webp";
import project6 from "./assets/images/project6.webp";
import react from "./assets/images/react.webp";
import tailwind from "./assets/images/tailwind.webp";
import bootstrap from "./assets/images/bootstrap.webp";
import html from "./assets/images/html.svg";
import css from "./assets/images/css.svg";
import typescript from "./assets/images/typescript.svg";
import javascript from "./assets/images/javascript.svg";
import chakraui from "./assets/images/chakraui.svg";
import nextjs from "./assets/images/nextjs.svg";
import redux from "./assets/images/redux.svg";

export const projects = [
  {
    title: "Notes App",
    description:
      'Last project from dicoding "Belajar Membuat Aplikasi Web dengan React" course. Created with React Components Style to ensure a strong fundamentals',
    image: project1,
    link: "https://github.com/ahmadsultani/notes-app",
  },
  {
    title: "Bookshelf App",
    description:
      'Last project from dicoding "Belajar Front-End Web untuk Pemula" course. Created with Basic HTML, CSS, Javascript',
    image: project2,
    link: "https://github.com/ahmadsultani/bookshelf-apps",
  },
  {
    title: "Todo App",
    description:
      'Todo Application, an exercise from my volunteer project leader. Created with React on Typescript and Chakra UI',
    image: project3,
    link: "https://github.com/ahmadsultani/todo-redux",
  },
  {
    title: "Login/Signup Page",
    description:
      "My collaboration project with one of my college friend as a designer. Made with next.js and using atomic components paradigm",
    image: project4,
    link: "https://github.com/ahmadsultani/login-signup",
  },
  {
    title: "Currency Converter",
    description:
      "Currency Converter App that built with React Query, Typescript, Chakra UI, and also Exchange Rate API from API Layer",
    image: project5,
    link: "https://github.com/ahmadsultani/currency-converter",
  },
  {
    title: "Weather App",
    description:
      "Weather Forecast Application that I also made as an exercise. Created with React Hook, Chakra UI and OpenWeatherAPI",
    image: project6,
    link: "https://github.com/ahmadsultani/weather-app",
  },
];

export const frameworks = [
  { name: "React.js", image: react },
  { name: "Next.js", image: nextjs },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Bootstrap", image: bootstrap },
  { name: "Chakra UI", image: chakraui },
  { name: "Redux", image: redux },
];


export const languages = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "Javascript", image: javascript},
  { name: "Typescript", image: typescript },
]
