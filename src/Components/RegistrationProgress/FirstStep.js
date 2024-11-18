import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  MenuToggle,
  Select,
  SelectList,
  SelectOption,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { InsightsLink } from '@redhat-cloud-services/frontend-components/InsightsLink';

const FirstStep = ({ selectedKey, setSelectedKey, setStep, step }) => {
  const [isOpen, setOpen] = useState(false);

  const handleActivationKeySelect = (optionName) => {
    setSelectedKey(optionName);
    step === 0 && setStep(1);
    setOpen(false);
  };

  const toggle = (toggleRef) => (
    <MenuToggle
      ref={toggleRef}
      onClick={() => setOpen(!isOpen)}
      isExpanded={isOpen}
      style={{
        width: 'auto',
        marginTop: '8px',
        marginBottom: '8px',
      }}
    >
      {selectedKey}
    </MenuToggle>
  );

  return (
    <React.Fragment>
      <TextContent>
        <Text component={TextVariants.p}>
          You need an{' '}
          <Text
            component={TextVariants.a}
            href="https://docs.redhat.com/en/documentation/subscription_central/1-latest/html/getting_started_with_activation_keys_on_the_hybrid_cloud_console/index"
            rel="noopener noreferrer"
            target="_blank"
          >
            activation key
            <Icon className="pf-v5-u-ml-xs">
              <ExternalLinkAltIcon />
            </Icon>
          </Text>{' '}
          to register. An activation key is a pre-shared token that enables
          authorized users to register and auto-configure systems.
        </Text>
      </TextContent>
      <div
        style={{
          fontWeight: 'var(--pf-v5-global--FontWeight--bold)',
          color: '#151515',
          marginTop: '16px',
        }}
        data-testid="select-activation-key"
      >
        Activation key <span style={{ color: '#C9190B' }}>*</span>
      </div>
      <Select
        isOpen={isOpen}
        onSelect={(_, optionName) => handleActivationKeySelect(optionName)}
        selected={selectedKey}
        toggle={toggle}
      >
        <SelectList>
          <SelectOption width="100%" value="activation-key-1">
            activation-key-1
          </SelectOption>
          <SelectOption width="100%" value="activation-key-2">
            activation-key-2
          </SelectOption>
        </SelectList>
      </Select>
      <TextContent>
        <Text component={TextVariants.p}>
          Manage activation keys on the{' '}
          <InsightsLink to="/activation-keys" app="connector">
            Activation keys page
          </InsightsLink>
        </Text>
      </TextContent>
    </React.Fragment>
  );
};

FirstStep.propTypes = {
  selectedKey: PropTypes.string,
  setSelectedKey: PropTypes.func,
  setStep: PropTypes.func,
  step: PropTypes.number,
};

export default FirstStep;
