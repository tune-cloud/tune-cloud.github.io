import {gql} from "@apollo/client";

export default class SongApi {
    static client;

    static init(client) {
        this.client = client;
    }

    static getSongs(artistId, top) {
        const query = gql`query {
            songs(artistId: ${artistId}, top: ${top}, filter: {
                artists: [${artistId}]
            }) {
                title
            }
        }`;
        return this.client.query({query: query});
    }
}
