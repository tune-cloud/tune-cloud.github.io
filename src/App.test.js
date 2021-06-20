import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const headerElement = screen.getByAltText(/Tune Cloud/i);
  expect(headerElement).toBeInTheDocument();
});
