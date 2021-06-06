import SongApi from '../api/SongApi';
import SongService from './SongService';

test('get songs',  ()=>{
    const expectedSongs = {
        data: {
            songs: [{
                id: 'id',
                title: 'title',
                artist: {
                    id: 'id',
                    name: 'name'
                }
            }]
        }
    };
    SongApi.getSongs = jest.fn(()=>expectedSongs);
    const songService = new SongService();
    const songs = songService.getSongs('id');
    expect(songs).resolves.toBe(expectedSongs.data.songs);
});
