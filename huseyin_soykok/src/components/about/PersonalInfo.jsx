import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Hüseyin" },
  { meta: "last name", metaInfo: "Soykök" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Cypriot" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Cyprus" },
  { meta: "Email", metaInfo: "soykokhuseyin@gmail.com" },
  { meta: "Instagram", metaInfo: "@huseyin_soykok" },
  { meta: "Languages", metaInfo: "Turkish (Native), English (Advance)" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
