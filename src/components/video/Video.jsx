import PropTypes from 'prop-types';
import withFormat from "../withformat/withFormat";
import DateTime from '../datetime/DateTime';

const DateTimePretty = withFormat(DateTime,
  (date) => {
    const time = new Date(date).getTime() / 1000;
    const curTime = Date.now() / 1000;
    const dif = curTime - time;
    const days = Math.floor(dif / 86400);
    const hours = Math.floor(dif / 3600);
    const minutes = Math.floor(dif / 60);

    let dateStr = date;
    if (days > 0) {
      dateStr = `${days} дней назад`;
    } else if (hours > 0) {
      dateStr = `${hours} часов назад`;
    } else {
      dateStr = `${minutes} минут назад`;
    }
    return dateStr;
  }
);

export default function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string,
  date: PropTypes.string
}
