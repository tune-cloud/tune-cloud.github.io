import {act, fireEvent, render, screen, waitFor} from "@testing-library/react";
import SearchPage from "./SearchPage";
import ArtistService from "../../services/ArtistService";

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
})
