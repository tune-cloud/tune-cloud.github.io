import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';
import SearchPage from './SearchPage';
import ArtistService from '../../services/ArtistService';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

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

test('search for artist', ()=>{
    const artistService = new ArtistService();
    artistService.find = jest.fn(()=>Promise.resolve(
        {
            artists: [
                {
                    id: 'id',
                    name: 'name'
                }
            ]
        }
        )
    );

    render(<SearchPage artistService={artistService} />);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    act(() => {
        fireEvent.keyDown(searchBar, {key: 'Enter', code: 'Enter'});
    });

    waitFor(()=>{
        const result = screen.getByText('name');
        expect(result).toBeInTheDocument();
    });
});

test('navigate to artist page', ()=>{
    const history = createMemoryHistory();
    const artistService = new ArtistService();
    artistService.find = jest.fn(()=>Promise.resolve(
        {
            artists: [
                {
                    id: 'id',
                    name: 'name'
                }
            ]
        }
        )
    );

    render(
        <Router history={history}>
            <SearchPage artistService={artistService} />
        </Router>
        );
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    act(() => {
        fireEvent.keyDown(searchBar, {key: 'Enter', code: 'Enter'});
    });

    let result;
    waitFor(()=>{
        result = screen.getByText('name');
        expect(result).toBeInTheDocument();
    });

    act(() => {
        fireEvent.keyDown(searchBar, {key: 'Enter', code: 'Enter'});
    });

    waitFor(()=>{
        expect(history.location.pathname).toBe('/artist/id');
    });
})
