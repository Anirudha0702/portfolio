import EducationData from './EducationData'
import TimelineItem from './Timeline'
import "./education.css"
const Education = () => {
    return (
        <>
        <h1 className='edu'>Education</h1>
        <hr className='line'/>
        <div className="timeline-container">
            {
            EducationData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))
            }
        </div>
        </>
  )
}

export default Education