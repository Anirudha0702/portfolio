import PropTypes from 'prop-types';
import "./timeLine.css";
const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h2>{`${data.board} ${data.date} `}</h2> 
            <h3>{data.institute}</h3>

            <span className='tag'>Grade: {data.grade}</span>
            <p>{data.text}</p>
            <span className="circle" />
        </div>
    </div>
);
 TimelineItem.propTypes = {
    data: PropTypes.object.isRequired
 }
export default TimelineItem;