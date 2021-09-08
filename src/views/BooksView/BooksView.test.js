import { render } from '@testing-library/react';
import BooksView from './index';

describe('BooksView', () => {
  it('BooksView should render properly', () => {
    const { container } = render(<BooksView />);

    expect(container).toMatchSnapshot();
  });
});
