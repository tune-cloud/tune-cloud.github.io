import {render, screen} from '@testing-library/react';
import SearchPage from './SearchPage';

test('renders Search Page', () => {
    render(<SearchPage />);
    const headerElement = screen.getByText(/Tune Cloud/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders search bar', () => {
    render(<SearchPage />);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    expect(searchBar).toBeInTheDocument();
});
