import { Search } from 'react-bootstrap-icons';
import {useState} from "react";
import ArtistService from "../../services/ArtistService";
import ArtistApi from "../../api/ArtistApi";
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

export default function SearchPage() {

    const [artists, setArtists] = useState([]);
    const artistService = new ArtistService();
    ArtistApi.init(new ApolloClient({
        link: new HttpLink({uri: 'https://nbl977s1aj.execute-api.us-east-1.amazonaws.com/dev/graphql'}),
        cache: new InMemoryCache(),
    }));


    const searchBarKeyPress = (event) => {
        if (event.key === 'Enter') {
            const search = event.target.value;
            artistService.find(search).then((results)=>{
                setArtists(results.artists);
            }).catch((error)=>{
                console.log(error);
            })
        }
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Tune Cloud</h1>
                <div className="input-group w-50">
                    <span className="input-group-text" id="basic-addon1">
                        <Search />
                    </span>
                    <input type="text" className="form-control" placeholder="Search for an artist"
                                       aria-label="Input group example" aria-describedby="basic-addon1" data-testid='search'
                    onKeyDown={searchBarKeyPress}
                    />
                </div>

                <ul className="list-group search-results">
                    {
                        artists.map((artist)=>{
                            return <li className="list-group-item" tabIndex='0'>{artist.name}</li>
                        })
                    }
                </ul>

            </header>
        </div>
    );
}
