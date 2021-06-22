import { Search } from 'react-bootstrap-icons';
import {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function SearchBar(props) {

    const [artists, setArtists] = useState([]);
    const history = useHistory();

    const searchBarKeyPress = async (event) => {
        if (event.key === 'Enter' || await pauseInTyping(event)) {
            const search = event.target.value;
            props.artistService.find(search).then((results)=>{
                setArtists(results);
            }).catch((error)=>{
                console.error(error);
            });
        }
    }

    const pauseInTyping = async (event) => {
        const text = event.target.value + event.key
        await sleep(250);
        return event.target.value === text;
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const goToArtistPage = (artist) => {
        history.push(`/artist?artistId=${artist.id}&artist=${artist.name}`);
        window.location.reload();
    }

    return (
        <Fragment>
            <form action='.' onSubmit={(e) => e.preventDefault()} className={props.searchBarClassName}>
                <span className="input-group-text" id="basic-addon1">
                    <Search />
                </span>
                <input type="search" className="form-control" placeholder="Search for an artist"
                       aria-label="Input group example" aria-describedby="basic-addon1"
                       onKeyDown={searchBarKeyPress} autoFocus
                />
            </form>

            <ul className={props.searchResultsClassName}>
                {
                    artists.map((artist)=>{
                        return <li className="list-group-item" tabIndex='0' key={artist.id}
                                   onClick={()=>goToArtistPage(artist)}
                                   onKeyPress={(e) => e.key === 'Enter' ? goToArtistPage(artist) : null}>
                            <img src={artist.thumbnail} width={50} height={50} alt=''/>{artist.name}
                        </li>
                    })
                }
            </ul>
        </Fragment>
    );
}
