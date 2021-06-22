import SongService from '../../services/SongService';
import ArtistPage from './ArtistPage';
import {act, render, screen, waitFor} from '@testing-library/react';

let songService;
let location;
beforeAll(()=>{
    songService = new SongService();
    location = {
        'search': '?artistId=id&artist=artist'
    };
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


   render(<ArtistPage songService={songService} location={location}/>);
   const wordCloud = screen.getByTestId('word-cloud');
   expect(wordCloud).toBeInTheDocument();
});

test('logs when error', async ()=>{
    songService.getSongs = jest.fn(()=>Promise.reject('bad'));
    const spy = jest.spyOn(console, 'error');
    render(<ArtistPage songService={songService} location={location}/>);

    await waitFor(()=>{
        expect(spy).toHaveBeenCalled();
    });
});

test('resize window resizes word cloud', async () => {
    songService.getSongs = jest.fn(()=>{
        return Promise.resolve([{
            title: 'song 1'
        }, {
            title: 'song 2'
        }]);
    });
    render(<ArtistPage songService={songService} location={location}/>);
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
