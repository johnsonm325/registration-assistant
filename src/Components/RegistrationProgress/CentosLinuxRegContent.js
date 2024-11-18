import React from 'react';
import PropTypes from 'prop-types';

const CentosLinuxRegContent = ({ selectedKey }) => {
  return (
    <div>{`CentOS Linux content. Your activation key is ${selectedKey}`}</div>
  );
};

CentosLinuxRegContent.propTypes = {
  selectedKey: PropTypes.string,
};

export default CentosLinuxRegContent;
