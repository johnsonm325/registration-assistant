import React from 'react';
import PropTypes from 'prop-types';

const ThirdStep = ({ OperatingSystemComponent, selectedKey }) => {
  return (
    <React.Fragment>
      {<OperatingSystemComponent selectedKey={selectedKey} />}
    </React.Fragment>
  );
};

ThirdStep.propTypes = {
  OperatingSystemComponent: PropTypes.node,
  selectedKey: PropTypes.string,
};

export default ThirdStep;
