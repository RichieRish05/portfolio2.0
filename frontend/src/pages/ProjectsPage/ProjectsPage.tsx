import "./ProjectsPage.css";

import ProjectCard from "../../projectsPageComponents/projectCard/projectCard";

import MoodySoundImage from "../../assets/img/moody-sound.png";
import ChessImage from "../../assets/img/chess.png";
import ChatToMeImage from "../../assets/img/chat-to-me.png";

export default function ProjectsPage() {
  return (
    <div className="projects-container">
      <ProjectCard
        title="MoodySound"
        description="A Custom PyTorch Neural Network to Detect Mood From Sound."
        imageLink={MoodySoundImage}
        githubLink="https://github.com/RichieRish05/MoodySound2"
        tags={[]}
      />
      <ProjectCard
        title="Chess"
        description="A Multiplayer Chess Game Built With Custom Algorithms."
        imageLink={ChessImage}
        githubLink="https://github.com/RichieRish05/GameOfChess"
        tags={[]}
      />
      <ProjectCard
        title="ChatToMe"
        description="A RAG Chatbot Tuned to My Professional Experiences."
        imageLink={ChatToMeImage}
        githubLink="https://github.com/RichieRish05/ChatToMe"
        tags={[]}
      />
    </div>
  );
}
