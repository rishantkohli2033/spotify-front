"use client"
import React, { useEffect, useState } from 'react';
import SongItem from './SongItem';
import { getGenres, getPlaylist, getToken } from '@/lib/actions';

type ContentProps = {};

const Content: React.FC<ContentProps> = () => {
    const [accessToken, setAccessToken] = useState("");
    const [genres, setGenres] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    useEffect(() => {
        const genToken = async () => {
            const token = await getToken();
            if (!token) console.log("error");
            //const res = await getGenres(token);
            const res = await getPlaylist(token);
            // console.log(res);
            setAccessToken(token);
            setPlaylist(res);
            //setGenres(res);
        }
        genToken();

    }, []);
    return (
        <>
            {
                playlist.map((playlist:any, idx: number) => (
                    <div key={idx}>
                        <SongItem  songImage={playlist.track.album.images[0].url} songName={playlist.track.name} songArtist={playlist.track.artists[0].name}/>
                    </div>
                ))
            }
        </>

    )
}
export default Content;