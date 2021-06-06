import {gql} from "@apollo/client";

export default class SongApi {
    static client;

    static init(client) {
        this.client = client;
    }

    static getSongs(artistId) {
        const query = gql`query {
            songs(artistId: ${artistId}) {
                id
                title
                artist {
                    id
                    name
                }
            }
        }`;
        return this.client.query({query: query});
    }
}
