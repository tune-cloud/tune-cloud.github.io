import {useEffect, useState} from "react";
import ReactWordcloud from 'react-wordcloud';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function ArtistPage(props) {

    const MAX_SONG_TITLE_LENGTH = 30;
    const MIN_FONT_SIZE = 12;
    const MAX_FONT_SIZE = 100;
    const NUMBER_OF_SONGS = 100;
    const [songs, setSongs] = useState([]);
    const [artist, setArtist] = useState();
    const [loading, setLoading] = useState(true);
    const options = {
        layout: 'spiral',
        scale: 'linear',
        rotations: 3,
        rotationAngles: [0, 90],
        enableTooltip: false
    };

    const calculateWordValue = ((word, popularity)=>{
        if (word.length > MAX_SONG_TITLE_LENGTH) {
            return MIN_FONT_SIZE;
        } else {
            return MAX_FONT_SIZE - popularity;
        }
    });

    useEffect( ()=>{
        const params = new URLSearchParams(props.location.search);
        const artistId = params.get('artistId');
        setArtist(params.get('artist'));
        props.songService.getSongs(artistId, NUMBER_OF_SONGS).then((results)=>{
            const words = results.map((song, index) => {
                return {text: song.title, value: calculateWordValue(song.title, index)}
            });
            setSongs(words);
            setLoading(false);
        }).catch((error) => {
            console.error(error);
        });
    }, [props.location.search, props.songService]);

    return(
        <div className='App' style={{width: '100%', height: window.innerHeight}}>

                    <h1 className='artist-header'>{artist}</h1>
                    <ScaleLoader loading={loading} color='teal'/>
                    <ReactWordcloud words={songs} options={options}/>
        </div>);
};
