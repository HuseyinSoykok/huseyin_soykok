import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p70", skillPercent: "70", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p95", skillPercent: "95", skillName: "WIX" },
  { skillClass: "p75", skillPercent: "75", skillName: "NODE.JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "PYTHON" },
  { skillClass: "p65", skillPercent: "65", skillName: "REACT" },
  { skillClass: "p70", skillPercent: "70", skillName: "Vue.JS" },
  { skillClass: "p65", skillPercent: "65", skillName: "C++" },
  { skillClass: "p80", skillPercent: "80", skillName: "Express.JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "PostgreSQL" },

];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
