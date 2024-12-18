import React from "react";

const educationContent = [
  {
  year: "2024",
  degree: "SOFTWARE ENGINEERING DEGREE",
  institute: "EASTERN MEDITERRANEAN UNIVERSITY (EMU)",
  details: `Bachelor of software engineering.`,
},
{
  year: "2024-in progress",
  degree: "INFORMATION ENGINEERING",
  institute: "TECHNİCAL UNIVERSITY OF MUNICH (TUM)",
  details: `Master of information engineering.`,
}
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-university"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
