import React from "react";

const experienceContent = [
  {
    year: "2021-2022",
    position: " Junior Developer",
    compnayName: "Creditwest Bank",
    details: `  I participated in the software genius program at Creditwest Bank and worked as a
    junior software engineer.`,
  },
  {
    year: "2022 - 2023",
    position: " Full-Stack Developer",
    compnayName: "Nucleus Software",
    details: `As a Full Stack Senior Developer at Nucleus Software, I am working a pivotal role in overseeing comprehensive project
    development.`,
  },
  {
    year: "2022 - Present",
    position: "Senior Developer",
    compnayName: "Freelancer",
    details: `As a full-stack developer, I lead the end-to-end execution of my projects and the projects I partner with by seamlessly blending front-end design, back-end coding, database architecture and marketing efforts.`,
  },
  {
    year: "2022",
    position: " Junior Developer",
    compnayName: "Eastern Mediterranean University",
    details: ` Blockchain Systems --> In the project's design, we implemented the Merkle Tree method for blockchain verification and encryption, alongside RSA encryption for securing private and public keys. `,
  },
  {
    year: "2022",
    position: " Junior Developer",
    compnayName: "Eastern Mediterranean University",
    details: `Incubaby (IB01) Design of controller for a premature infant --> The INCUBABY (IB01) project designs a control system to support the healthy development of premature babies. In this
    project, a control and monitoring system of a baby incubator will be developed using Node-RED, Scilab and Proteus.`,
  },
  {
    year: "2024",
    position: "Junior Developer",
    compnayName: "Eastern Mediterranean University",
    details: `Sponsorship and Donation Web Application --> This project is dedicated to creating a system that aids and provides donations for underprivileged children, specifically
    those who are orphaned or in need due to various circumstances.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
