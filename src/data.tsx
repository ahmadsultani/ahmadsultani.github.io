import project_notes from "./assets/images/project_notes.webp";
import project_bookshelf from "./assets/images/project_bookshelf.webp";
import project_todo from "./assets/images/project_todo.webp";
import project_currency from "./assets/images/project_currency.webp";
import project_weather from "./assets/images/project_weather.webp";
import project_torche from "./assets/images/project_torche.webp";
import project_rakamin from "./assets/images/project_rakamin.webp";
import project_bookstore from "./assets/images/project_bookstore.webp";
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
    title: "Torche Career App",
    description:
      "Project from my internship program at Torche Education. Created with React, React Router DOM, Redux, and Tailwind CSS ",
    image: project_torche,
    link: "https://github.com/ahmadsultani/career-page-Torche",
  },
  {
    title: "Bookstore",
    description:
      "Group project from 'Manajemen Basis Data' course that I led. Created with NextJS and Tailwind CSS that integrated with a server that I built",
    image: project_bookstore,
    link: "https://github.com/ahmadsultani/todo-redux",
  },
  {
    title: "Notes App",
    description:
      'Last project from dicoding "Belajar Membuat Aplikasi Web dengan React" course. Created with React Components Style to ensure a strong fundamentals',
    image: project_notes,
    link: "https://github.com/ahmadsultani/notes-app",
  },
  {
    title: "Ecommerce Catalog",
    description:
      'Final project from dicoding Core Initiative Company at Rakamin Virtual Internship Program. Built with VueJS, Vanilla CSS and fetched data from fakestoreapi',
    image: project_rakamin,
    link: "https://github.com/ahmadsultani/notes-app",
  },
  {
    title: "Bookshelf App",
    description:
      'Last project from dicoding "Belajar Front-End Web untuk Pemula" course. Created with HTML, Vanilla CSS and Vanilla Javascript',
    image: project_bookshelf,
    link: "https://github.com/ahmadsultani/bookshelf-apps",
  },
  {
    title: "Todo App",
    description:
      'Todo Application, an exercise from my volunteer project leader. Created with React on Typescript and Chakra UI',
    image: project_todo,
    link: "https://github.com/ahmadsultani/todo-redux",
  },
  {
    title: "Currency Converter",
    description:
      "Currency Converter App that built with React Query, Typescript, Chakra UI, and also Exchange Rate API from API Layer",
    image: project_currency,
    link: "https://github.com/ahmadsultani/currency-converter",
  },
  {
    title: "Weather App",
    description:
      "Weather Forecast Application that I also made as an exercise. Created with React Hook, Chakra UI and OpenWeatherAPI",
    image: project_weather,
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
  { name: "Javascript", image: javascript },
  { name: "Typescript", image: typescript },
];
