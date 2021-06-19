import { Search } from 'react-bootstrap-icons';
import {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function SearchBar(props) {

    const [artists, setArtists] = useState([]);
    const history = useHistory();

    const searchBarKeyPress = (event) => {
        if (event.key === 'Enter' || event.target.value.length >= 4) {
            const search = event.target.value;
            props.artistService.find(search).then((results)=>{
                setArtists(results);
            }).catch((error)=>{
                console.error(error);
            });
        }
    }

    const goToArtistPage = (artist) => {
        history.push(`/artist?artistId=${artist.id}&artist=${artist.name}`);
    }

    return (
        <Fragment>
            <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                        <Search />
                    </span>
                <input type="text" className="form-control" placeholder="Search for an artist"
                       aria-label="Input group example" aria-describedby="basic-addon1"
                       onKeyDown={searchBarKeyPress} autoFocus
                />
            </div>

            <ul className="list-group search-results">
                {
                    artists.map((artist)=>{
                        return <li className="list-group-item" tabIndex='0' key={artist.id}
                                   onClick={()=>goToArtistPage(artist)}
                                   onKeyPress={(e) => e.key === 'Enter' ? goToArtistPage(artist) : null}>{artist.name}</li>
                    })
                }
            </ul>
        </Fragment>
    );
}
