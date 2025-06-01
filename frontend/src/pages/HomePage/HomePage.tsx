import "./HomePage.css"

import AboutMe from "../../homePageComponents/aboutMeCard/aboutMe";
import JobDescription from "../../homePageComponents/jobDescriptionCard/jobDescription";
import TechnologiesCard from "../../homePageComponents/technologiesCard/technologiesCard";
import HeroCard from "../../homePageComponents/heroCard/heroCard";
import EducationCard from "../../homePageComponents/educationCard/educationCard";
import HeadshotCard from "../../homePageComponents/headshotCard/headshotCard";
import QuoteCard from "../../homePageComponents/quoteCard/quoteCard";

function PhoneHeadshot() {
    return (
        <img className="hide-headshot headshot" src="Headshot.JPG"/>
    )
}

export default function HomePage() {



    return (
        <div className="homepage-wrapper">
            <AboutMe/>
            <PhoneHeadshot/>
            <JobDescription/>
            <TechnologiesCard/>
            <HeroCard/>
            <EducationCard/>
            <HeadshotCard/>
            <QuoteCard/>
        </div>




    )
}