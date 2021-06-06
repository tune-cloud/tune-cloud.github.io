import SongApi from "../api/SongApi";

export default class SongService {
    async getSongs(artistId) {
        const result = await SongApi.getSongs(artistId);
        return result.data.songs;
    }
}
