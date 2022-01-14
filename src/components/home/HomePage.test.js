import {render, screen} from '@testing-library/react';
import HomePage from './HomePage';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test('renders Home Page', () => {
    render(<HomePage />);
    const headerElement = screen.getByAltText(/Tune Cloud/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders search bar', () => {
    window.innerWidth = 1024;

    render(<HomePage/>);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    searchBar.focus();
    const mobileSearchPage = '/search';
    expect(mockedUsedNavigate).not.toBeCalledWith(mobileSearchPage);
});

test('renders mobile search bar', () => {
   window.innerWidth = 600;
    render(<HomePage/>);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    searchBar.focus();
    expect(mockedUsedNavigate).toBeCalledWith('/search');
});
