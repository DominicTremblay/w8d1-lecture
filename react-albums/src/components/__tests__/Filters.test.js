import React from 'react';
import Filters from '../../components/Filters';
import { render, prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Filters', () => {
  it('renders without crashing', () => {
    const {debug} = render(<Filters />);

    // debug();
  });

  it('renders with a default filter', () => {
    const {debug, getByLabelText} = render(<Filters filters={{Single: true}} />);

    const element = getByLabelText('Single');

    expect(element).toHaveAttribute('checked');
  });
});
