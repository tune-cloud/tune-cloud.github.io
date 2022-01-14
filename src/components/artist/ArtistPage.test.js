import SongService from '../../services/SongService';
import ArtistPage from './ArtistPage';
import {act, render, screen, waitFor} from '@testing-library/react';

let songService;
const mockedUsedNavigate = jest.fn();
const mockUseSearchParams = {
    get: ()=> jest.fn()
}
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useSearchParams: () => [mockUseSearchParams]
}));

beforeAll(()=>{
    songService = new SongService();
    jest.mock('react-wordcloud');
});

test('renders word cloud with artist songs', async ()=>{
   songService.getSongs = jest.fn(()=>{
       return Promise.resolve([{
           title: 'song 1'
       }, {
           title: 'song 2'
       }]);
   });


   render(<ArtistPage songService={songService} />);
   const wordCloud = screen.getByTestId('word-cloud');
   expect(wordCloud).toBeInTheDocument();
});

test('logs when error and redirects to error page', async ()=>{
    songService.getSongs = jest.fn(()=>Promise.reject('bad'));
    const spy = jest.spyOn(console, 'error');

    render(<ArtistPage songService={songService}/>);

    await waitFor(()=>{
        expect(spy).toHaveBeenCalled();
    });

    expect(mockedUsedNavigate).toBeCalledWith('/error');
});

test('resize window resizes word cloud', async () => {
    songService.getSongs = jest.fn(()=>{
        return Promise.resolve([{
            title: 'song 1'
        }, {
            title: 'song 2'
        }]);
    });
    render(<ArtistPage songService={songService} />);
    act(()=> {
        window.innerWidth = 400;
        window.innerHeight = 400;
        window.dispatchEvent(new Event('resize'));
    });

    const wordCloud = screen.getByTestId('word-cloud-container');
    await waitFor(()=>{
        expect(wordCloud.style.height).toBe('300px');
    });
});
