import React from "react";

const workContent = [
  {
    year: "07/2021-08/2021",
    position: "Internship",
    compnayName: "Creditwest Bank",
    details:
      "I participated in the Software Genius program at Creditwest Bank and worked as an intern software engineer. I worked in various jobs during my tenure (system installation in bank branches, troubleshooting malfunctions in branches). I also worked as a backend developer on the QR code-based entry and exit system for bank personnel using ASP.NET.",
  },
  {
    year: "09/2022-05/2023",
    position: "Full Stack Developer",
    compnayName: "Cyprus Luxury Taxi",
    details:
      "As a full-stack developer, I spearheaded the end-to-end execution of the Cyprus Luxury Taxi Company project, seamlessly blending front-end design, back-end coding(Node.js and Type Script), database architecture, and marketing efforts. The project, aimed at boosting employment in the tourism sector, was not only managed but also delivered successfully. Today, Cyprus Luxury Taxi Company thrives as a testament to its ongoing success.",
    link: "https://www.cyprusluxurytaxi.com",
  },
  {
    year: "04/2023-09/2023",
    position: "Full Stack Developer",
    compnayName: "Aqua Tour Travel Agency",
    details:
      "As a solo full-stack developer, I orchestrated the comprehensive development of the Aqua Tour Travel Agency project. From front-end design to back-end coding(Node.js and Type Script), database architecture, and marketing strategies, I successfully navigated every aspect. The project, dedicated to enhancing tourism, stands as Aqua Tour Travel Agency, actively flourishing under my management.",
    link: "https://www.cyprusaquataxi.com",
  },
  {
    year: "06/2023-08/2023",
    position: "Full Stack Developer",
    compnayName: "Nucleus Software",
    details:
      "As a Full Stack Junior Developer at Nucleus Software, I am working a pivotal role in overseeing comprehensive project development. My responsibilities span from front-end design and back-end coding to database architecture. I successfully navigated diverse tasks to ensure the seamless integration of projects, contributing significantly to Nucleus Software's success in the technology landscape.",
  },
  {
    year: "10/2023-12/2023",
    position: "Full Stack Developer",
    compnayName: "Cyprus Taxi Now Company",
    details:
      "In my role as a full-stack developer, I single-handedly drove the development of the Cyprus Taxi Now Company project. I seamlessly handled front-end design, back-end coding(Node.js and Type Script), database design, and marketing. The project, aimed at optimizing taxi services, was not only successfully managed but also delivered with excellence. Today, Cyprus Taxi Now Company stands as a thriving entity in the transportation sector, a testament to its ongoing success.",
  },
];

const Work = () => {
  return (
    <ul>
      {workContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-building"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          {val.link && (
            <p className="open-sans-font">
              <a href={val.link} target="_blank" rel="noopener noreferrer">
                {val.link}
              </a>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Work;
