import SongService from '../../services/SongService';
import ArtistPage from './ArtistPage';
import {render, screen, waitFor} from '@testing-library/react';

test('renders word cloud with artist songs', ()=>{
   const songService = new SongService();
   const location = {
       'search': '?artistId=id&artist=artist'
   };

   jest.mock('react-wordcloud');
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
    const songService = new SongService();
    const location = {
        'search': '?artistId=id&artist=artist'
    };

    jest.mock('react-wordcloud');
    songService.getSongs = jest.fn(()=>Promise.reject('bad'));

    render(<ArtistPage songService={songService} location={location}/>);

    waitFor(()=>{
        expect(console.error).toHaveBeenCalled();
    });
})
