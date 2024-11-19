import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import RHEL7RegContent from '../RHEL7RegContent';

describe('RHEL7RegContent', () => {
  it('should display activation key', async () => {
    render(
      <Router>
        <RHEL7RegContent orgId="98765432" selectedKey="12345678" />
      </Router>
    );

    expect(
      screen.getByText(
        /subscription-manager register --activationkey 12345678 --org 98765432/i
      )
    ).toBeVisible();
  });
});
