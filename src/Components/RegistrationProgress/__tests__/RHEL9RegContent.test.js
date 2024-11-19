import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import RHEL9RegContent from '../RHEL9RegContent';

describe('RHEL9RegContent', () => {
  it('display activation key', async () => {
    render(
      <Router>
        <RHEL9RegContent orgId="98765432" selectedKey="12345678" />
      </Router>
    );

    expect(
      screen.getByText(
        /rhc connect --activation-key 12345678 --organization 98765432/i
      )
    ).toBeVisible();
  });
});
