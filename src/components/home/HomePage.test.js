import {render, screen} from '@testing-library/react';
import HomePage from './HomePage';
import { createMemoryHistory } from 'history';
import {Router} from "react-router-dom";

test('renders Home Page', () => {
    render(<HomePage />);
    const headerElement = screen.getByAltText(/Tune Cloud/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders search bar', () => {
    window.innerWidth = 1024;
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <HomePage/>
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
            <HomePage/>
        </Router>)
    ;
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    searchBar.focus();
    expect(history.location.pathname).toBe('/search');
});
