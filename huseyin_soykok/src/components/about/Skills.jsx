import React from "react";

import awsLogo from "../../assets/img/skills/aws.svg";
import claudeCodeLogo from "../../assets/img/skills/claude-code.svg";
import dockerLogo from "../../assets/img/skills/docker.svg";
import kubernetesLogo from "../../assets/img/skills/kubernetes.svg";
import mysqlLogo from "../../assets/img/skills/mysql.svg";
import javascriptLogo from "../../assets/img/skills/javascript.svg";
import wixLogo from "../../assets/img/skills/wix.svg";
import nodejsLogo from "../../assets/img/skills/nodejs.svg";
import pythonLogo from "../../assets/img/skills/python.svg";
import reactLogo from "../../assets/img/skills/react.svg";
import vuejsLogo from "../../assets/img/skills/vuejs.svg";
import cplusplusLogo from "../../assets/img/skills/cplusplus.svg";
import expressLogo from "../../assets/img/skills/express.svg";
import postgresqlLogo from "../../assets/img/skills/postgresql.svg";

const skillsContent = [
  { skillName: "Amazon Web Services (AWS)", logo: awsLogo },
  { skillName: "Generative-AI", logo: claudeCodeLogo },
  { skillName: "Docker", logo: dockerLogo },
  { skillName: "Kubernetes", logo: kubernetesLogo },
  { skillName: "MySQL", logo: mysqlLogo },
  { skillName: "JavaScript", logo: javascriptLogo },
  { skillName: "WIX", logo: wixLogo },
  { skillName: "Node.js", logo: nodejsLogo },
  { skillName: "Python", logo: pythonLogo },
  { skillName: "React", logo: reactLogo },
  { skillName: "Vue.js", logo: vuejsLogo },
  { skillName: "C++", logo: cplusplusLogo },
  { skillName: "Express.js", logo: expressLogo },
  { skillName: "PostgreSQL", logo: postgresqlLogo },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className="skill-logo">
            <img src={val.logo} alt={`${val.skillName} logo`} loading="lazy" />
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
