import React from 'react';
import PropTypes from 'prop-types';
import {
  CodeBlock,
  CodeBlockAction,
  CodeBlockCode,
  ClipboardCopyButton,
} from '@patternfly/react-core';

const RegAssistCodeBlock = ({ code }) => {
  const [copied, setCopied] = React.useState(false);

  const clipboardCopyFunc = (event, text) => {
    navigator.clipboard.writeText(text.toString());
  };
  const onClick = (event, text) => {
    clipboardCopyFunc(event, text);
    setCopied(true);
  };

  const actions = (
    <>
      <CodeBlockAction>
        <ClipboardCopyButton
          id="activation-keys-copy-button"
          textId="code-content"
          aria-label="Copy to clipboard"
          onClick={(e) => onClick(e, code)}
          exitDelay={copied ? 1500 : 600}
          maxWidth="110px"
          variant="plain"
          onTooltipHidden={() => setCopied(false)}
        >
          {copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}
        </ClipboardCopyButton>
      </CodeBlockAction>
    </>
  );

  return (
    <CodeBlock style={{ marginBottom: '24px' }} actions={actions}>
      {code.map((line, idx) => (
        <CodeBlockCode key={`code-block-line-${idx}`}>{line}</CodeBlockCode>
      ))}
    </CodeBlock>
  );
};

RegAssistCodeBlock.propTypes = {
  code: PropTypes.array,
};

export default RegAssistCodeBlock;
