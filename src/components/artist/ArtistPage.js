import {useEffect, useState} from "react";

export default function ArtistPage(props) {

    const [songs, setSongs] = useState([]);

    useEffect( ()=>{
        async function fetchSongs() {
            const params = new URLSearchParams(props.location.search);
            const artistId = params.get('artistId');
            props.songService.getSongs(artistId).then((results)=>{
                setSongs(results);
            }).catch((error) => {
                console.error(error);
            });
        };
        fetchSongs();
    });

    return(<div>
        <ol>
            {songs.map((song)=>{
                return <li>{song.title}</li>
            })}
        </ol>
    </div>);
};
