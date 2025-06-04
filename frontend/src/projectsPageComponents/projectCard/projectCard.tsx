import "./projectCard.css";
import Tilt from "react-parallax-tilt";

import GithubLogo from "../../assets/img/github-mark.png";

type ProjectCardProps = {
  title: string;
  description: string;
  imageLink: string;
  githubLink: string;
  tags: Array<string>;
};

export default function ProjectCard({
  title,
  description,
  imageLink,
  githubLink,
  tags,
}: ProjectCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={450}
      scale={1.05}
      className="project-card"
    >
      <div className="image-container">
        <img className="project-image" src={imageLink} />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img className="github-link" src={GithubLogo} />
        </a>
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-descr">{description}</p>
    </Tilt>
  );
}
