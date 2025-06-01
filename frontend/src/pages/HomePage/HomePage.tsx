import React, { useRef, useEffect, useState } from "react";
import "./HomePage.css"



import AboutMe from "../../components/aboutMeCard/aboutMe";
import JobDescription from "../../components/jobDescriptionCard/jobDescription";
import TechnologiesCard from "../../components/technologiesCard/technologiesCard";
import HeroCard from "../../components/heroCard/heroCard";
import EducationCard from "../../components/educationCard/educationCard";
import HeadshotCard from "../../components/headshotCard/headshotCard";
import QuoteCard from "../../components/quoteCard/quoteCard";

export default function HomePage() {



    return (
        <div className="homepage-wrapper">
            <AboutMe/>
            <JobDescription/>
            <TechnologiesCard/>
            <HeroCard/>
            <EducationCard/>
            <HeadshotCard/>
            <QuoteCard/>
        </div>




    )
}