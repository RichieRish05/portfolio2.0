import './heroCard.css'
import githubLogo from "../../assets/img/github-mark.png";

export default function HeroCard() {
    return (
        <div className="hero-container">
        <p className="hero-title">Rishi Murumkar</p>
        <a href="https://github.com/RichieRish05" target="_blank" rel="noopener noreferrer">
            <img className="github-logo" src={githubLogo} alt="GitHub Logo" />
        </a>
        </div>
    )
}