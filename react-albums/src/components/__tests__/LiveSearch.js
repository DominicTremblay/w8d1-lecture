import React from 'react';
import LiveSearch from '../../components/LiveSearch';
import { render, prettyDOM, fireEvent, screen, waitFor, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import data from './data.json';
import axios from 'axios';

jest.mock('axios');

describe('LiveSearch', () => {
  it('renders without crashing', () => {
    const { debug } = render(<LiveSearch />);

    // debug();
  });

  it('gets the data for artists and renders', async () => {
    const { debug, getByPlaceholderText, getByText, findByText } = render(<LiveSearch />);

    const search = getByPlaceholderText(/search artists/i);

    axios.get.mockResolvedValue({
      data
    })

    fireEvent.change(search, { target: { value: 'Riles' } })

    const element = await waitFor(() => getByText('Vanity Plus Mind'));

    expect(element).toBeVisible();

  });
});
