import { render, unmountComponentAtNode } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import BooksView from './index';

describe('BooksView', () => {
  it('BooksView should render properly', () => {
    const { container } = render(<BooksView />);

    expect(container).toMatchSnapshot();
  });
});

//////////////////////////////////////

// let container = null;
// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it('renders book data', async () => {
//   const fakeBooks = {
//     id: '1be8799b-b9f9-4eed-a1e9-99cf587a68df',
//     cover: 'https://lorempixel.com/640/480/?99cf587a68df',
//     title: 'Le père Goriot',
//     author: 'Honoré de Balzac',
//   };
//   jest.spyOn(global, 'fetch').mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeBooks),
//     }),
//   );

//   await act(async () => {
//     render(<BooksView id="123" />, container);
//   });

//   expect(container.textContent).toBe(fakeBooks.id);
//   expect(container.textContent).toBe(fakeBooks.cover);
//   expect(container.textContent).toBe(fakeBooks.title);
//   expect(container.textContent).toBe(fakeBooks.author);

//   global.fetch.mockRestore();
// });
