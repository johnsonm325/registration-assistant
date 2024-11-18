import React, { useState } from 'react';
import { ProgressStep, ProgressStepper } from '@patternfly/react-core';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import RegAssistantFooter from './RegAssistantFooter';

const RegProgessStepper = () => {
  const [step, setStep] = useState(0);
  const [selectedKey, setSelectedKey] = useState('Select activation key');
  const [operatingSystem, setOperatingSystem] = useState();

  const setVariant = (value) => {
    if (step === value) {
      return 'info';
    } else if (step > value) {
      return 'success';
    } else if (step < value) {
      return 'default';
    }
  };

  return (
    <React.Fragment>
      <ProgressStepper isVertical>
        <ProgressStep
          isCurrent={step === 0}
          description={
            <FirstStep
              selectedKey={selectedKey}
              setSelectedKey={setSelectedKey}
              setStep={setStep}
              step={step}
            />
          }
          variant={setVariant(0)}
        >
          Select activation key
        </ProgressStep>
        <ProgressStep
          isCurrent={step === 1}
          variant={setVariant(1)}
          description={
            step >= 1 && (
              <SecondStep
                operatingSystem={operatingSystem}
                setOperatingSystem={setOperatingSystem}
                setStep={setStep}
              />
            )
          }
        >
          {step >= 1 && 'Select operating system'}
        </ProgressStep>
        <ProgressStep
          isCurrent={step === 2}
          variant={setVariant(2)}
          description={
            step >= 2 && (
              <ThirdStep
                OperatingSystemComponent={operatingSystem.content}
                selectedKey={selectedKey}
              />
            )
          }
        >
          {step >= 2 && `Register ${operatingSystem.name}`}
        </ProgressStep>
        <ProgressStep
          isCurrent={step === 3}
          variant={setVariant(3)}
          description={
            step >= 2 && <FourthStep setStep={setStep} step={step} />
          }
        >
          {step >= 2 && 'View registered system'}
        </ProgressStep>
      </ProgressStepper>
      {step >= 2 && <RegAssistantFooter />}
    </React.Fragment>
  );
};

export default RegProgessStepper;
