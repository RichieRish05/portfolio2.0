import "./linkedinCard.css";

import LinkedinLogo from "../../assets/img/linkedin-logo.png";

export default function LinkedinCard() {
  const linkedinLink = "https://www.linkedin.com/in/rishi-murumkar/";

  return (
    <div
      className="contact-card linkedin-card"
      onClick={() => window.open(linkedinLink, "_blank")}
      style={{ cursor: "pointer" }}
    >
      <img src={LinkedinLogo} alt="Linkedin Logo" className="linkedin-logo" />
    </div>
  );
}
