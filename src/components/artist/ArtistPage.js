import {useEffect, useState} from "react";
import ReactWordcloud from 'react-wordcloud';
import {Resizable} from "re-resizable";

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
        <div className="App">

            <header className="App-header">
                <h1 className='artist-header'>{artist}</h1>
                <Resizable className='resize' defaultSize={{
                    width: '90%',
                    height: window.innerHeight * 0.80
                }}>
                    <ReactWordcloud words={songs} />
                </Resizable>


            </header>
        </div>);
};
