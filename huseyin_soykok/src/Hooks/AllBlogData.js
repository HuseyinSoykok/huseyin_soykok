import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Software engineering: the art and science of coding.",
      commentor: "Hüseyin S.",
      date: "22 January 2024",
      tag: `Software Engineering, Software Architecture, Computer Science`,
      sections: [
        {
          sectionTitle: "Software Engineering",
          content:
            "Software engineering is a field that serves as the foundation for modern technology. Experts in this sector possess a diverse collection of knowledge and abilities for designing, developing, and maintaining computer systems. The coding process is also both an art and a science in software engineering. Here's a closer look at these two areas of software engineering:",
        },
        {
          sectionTitle: "Art of Coding: Software Architectures",
          content:
            "In software engineering, the art of coding includes creating software architectures and improving these designs with an artistic touch. Software architecture is the discipline of designing an application's general structure and components, including the links between modules, data flow, and application layers. A strong design enables system scalability, maintainability, and dependability.",
        },
        {
          sectionTitle: "What is software architecture?",
          content:
            "Software architecture is the discipline that designs an application's overall structure and components. This involves specifying the links between modules, data flow, and application layers. A well-defined design can accommodate modifications, identify problems, and improve overall system performance.",
          additionalContent: [
            "For example, microservices architecture is a common style that breaks an application into tiny, autonomous services, each with a defined function. This modular design ensures that modifications to one service do not impact the others.",
          ],
        },
        {
          sectionTitle: "The Science of Coding:",
          content:
            "However, software engineering is also regarded as a science because practitioners in this sector are distinguished by their problem-solving abilities and mathematical comprehension. Fundamental concepts including algorithms, data structures, and software architecture serve as the foundation for software development.",
          additionalContent: [
            "This branch of science stresses that software development is a methodical process. Programmers define issues, provide requirements, and create and implement solutions. It is continuously tested and enhanced during the software's lifespan. Scientific approaches are employed to guarantee that the program is stable, efficient, and scalable.",
            "To summarize, software engineering is a field that combines both the art and science of coding. Programmers use creative thinking and problem-solving abilities to create software that is both visually appealing and scientifically sound. This balance is important for effectively developing and sustaining today's sophisticated computer systems.",
          ],
        },
      ],
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
