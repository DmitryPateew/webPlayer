import { render, screen } from '@testing-library/react';
import TestApp from './TestApp';

test('renders learn react link', () => {
  render(<TestApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
