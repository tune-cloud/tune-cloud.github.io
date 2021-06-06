import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import SongApi from './SongApi';

test('get songs for artist', ()=>{
    const client = new ApolloClient({
        link: new HttpLink({uri: 'http://localhost', fetch}),
        cache: new InMemoryCache(),
    });
    const expectedResults = {data: {
        songs: [{
            id: 'id',
            title: 'title',
            artist: {
                id: 'id',
                name: 'name'
            }
        }]
    }};
    client.query = jest.fn(()=> expectedResults);
    SongApi.init(client);

    const results = SongApi.getSongs('id');

    expect(results).toBe(expectedResults);
});
