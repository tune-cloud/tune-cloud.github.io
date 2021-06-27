import {useEffect, useState} from "react";
import ReactWordcloud from 'react-wordcloud';
import ScaleLoader from 'react-spinners/ScaleLoader';
import {useHistory} from 'react-router-dom';

export default function ArtistPage(props) {

    const MAX_SONG_TITLE_LENGTH = 30;
    const MIN_FONT_SIZE = 12;
    const MAX_FONT_SIZE = 100;
    const NUMBER_OF_SONGS = 100;
    const HEIGHT_OFFSET = 100;
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
    const [height, setHeight] = useState(window.innerHeight - HEIGHT_OFFSET);
    const [width] = useState('100%');
    const history = useHistory();

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
            history.push('/error');
        });
    }, [props.location.search, props.songService]);

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setHeight(window.innerHeight - HEIGHT_OFFSET);
        });
    }, []);
    return(
        <div className='App' style={{width: width, height: height}} data-testid='word-cloud-container'>

                    <h1 className='artist-header'>{artist}</h1>
                    <ScaleLoader loading={loading} color='teal'/>
                    <ReactWordcloud words={songs} options={options}/>
        </div>);
};
