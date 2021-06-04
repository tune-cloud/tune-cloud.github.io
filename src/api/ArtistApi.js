import {gql} from "@apollo/client";

export default class ArtistApi {
    static client;

    static init(client) {
        this.client = client;
    }

    static search(search) {
        const query = gql`query {
            artists(search: "${search}") {
                id
                name
            }
        }`;
        return this.client.query({query: query});
    }
}
