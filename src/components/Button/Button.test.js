import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Button from './Button';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a value', () => {
  act(() => {
    render(<Button />, container);
  });
  expect(container.textContent).toBe('');

  act(() => {
    render(<Button value="Send" />, container);
  });
  expect(container.textContent).toBe('Send');

  act(() => {
    render(<Button value="Back" />, container);
  });
  expect(container.textContent).toBe('Back');
});
