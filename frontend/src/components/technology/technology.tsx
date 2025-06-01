import './technology.css';

export default function Technology({techName, imageURL}) {

    return (
        <img 
            className="tech-icon" 
            src={imageURL} 
            alt={techName}
            title={techName}
        />
    )
}