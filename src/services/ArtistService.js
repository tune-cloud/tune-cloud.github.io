import ArtistApi from "../api/ArtistApi";

export default class ArtistService {
    async find(search) {
        const results = await ArtistApi.search(search);
        return results.data.artists;
    }
}
