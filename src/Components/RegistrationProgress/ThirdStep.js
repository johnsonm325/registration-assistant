import React from 'react';
import PropTypes from 'prop-types';

const ThirdStep = ({ OperatingSystemComponent, orgId, selectedKey }) => {
  return (
    <React.Fragment>
      {<OperatingSystemComponent orgId={orgId} selectedKey={selectedKey} />}
    </React.Fragment>
  );
};

ThirdStep.propTypes = {
  OperatingSystemComponent: PropTypes.node,
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
};

export default ThirdStep;
