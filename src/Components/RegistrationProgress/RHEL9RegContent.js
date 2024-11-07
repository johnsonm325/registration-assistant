import React from 'react';
import PropTypes from 'prop-types';

const RHEL9RegContent = ({ selectedKey }) => {
  return <div>{`RHEL 9 content. Your activation key is ${selectedKey}`}</div>;
};

RHEL9RegContent.propTypes = {
  selectedKey: PropTypes.string,
};

export default RHEL9RegContent;
