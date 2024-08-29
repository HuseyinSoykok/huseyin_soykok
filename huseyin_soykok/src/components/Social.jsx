import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/Huseyin.soykok.2",
  },
  { iconName: "fa fa-twitter", 
    link: "https://twitter.com/SoykokHuseyin" },
  {
    iconName: "fa fa-instagram",
    link: "https://www.instagram.com/huseyin_soykok/",
  },

  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/h%C3%BCseyin-soyk%C3%B6k/",
  },

  { iconName: "fa fa-envelope", 
  link: "mailto:soykokhuseyin@gmail.com" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
