import PropTypes from 'prop-types';

const withFormat = (WrappedComp, formatFunc) => {
  const WithFormat = (props) => {
    const dateStr = formatFunc(props.date);
    return <WrappedComp {...props} date={dateStr} />
  }

  WithFormat.propTypes = {
    date: PropTypes.string
  }

  WithFormat.displayName = `withFormat(${WrappedComp.displayName || WrappedComp.name})`;
  return WithFormat;
}

export default withFormat;
