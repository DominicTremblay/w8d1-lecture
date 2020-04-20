import React from 'react';
import '@testing-library/jest-dom';
import { render, prettyDOM, fireEvent, waitFor } from '@testing-library/react';
import LiveSearch from '../../components/LiveSearch';

describe('LiveSearch', () => {
  it('should render without crashing', () => {
    const { debug } = render(<LiveSearch />);

    // debug();
  });


  it('renders with the data for the artist typed in', async () => {
    // render the component

    const { debug, getByPlaceholderText, getByText } = render(<LiveSearch />);

    // type in the box an artist

    const searchElement = () => getByPlaceholderText(/search artists/i);

    // console.log(prettyDOM(searchElement));
    fireEvent.change(searchElement, { target: { value: 'Riles' } })

    // target the result element

    const element = await waitFor(() => getByText('Vanity Plus Mind'));

    console.log(prettyDOM(element));

    // check that the title is present for that artist


  });

});
