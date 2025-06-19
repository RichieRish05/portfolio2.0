import "./ProjectsPage.css";

import ProjectCard from "../../projectsPageComponents/projectCard/projectCard";

import MoodySoundImage from "../../assets/img/moody-sound.png";
import ChessImage from "../../assets/img/chess.png";
import ChatToMeImage from "../../assets/img/chat-to-me.png";
import BunnyMesh from "../../assets/img/bunny-mesh.png";

export default function ProjectsPage() {
  return (
    <div className="projects-container">
      <ProjectCard
        title="MoodySound"
        description="A Custom PyTorch Neural Network to Detect Mood From Sound."
        imageLink={MoodySoundImage}
        githubLink="https://github.com/RichieRish05/MoodySound2"
        animationLength="0.5s"
      />
      <ProjectCard
        title="Chess"
        description="A Multiplayer Chess Game Built With Custom Algorithms."
        imageLink={ChessImage}
        githubLink="https://github.com/RichieRish05/GameOfChess"
        animationLength="1s"
      />
      <ProjectCard
        title="ChatToMe"
        description="A RAG Chatbot Tuned to My Professional Experiences."
        imageLink={ChatToMeImage}
        githubLink="https://github.com/RichieRish05/ChatToMe"
        animationLength="1.5s"
      />
      <ProjectCard
        title="ShadowLite 3D"
        description="A Numpy Tool for Simulating 3D Shadows and Brightness."
        imageLink={BunnyMesh}
        githubLink="https://github.com/RichieRish05/Graphical-Mesh-Shadow-and-Brightness-Calculator"
        animationLength="2s"
      />
    </div>
  );
}
