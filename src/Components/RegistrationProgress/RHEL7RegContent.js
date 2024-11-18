import React from 'react';
import PropTypes from 'prop-types';

const RHEL7RegContent = ({ selectedKey }) => {
  return <div>{`RHEL 7 content. Your activation key is ${selectedKey}`}</div>;
};

RHEL7RegContent.propTypes = {
  selectedKey: PropTypes.string,
};

export default RHEL7RegContent;
