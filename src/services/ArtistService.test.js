import ArtistService from "./ArtistService";
import ArtistApi from "../api/ArtistApi";

test('finds artist',  ()=>{
    const expectedArtists = {
        data: {
            id: 'id',
            name: 'name'
        }
    };
    ArtistApi.search = jest.fn(()=>expectedArtists);
    const artistService = new ArtistService();
    const artists = artistService.find("name");
    expect(artists).resolves.toBe(expectedArtists.data);
});
