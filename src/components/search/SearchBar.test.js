import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';
import ArtistService from '../../services/ArtistService';
import SearchBar from './SearchBar';

jest.setTimeout(10000);

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));


test('search for artist with mouse click', async ()=>{

    render(<SearchBar artistService={mockArtistService()} />);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    act(() => {
        fireEvent.keyDown(searchBar, {key: 'Enter', code: 'Enter'});
    });

    await waitFor(()=>{
        const result = screen.getByText('name');
        expect(result).toBeInTheDocument();
    });
});

test('navigate to artist page using mouse', async ()=>{
    render(<SearchBar artistService={mockArtistService()} />);

    await searchAndFireEventOnResult((result)=>{
        fireEvent.click(result);
    });

    await waitFor(()=>{
        expect(mockedUsedNavigate).toBeCalledWith('/artist?artistId=id&artist=name');
    });
});


test('only Enter key navigates to artist page', async ()=>{
    render(<SearchBar artistService={mockArtistService()} />);
    await searchAndFireEventOnResult((result) => {
        fireEvent.keyDown(result, {key: 'a', code: 'a'});
    })

    await waitFor(()=>{
        expect(mockedUsedNavigate).not.toBeCalled();
    });
});

test('error searching for artist', async ()=>{
    const artistService = new ArtistService();
    artistService.find = jest.fn(()=>Promise.reject('bad'));
    const spy = jest.spyOn(console, 'error');

    render(<SearchBar artistService={artistService} />);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    act(() => {
        fireEvent.keyDown(searchBar, {key: 'Enter', code: 'Enter'});
    });
    await waitFor(()=>{
        expect(spy).toHaveBeenCalled();
    });

    expect(mockedUsedNavigate).toBeCalledWith('/error');
});

const mockArtistService= () =>{
    const artistService = new ArtistService();
    artistService.find = jest.fn(()=>Promise.resolve([
            {
                id: 'id',
                name: 'name'
            }
        ]

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
