import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';
import SearchPage from './SearchPage';
import ArtistService from "../../services/ArtistService";
import {Router} from "react-router-dom";
import { createMemoryHistory } from 'history';

jest.setTimeout(10000);
let history;

beforeEach(()=>{
    history = createMemoryHistory();
})

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

test('search for artist with mouse click', ()=>{

    render(<SearchPage artistService={mockArtistService()} />);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    act(() => {
        fireEvent.keyDown(searchBar, {key: 'Enter', code: 'Enter'});
    });

    waitFor(()=>{
        const result = screen.getByText('name');
        expect(result).toBeInTheDocument();
    });
});

test('auto serch for artist', ()=>{

    render(<SearchPage artistService={mockArtistService()} />);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    act(() => {
        fireEvent.change(searchBar, { target: { value: 'name' } })
    });

    waitFor(()=>{
        const result = screen.getByText('name');
        expect(result).toBeInTheDocument();
    });
});

test('navigate to artist page using mouse', async ()=>{
    render(
        <Router history={history}>
            <SearchPage artistService={mockArtistService()} />
        </Router>
    );

    await searchAndFireEventOnResult((result)=>{
        fireEvent.click(result);
    });

    await waitFor(()=>{
        expect(history.location.pathname).toBe('/artist/id');
    });
});


test('only Enter key navigates to artist page', async ()=>{
    render(
        <Router history={history}>
            <SearchPage artistService={mockArtistService()} />
        </Router>
    );
    await searchAndFireEventOnResult((result) => {
        fireEvent.keyDown(result, {key: 'a', code: 'a'});
    })

    await waitFor(()=>{
        expect(history.location.pathname).toBe('/');
    });
});

test('error searching for artist', ()=>{
    const artistService = new ArtistService();
    artistService.find = jest.fn(()=>Promise.reject('bad'));
    console.error = jest.fn();

    render(<SearchPage artistService={artistService} />);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    act(() => {
        fireEvent.keyDown(searchBar, {key: 'Enter', code: 'Enter'});
    });
    waitFor(()=>{
        expect(console.error).toHaveBeenCalled();
    });
});

const mockArtistService= () =>{
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

    return artistService;
}

const searchAndFireEventOnResult = async (event) => {
    const searchBar = await screen.getByPlaceholderText('Search for an artist');

    await act(async () => {
        fireEvent.keyDown(searchBar, {key: 'Enter', code: 'Enter'});
        await waitFor(async ()=>{
            const result = await screen.getByText('name');
            expect(result).toBeInTheDocument();
            await event(result);
        });
    });
}
