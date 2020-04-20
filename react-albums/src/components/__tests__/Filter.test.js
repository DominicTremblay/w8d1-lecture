import React from 'react';
import { render, prettyDOM } from '@testing-library/react';
import Filters from '../../components/Filters';
import '@testing-library/jest-dom';

describe('Filters', () => {
  it('should render without crashing', () => {
    const { debug } = render(<Filters />);

    // debug();
  });

  it('should render with a default filter', () => {
    const { debug, getByLabelText } = render(
      <Filters filters={{ Single: true }} />
    );

    // debug();

    const element = getByLabelText('Single');

    // console.log(prettyDOM(element));

    expect(element).toHaveAttribute('checked');
  });
});
