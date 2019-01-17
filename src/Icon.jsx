import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
      fill: props.color
    }
  };

  const icon =
    props.icon.format === 'data' ? (
      <path d={props.icon.path} />
    ) : (
      props.icon.markup
    );

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox={props.icon.viewBox}
      className={props.className}
    >
      {icon}
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.shape({
    format: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    path: PropTypes.string,
    markup: PropTypes.element
  }).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  size: 16
};

export default Icon;
