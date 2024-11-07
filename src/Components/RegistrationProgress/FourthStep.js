import React from 'react';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import InsightsLink from '@redhat-cloud-services/frontend-components/InsightsLink';

const FourthStep = () => {
  return (
    <React.Fragment>
      <TextContent>
        <Text component={TextVariants.p}>
          Navigate to{' '}
          <InsightsLink to="/" app="inventory">
            Inventory page
          </InsightsLink>
        </Text>
        <Text component={TextVariants.p}>
          Your system could take a couple of minutes to appear.
        </Text>
      </TextContent>
    </React.Fragment>
  );
};

export default FourthStep;
