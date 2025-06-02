import './projectCard.css';
import Tilt from "react-parallax-tilt";

import MoodySoundImage from "../../assets/img/moody-sound.png";

type ProjectCardProps = {
    title: string;
    description: string;
    imageLink: string;
    githubLink: string;
    tags: Array<string>;
};


export default function ProjectCard({title, description, imageLink, githubLink, tags}: ProjectCardProps){

    return (
        <Tilt 
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={450}
            scale={1.05}
            className='project-card'>

                <img className='project-image' src={MoodySoundImage}/>
                <h3 className='project-title'>{title}</h3>
                <p className='project-descr'>{description}</p>

        </Tilt>
    )
}