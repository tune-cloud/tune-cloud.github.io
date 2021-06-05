import { Search } from 'react-bootstrap-icons';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function SearchPage(props) {

    const [artists, setArtists] = useState([]);
    const history = useHistory();

    const searchBarKeyPress = (event) => {
        if (event.key === 'Enter' || event.target.value.length >= 4) {
            const search = event.target.value;
            props.artistService.find(search).then((results)=>{
                setArtists(results.artists);
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    const goToArtistPage = (artistId) => {
        history.push(`/artist/${artistId}`);
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
                                       aria-label="Input group example" aria-describedby="basic-addon1"
                    onKeyDown={searchBarKeyPress}
                    />
                </div>

                <ul className="list-group search-results">
                    {
                        artists.map((artist)=>{
                            return <li className="list-group-item" tabIndex='0' itemID={artist.id}
                                       onClick={()=>goToArtistPage(artist.id)}
                                       onKeyPress={(e) => e.key === 'Enter' ? goToArtistPage(artist.id) : null}>{artist.name}</li>
                        })
                    }
                </ul>

            </header>
        </div>
    );
}
