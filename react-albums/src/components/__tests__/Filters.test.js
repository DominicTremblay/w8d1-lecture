import Filters from '../components/Filters';
import { render } from '@testing-library/react';

describe('Filters', () => {
  it('renders without crashing', () => {
    render(<Filters />);
  });
});
