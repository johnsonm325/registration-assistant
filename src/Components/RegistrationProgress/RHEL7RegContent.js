import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Text,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
  TextVariants,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import RegAssistCodeBlock from '../RegAssistCodeBlock/RegAssistCodeBlock';
import {
  insightsClientRegister,
  rhel7LifecycleSupport,
  subManagerRegister,
  yumInstallInsightsClient,
} from '../../constants';

const RHEL7RegContent = ({ orgId, selectedKey }) => {
  return (
    <TextContent>
      <Text component={TextVariants.p}>
        {`RHEL 7's maintenance support phase has ended.`}{' '}
        <Text
          component={TextVariants.a}
          href={rhel7LifecycleSupport}
          rel="noopener noreferrer"
          target="_blank"
        >
          Red Hat Enterprise Linux 7 Extended Lifecycle Support Maintenance
          Policy
          <Icon className="pf-v5-u-ml-xs">
            <ExternalLinkAltIcon />
          </Icon>
        </Text>
      </Text>
      <TextList isPlain>
        <TextListItem>
          <span>Prerequisites:</span>
          <br />
          <span>You must have root privileges.</span>
        </TextListItem>
      </TextList>
      <TextList component={TextListVariants.ol}>
        <TextListItem>
          <span>Connect your system to the subscription manager</span>
          <br />
          <span>This provides a basic level of connectivity in Insights.</span>
          <RegAssistCodeBlock code={subManagerRegister(selectedKey, orgId)} />
        </TextListItem>
        <TextListItem>
          Confirm Insights client is installed.
          <RegAssistCodeBlock code={yumInstallInsightsClient} />
        </TextListItem>
        <TextListItem>
          <span>Connect to Insights.</span>
          <br />
          <span>This allows Red Hat Insights to provide recommendations.</span>
          <RegAssistCodeBlock code={insightsClientRegister} />
        </TextListItem>
      </TextList>
    </TextContent>
  );
};

RHEL7RegContent.propTypes = {
  orgId: PropTypes.string,
  selectedKey: PropTypes.string,
};

export default RHEL7RegContent;
