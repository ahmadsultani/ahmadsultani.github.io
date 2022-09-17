import project1 from './assets/images/project1.png';
import project2 from './assets/images/project2.png';
import project3 from './assets/images/project3.png';
import project4 from './assets/images/project4.png';
import project5 from './assets/images/project5.png';
import project6 from './assets/images/project6.jpeg';
import react from './assets/images/react.jpeg';
import tailwind from './assets/images/tailwind.png';
import bootstrap from './assets/images/bootstrap.png';
import nodejs from './assets/images/nodejs.png';
import jquery from './assets/images/jquery.png';
import hapi from './assets/images/hapi.png';

export const projects = [
  {
    title: "Bookshelf API",
    description:
      "Last project from dicoding \"Belajar Aplikasi Back-End untuk Pemula\" course. Created with HAPI Framework on Node.js",
    image: project1,
    link: "https://github.com/ahmadsultani/bookshelf-api",
  },
  {
    title: "Bookshelf App",
    description:
      "Last project from dicoding \"Belajar Front-End Web untuk Pemula\" course. Created with Basic HTML, CSS, Javascript",
    image: project2,
    link: "https://github.com/ahmadsultani/bookshelf-apps"
  },
  {
    title: "Todo App",
    description:
      "Todo Application that I made as an exercise from my \"Anorite\" project leader. Created with React on Typescript and Chakra UI",
    image: project3,
    link: "https://github.com/ahmadsultani/todo-redux"
  },
  {
    title: "Portfolio Website",
    description:
      "My old portfolio that i made with basic HTML, CSS, Javascript. I also used a bit of Bootstrap 3 and jQuery",
    image: project4,
    link: "https://github.com/ahmadsultani/old-portfolio"
  },
  {
    title: "Currency Converter",
    description:
      "Currency Converter App that built with React Hook, Typescript, and Chakra UI. Tribute to API Layer who provides the Exchange Rate Data API ",
    image: project5,
    link: "https://github.com/ahmadsultani/currency-converter"
  },
  {
    title: "Weather App",
    description:
      "Weather Forecast Application that I also made as an exercise. Created with React Hook, Chakra UI and OpenWeatherAPI",
    image: project6,
    link: "https://github.com/ahmadsultani/weather-app"
  }
];

export const skills = [
  { name: "React", image: react },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Bootstrap", image: bootstrap },
  { name: "Node.js", image: nodejs },
  { name: "jQuery", image: jquery },
  { name: "HAPI", image: hapi },
];