import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const headerElement = screen.getByText(/Tune Cloud/i);
  expect(headerElement).toBeInTheDocument();
});
