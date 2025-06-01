import './technologiesCard.css'

import pytorchLogo from "../../assets/technologies/pytorch.svg";
import jsLogo from "../../assets/technologies/js.png";
import pandasLogo from "../../assets/technologies/pandas.png";
import awsS3Logo from "../../assets/technologies/awss3.png";
import cppLogo from  "../../assets/technologies/cpp.png";
import dynamodbLogo from  "../../assets/technologies/dynamodb.png";
import mongodbLogo from  "../../assets/technologies/mongodb.png";
import pythonLogo from  "../../assets/technologies/python.png";
import reactLogo from  "../../assets/technologies/react.svg";
import sqlLogo from  "../../assets/technologies/sql.png";
import typescriptLogo from  "../../assets/technologies/typescript.png";

function Technology({techName, imageURL}) {

    return (
        <img 
            className="tech-icon" 
            src={imageURL} 
            alt={techName}
            title={techName}
        />
    )
}


export default function TechnologiesCard() {
    
    return (
        <div className="technologies">
            <p className="title-font">Technologies</p>
            <Technology techName={"Pytorch"} imageURL={pytorchLogo}/>
            <Technology techName={"JavaScript"} imageURL={jsLogo}/>
            <Technology techName={"Pandas "} imageURL={pandasLogo}/>
            <Technology techName={"C++"} imageURL={cppLogo}/>
            <Technology techName={"AWS S3"} imageURL={awsS3Logo}/>
            <Technology techName={"AWS DynamoDB"} imageURL={dynamodbLogo}/>
            <Technology techName={"MongoDB"} imageURL={mongodbLogo}/>
            <Technology techName={"Python"} imageURL={pythonLogo}/>
            <Technology techName={"React"} imageURL={reactLogo}/>
            <Technology techName={"SQL"} imageURL={sqlLogo}/>
            <Technology techName={"TypeScript"} imageURL={typescriptLogo}/>
        </div>
    )
}