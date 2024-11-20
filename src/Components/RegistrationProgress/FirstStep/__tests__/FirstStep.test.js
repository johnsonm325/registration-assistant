import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import FirstStep from '../FirstStep';
import {
  autoGeneratedKey,
  mockFetchedKeys,
} from '../../__tests__/content.fixtures';
import userEvent from '@testing-library/user-event';
import { createActivationKey } from '../../../../../api';

jest.mock(
  '@redhat-cloud-services/frontend-components-utilities/interceptors',
  () => ({
    __esModule: true,
    useAxiosWithPlatformInterceptors: () => require('axios'),
  })
);

jest.mock('../../../../../api');

describe('FirstStep', () => {
  const handleFetchKeys = jest.fn();
  const setIsModalOpen = jest.fn();
  const setSelectedKey = jest.fn();
  const setStep = jest.fn();

  it('should display activation key', async () => {
    render(
      <Router>
        <FirstStep
          handleFetchKeys={handleFetchKeys}
          keys={mockFetchedKeys}
          selectedKey={mockFetchedKeys[0]}
          setIsModalOpen={setIsModalOpen}
          setSelectedKey={setSelectedKey}
          setStep={setStep}
          step={0}
        />
      </Router>
    );

    expect(
      screen.getByRole('button', {
        name: /activation-key-1/i,
      })
    ).toBeVisible();

    expect(
      screen.queryAllByRole('button', {
        name: /activation-key-2/i,
      })
    ).toHaveLength(0);

    await waitFor(() =>
      userEvent.click(
        screen.getByRole('button', {
          name: /show selected activation key/i,
        })
      )
    );

    const region = screen.getByRole('region', {
      name: /show selected activation key/i,
    });

    expect(within(region).getByText(/activation-key-1/i)).toBeVisible();

    expect(screen.getByText(/8\.8/i)).toBeVisible();
  });

  it('should render activation key dropdown', async () => {
    render(
      <Router>
        <FirstStep
          handleFetchKeys={handleFetchKeys}
          keys={mockFetchedKeys}
          selectedKey={mockFetchedKeys[0]}
          setIsModalOpen={setIsModalOpen}
          setSelectedKey={setSelectedKey}
          setStep={setStep}
          step={0}
        />
      </Router>
    );

    expect(screen.queryAllByText(/activation-key-2/i)).toHaveLength(0);

    await waitFor(() =>
      userEvent.click(
        screen.getByRole('button', {
          name: /activation-key-1/i,
        })
      )
    );

    expect(
      screen.getByRole('option', {
        name: /activation-key-1/i,
      })
    ).toBeVisible();

    expect(
      screen.getByRole('option', {
        name: /activation-key-2/i,
      })
    ).toBeVisible();
  });

  it('should handle activation key select', async () => {
    render(
      <Router>
        <FirstStep
          handleFetchKeys={handleFetchKeys}
          keys={mockFetchedKeys}
          selectedKey={mockFetchedKeys[0]}
          setIsModalOpen={setIsModalOpen}
          setSelectedKey={setSelectedKey}
          setStep={setStep}
          step={0}
        />
      </Router>
    );

    await waitFor(() =>
      userEvent.click(
        screen.getByRole('button', {
          name: /activation-key-1/i,
        })
      )
    );

    await waitFor(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: /activation-key-2/i,
        })
      )
    );

    expect(setSelectedKey).toHaveBeenCalledWith(mockFetchedKeys[1]);
    expect(setStep).toHaveBeenCalledWith(1);
  });

  it('should handle activation key select with newly created key', async () => {
    render(
      <Router>
        <FirstStep
          createdKeyName={mockFetchedKeys[1].name}
          handleFetchKeys={handleFetchKeys}
          keys={mockFetchedKeys}
          selectedKey={mockFetchedKeys[0]}
          setIsModalOpen={setIsModalOpen}
          setSelectedKey={setSelectedKey}
          setStep={setStep}
          step={0}
        />
      </Router>
    );

    expect(setSelectedKey).toHaveBeenCalledWith(mockFetchedKeys[1]);
    expect(setStep).toHaveBeenCalledWith(1);
  });

  it('should handle create activation key', async () => {
    render(
      <Router>
        <FirstStep
          handleFetchKeys={handleFetchKeys}
          keys={mockFetchedKeys}
          selectedKey={mockFetchedKeys[0]}
          setIsModalOpen={setIsModalOpen}
          setSelectedKey={setSelectedKey}
          setStep={setStep}
          step={0}
        />
      </Router>
    );

    await waitFor(() =>
      userEvent.click(
        screen.getByRole('button', {
          name: /activation-key-1/i,
        })
      )
    );

    await waitFor(() =>
      userEvent.click(
        screen.getByRole('button', {
          name: /create activation key/i,
        })
      )
    );

    expect(setIsModalOpen).toHaveBeenCalledWith(true);
  });

  it.skip('should handle auto-generate activation key', async () => {
    createActivationKey.mockImplementation(async () => {
      return { body: autoGeneratedKey };
    });

    render(
      <Router>
        <FirstStep
          handleFetchKeys={handleFetchKeys}
          keys={mockFetchedKeys}
          selectedKey={mockFetchedKeys[0]}
          setIsModalOpen={setIsModalOpen}
          setSelectedKey={setSelectedKey}
          setStep={setStep}
          step={0}
        />
      </Router>
    );

    await waitFor(() =>
      userEvent.click(
        screen.getByRole('button', {
          name: /activation-key-1/i,
        })
      )
    );

    await waitFor(() =>
      userEvent.click(
        screen.getByRole('button', {
          name: /auto-generate activation key/i,
        })
      )
    );

    screen.logTestingPlaygroundURL();

    expect(setSelectedKey).toHaveBeenCalledWith(autoGeneratedKey);
    expect(setStep).toHaveBeenCalledWith(1);
  });
});
