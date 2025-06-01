import './educationCard.css'


type EducationProps = {
    institutionName: string;
    startDate: string;
    endDate: string;
    degreePursued: string;
  };
  
function Education({ institutionName, startDate, endDate, degreePursued }: EducationProps) {

    return (
        <div>
            <div className="education-header">
                <p>{institutionName}</p>
                <p>{startDate} - {endDate}</p>
            </div>
            <p className='education-content'>{degreePursued}</p>
        </div>
    )

}

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