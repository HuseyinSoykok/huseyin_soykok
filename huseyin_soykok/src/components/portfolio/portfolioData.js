import Image8 from "../../assets/img/portfolio/project-8.jpg";
import Image9 from "../../assets/img/portfolio/project-9.jpg";
import Image10 from "../../assets/img/portfolio/project-10.jpg";
import Image12 from "../../assets/img/portfolio/project-12.jpg";
import s1 from "../../assets/img/portfolio/s5.png";
import s2 from "../../assets/img/portfolio/s2.jpg";
import s3 from "../../assets/img/portfolio/s3.jpg";
import s4 from "../../assets/img/portfolio/s4.jpg";
import tempHospital from "../../assets/img/portfolio/temp-hospital.svg";
import tempAirbnb from "../../assets/img/portfolio/temp-airbnb.svg";
import tempNeuro from "../../assets/img/portfolio/temp-neuro.svg";
import tempSap from "../../assets/img/portfolio/temp-sap.svg";
import tempTaxi from "../../assets/img/portfolio/temp-taxi.svg";
import DisableDevtool from 'disable-devtool';

DisableDevtool();

const PortfolioData = [
  {
    id: 1,
    type: "Team Project 5",
    image: s1,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Generative AI WebApp",
        client: "Python AI Integrated WebApp",
        language: "Python, RestAPI, NodeJS, React and Postgresql",
        preview: "RoomGPT",
        link: "https://github.com/DogukanDG/GEN-AI-Project",
      },
    ],
  },
  {
    id: 2,
    type: "My Freelance Project 1",
    image: s2,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "WIX",
        language: "Velo and Node.js",
        preview: "www.cyprusaquataxi.com",
        link: "https://www.cyprusaquataxi.com",
      },
    ],
  },
  {
    id: 3,
    type: "My Freelance Project 2",
    image: s3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "WIX",
        language: "Velo, Node.js",
        preview: "www.cyprusluxurytaxi.com",
        link: "https://www.cyprusluxurytaxi.com",
      },
    ],
  },
  {
    id: 4,
    type: "Team Project 1",
    image: Image8,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Blockchain Wallet Demo",
        client: "Github",
        language: "Python,HTML and CSS",
        preview: "Blockchain-Wallet-Demo (Github)",
        link: "https://github.com/MrHacker6969/Blockchain-Wallet-Demo",
      },
    ],
  },
  {
    id: 5,
    type: "Team Project 2",
    image: Image9,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Incubaby (IB01) Design",
        client: "Node-Red Dashboard",
        language: "Proteus, Scilab, Node-Red and VSPE",
        preview: "Incubaby (IB01) Design",
        link: "https://github.com/MrHacker6969/Incubaby-IB01-Design-of-controller-for-a-premature-infant",
      },
    ],
  },
  {
    id: 6,
    type: "Team Project 3",
    image: Image10,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Webservice Digital Ocean Server",
        language: "Express.js, Node.js, PostgreSQL, HTML, CSS and Javascript",
        preview: "Journey To Hope",
        link: "",
      },
    ],
  },
  {
    id: 7,
    type: "Team Project 4",
    image: Image12,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Web Server",
        language: "ASP.Net, C++, HTML, CSS and Javascript",
        preview: "QR Based Entry-Exit System",
        link: "",
      },
    ],
  },
  {
    id: 8,
    type: "My Freelance Project 3",
    image: s4,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "WIX",
        language: "Velo, Node.js",
        preview: "Law and Consultancy Services",
        link: "https://www.soykokhukuk.com/",
      },
    ],
  },
  {
    id: 9,
    type: "Team Project 8",
    image: tempHospital, // TODO: geçici görsel, gerçek görselle değiştirilecek
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Hospital Optimization Competition 2025",
        client: "Technical University of Munich",
        language: "Python, Genetic Algorithm (GA) and Simulated Annealing (SA)",
        preview: "Business Process Optimization Competition 2025",
        link: "",
      },
    ],
  },
  {
    id: 10,
    type: "Team Project 9",
    image: tempAirbnb, // TODO: geçici görsel, gerçek görselle değiştirilecek
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "NYC Airbnb Data Analytics Desktop Application",
        client: "Technical University of Munich",
        language: "Python, PySide6/Qt6, Plotly and Pytest",
        preview: "Modern Desktop App for Analyzing NYC Airbnb Data",
        link: "",
      },
    ],
  },
  {
    id: 11,
    type: "Team Project 10",
    image: tempNeuro, // TODO: geçici görsel, gerçek görselle değiştirilecek
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Neuromorphic Computing (SpiNNaker2 / NeuroFEM)",
        client: "Technical University of Munich & HLRS Stuttgart",
        language: "Python, SpiNNaker2 (SpiNNcloud) and NeuroFEM",
        preview: "Future Computing Laboratory - Neuromorphic PDE Solver",
        link: "",
      },
    ],
  },
  {
    id: 12,
    type: "Team Project 11",
    image: tempSap, // TODO: geçici görsel, gerçek görselle değiştirilecek
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "AI-Powered SAP Custom Code Analyzer",
        client: "Technical University of Munich & Deloitte",
        language: "Claude Code Skills/Agents, ABAP Analysis (S/4HANA Conversion)",
        preview: "AI Coding: Modern Software Development",
        link: "",
      },
    ],
  },
  {
    id: 13,
    type: "My Freelance Project 4",
    image: tempTaxi, // TODO: geçici görsel, gerçek görselle değiştirilecek
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Cyprus Taxi Now Company",
        language: "Node.js and TypeScript",
        preview: "Cyprus Taxi Now",
        link: "",
      },
    ],
  },





























  /*
  {
    id: 4,
    type: "local project",
    image: Image4,
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 5,
    type: "saas project",
    image: Image5,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Themeforest",
        language: "HTML, CSS, ReactJS",
        preview: "www.envato.com",
        link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
      },
    ],
  },
  {
    id: 6,
    type: "mockup project",
    image: Image6,
    tag: ["logo", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript",
        preview: "www.pexels.com",
        link: "https://www.pexels.com",
      },
    ],
  },
  {
    id: 7,
    type: "facebook project",
    image: Image7,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Facebook",
        language: "HTML, CSS, Javascript",
        preview: "www.facebook.com",
        link: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    id: 8,
    type: "dribble project",
    image: Image8,
    tag: ["graphic design"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Dribbble",
        language: "HTML, CSS, Javascript",
        preview: "www.dribbble.com",
        link: "https://dribbble.com/ib-themes",
      },
    ],
  },
  {
    id: 9,
    type: "behence project",
    image: Image9,
    tag: ["graphic design", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Behance",
        language: "HTML, CSS, Javascript",
        preview: "www.behance.com",
        link: "https://www.behance.net/ib-themes",
      },
    ],
  },
  */
];

export default PortfolioData;
