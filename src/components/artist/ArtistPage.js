import {useEffect, useState} from "react";
import ReactWordcloud from 'react-wordcloud';

export default function ArtistPage(props) {

    const [songs, setSongs] = useState([]);
    const [artist, setArtist] = useState();

    useEffect( ()=>{
        const params = new URLSearchParams(props.location.search);
        const artistId = params.get('artistId');
        setArtist(params.get('artist'));
        props.songService.getSongs(artistId, 100).then((results)=>{
            const words = results.map((song, index) => {
                return {text: song.title, value: results.length - (index * index)}
            });
            setSongs(words);
        }).catch((error) => {
            console.error(error);
        });
    }, [props.location.search, props.songService]);

    return(
        <div className="App" style={{width: '100%', height: window.innerHeight}}>
            <header className="App-header">
                    <h1 className='artist-header'>{artist}</h1>
                    <ReactWordcloud words={songs} />
            </header>
        </div>);
};
