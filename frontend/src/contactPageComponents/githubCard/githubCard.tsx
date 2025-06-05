import "./githubCard.css";

import GithubImage from "../../assets/img/github-mark.png";

export default function GithubCard() {
  const githubLink = "https://github.com/RichieRish05";
  return (
    <div
      className="contact-card github-card"
      onClick={() => window.open(githubLink, "_blank")}
      style={{ cursor: "pointer" }}
    >
      <img
        src={GithubImage}
        alt="Github Logo"
        className="github-logo-contact"
      />
    </div>
  );
}
