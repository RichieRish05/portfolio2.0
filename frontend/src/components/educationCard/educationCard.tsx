import './educationCard.css'
import Education from '../education/education'

export default function EducationCard() {

    return (
        <div className="education">
            <p className="title-font">Education</p>
                <Education 
                    institutionName={"University of California, Irvine"}
                    startDate={"2024"}
                    endDate={"Current"}
                    degreePursued={"Bachelors in Computer Science"}
                />
                {/* <Education 
                        institutionName={"James Logan High School"}
                        startDate={"2020"}
                        endDate={"2024"}
                        degreePursued={"High School Diploma"}
                   /> */}
        </div>
    )
}