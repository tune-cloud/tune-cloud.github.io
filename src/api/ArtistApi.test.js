import ArtistApi from "./ArtistApi";
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

test('searches for artists', ()=>{
    const client = new ApolloClient({
        link: new HttpLink({uri: 'http://localhost', fetch}),
        cache: new InMemoryCache(),
    });
    const expectedResults = {data: 'artist'};
    client.query = jest.fn(()=> expectedResults);
    ArtistApi.init(client);

    const results = ArtistApi.search('artists');

    expect(results).toBe(expectedResults);
});
