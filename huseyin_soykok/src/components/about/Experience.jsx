import React from "react";

const experienceContent = [
 {
    "year": "2026",
    "position": "AI-Powered SAP Code Analyzer Developer",
    "compnayName": "Technical University of Munich – TUM-Deloitte",
    "details": "Focused on building reusable Claude Code skills and agents to automatically analyze SAP ECC custom ABAP code for S/4HANA Brownfield conversion readiness, as part of a TUM-Deloitte project. The project detects obsolete tables, deprecated function modules, and incompatible ABAP patterns, then recommends S/4HANA-compliant remediation and code adaptations."
  },
  {
    "year": "2025-2026",
    "position": "Desktop Application Developer",
    "compnayName": "Technical University of Munich",
    "details": "Developed a professional desktop analytics application in Python (PySide6/Qt6) for multi-perspective exploration of 48,895 NYC Airbnb listings. Engineered five role-specific dashboards (Traveler, Investor, Regulator, Competitor, Journalist) with tailored interactive Plotly visualizations rendered via WebEngine. Refactored from a Dash prototype to a modular Qt architecture achieving 3-6x performance improvements, applying PEP 8, type hints, docstrings, and pytest-based testing throughout."
  },
  {
    "year": "2025-2026",
    "position": "Research Developer",
    "compnayName": "Technical University of Munich",
    "details": "Implemented a NeuroFEM-based neuromorphic solver on SpiNNaker2 (SpiNNcloud) in parallel collaboration with HLRS Stuttgart to solve discretized PDEs Ax=b using massively parallel PI-controller dynamics. Performed parameter sweeps (γ, Δt, NPM) to minimize solution error under strict per-core memory constraints."
  },
  {
    "year": "2025",
    "position": "AI Optimization Developer",
    "compnayName": "Technical University of Munich",
    "details": "Developed a hospital optimization system for the Business Process Optimization Competition 2025. Implemented Genetic Algorithm (GA) and Simulated Annealing (SA) to provide intelligent planning and scheduling mechanisms that minimize both operational costs and patient treatment cycle times."
  },
  {
    "year": "2025",
    "position": "Full-Stack AI Developer",
    "compnayName": "Technical University of Munich",
    "details": "Developed a smart web application for intelligent room search, booking, and facility availability management across campus environments. Integrated natural language processing capabilities using Gemini AI, enabling users to perform semantic queries and receive context-aware results. Built a full-stack solution with scalable architecture and deployed it on DigitalOcean infrastructure for reliable cloud hosting."
  },
  {
    "year": "2021-2022",
    "position": "Blockchain Developer",
    "compnayName": "Eastern Mediterranean University",
    "details": "In the project's design, implemented the Merkle Tree method for blockchain verification and encryption, alongside RSA encryption for securing private and public keys. To enhance security, developed a straightforward verification algorithm to validate whether the entered private key corresponds to the provided public key. As a result, the project ensures a secure and decentralized shopping experience for users, allowing them to shop in a confidential environment without tracking."
  },
  {
    "year": "2022-2023",
    "position": "Web Developer",
    "compnayName": "Eastern Mediterranean University",
    "details": "Focused on simulating pharmacy information and stock status, addressing the needs of pharmacists. The primary objective was to develop a new pharmacy information system based on feedback from pharmacists, addressing their specific challenges. Employed fundamental website programming languages, including HTML, CSS, and JavaScript, to create an effective and user-friendly system that caters to the unique requirements of pharmacy management."
  },
  {
    "year": "2023-2024",
    "position": "Real-Time Systems Developer",
    "compnayName": "Eastern Mediterranean University",
    "details": "Utilized Python to create a vehicle simulation program with a user interface (GUI) for real-time plotting. Users can specify virtual vehicle characteristics, control simulation parameters, and observe the vehicle's behavior over time. The combination of these methods aims to enhance user understanding and decision-making in the simulation environment."
  },
  {
    "year": "2023-2024",
    "position": "Embedded Systems Developer",
    "compnayName": "Eastern Mediterranean University",
    "details": "The INCUBABY (IB01) project designs a control system to support the healthy development of premature babies. Developed a control and monitoring system of a baby incubator using Node-RED, Scilab and Proteus. The project effectively uses modern technology with the aim of improving the living conditions of premature babies."
  },
  {
    "year": "2023-2024",
    "position": "Full-Stack Web Developer",
    "compnayName": "Eastern Mediterranean University",
    "details": "Dedicated to creating a system that aids and provides donations for underprivileged children, specifically those who are orphaned or in need due to various circumstances. Implemented using Node.js and followed the EJS format for dynamic web pages. Employed PostgreSQL for efficient database operations, ensuring the smooth functioning of the system in managing and facilitating assistance for children in need."
  }
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
