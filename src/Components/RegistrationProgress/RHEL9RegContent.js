import React from 'react';
import PropTypes from 'prop-types';
import { TextContent, TextList, TextListItem } from '@patternfly/react-core';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import { rhcConnect } from '../../constants';

const RHEL9RegContent = ({ orgId, selectedKey }) => {
  return (
    <TextContent>
      <TextList isPlain>
        <TextListItem>
          <span>Prerequisites:</span>
          <br />
          <span>You must have root privileges.</span>
        </TextListItem>
      </TextList>
      <TextList isPlain>
        <TextListItem>
          <span>Connect to Insights.</span>
          <br />
          <span>This allows Red Hat Insights to provide recommendations.</span>
          <RegAssistCodeBlock
            classname="pf-v5-u-ml-lg"
            code={rhcConnect(selectedKey, orgId)}
          />
        </TextListItem>
      </TextList>
    </TextContent>
  );
};

RHEL9RegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
};

export default RHEL9RegContent;
