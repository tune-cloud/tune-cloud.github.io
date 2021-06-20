import {render, screen} from '@testing-library/react';
import SearchPage from './SearchPage';
import { createMemoryHistory } from 'history';
import {Router} from "react-router-dom";

test('renders Search Page', () => {
    render(<SearchPage />);
    const headerElement = screen.getByText(/Tune Cloud/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders search bar', () => {
    window.innerWidth = 1024;
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <SearchPage/>
        </Router>)
    ;
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    searchBar.focus();
    expect(history.location.pathname).toBe('/');
});

test('renders mobile search bar', () => {
   window.innerWidth = 600;
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <SearchPage/>
        </Router>)
    ;
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    searchBar.focus();
    expect(history.location.pathname).toBe('/search');
});
