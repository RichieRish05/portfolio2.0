import './education.css'

export default function Education({institutionName, startDate, endDate, degreePursued}) {

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