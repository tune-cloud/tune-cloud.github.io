import SongService from '../../services/SongService';
import ArtistPage from './ArtistPage';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';

let songService;
let location;
beforeAll(()=>{
    songService = new SongService();
    location = {
        'search': '?artistId=id&artist=artist'
    };
    jest.mock('react-wordcloud');
});

test('renders word cloud with artist songs', ()=>{
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
   waitFor(()=>{
       const song1 = screen.getByText(/song 1/i);
       expect(song1).toBeInTheDocument();

       const song2 = screen.getByText(/song 2/i);
       expect(song2).toBeInTheDocument();
   });

});

test('logs when error', ()=>{
    songService.getSongs = jest.fn(()=>Promise.reject('bad'));

    render(<ArtistPage songService={songService} location={location}/>);

    waitFor(()=>{
        expect(console.error).toHaveBeenCalled();
    });
});

test('clicking enables resize', ()=>{
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

    fireEvent.click(wordCloud);
    waitFor(()=>{
        expect(wordCloud.className).toBe('resize-boarders');
    });
});
