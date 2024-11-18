import React from 'react';
import PropTypes from 'prop-types';

const RHEL8RegContent = ({ selectedKey }) => {
  return <div>{`RHEL 8 content. Your activation key is ${selectedKey}`}</div>;
};

RHEL8RegContent.propTypes = {
  selectedKey: PropTypes.string,
};

export default RHEL8RegContent;
