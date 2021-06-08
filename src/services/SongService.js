import SongApi from "../api/SongApi";

export default class SongService {
    async getSongs(artistId, numberOfSongs) {
        const result = await SongApi.getSongs(artistId, numberOfSongs);
        return result.data.songs;
    }
}
