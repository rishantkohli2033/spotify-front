"use client"
import React, { useEffect, useState } from 'react';
import SongItem from './SongItem';
import {getPlaylist, getToken } from '@/lib/actions';
import useHomeSearch from '@/store/useHomeSearch';
import LoadingSkeleton from '@/components/loading-skeleton/LoadingSkeleton';

type ContentProps = {};

const Content: React.FC<ContentProps> = () => {
    const [playlist, setPlaylist] = useState([]);
    const {loading, setLoading} = useHomeSearch();
    useEffect(() => {
        const genToken = async () => {
            setLoading(true);
            const token = await getToken();
            const res = await getPlaylist(token);
            setPlaylist(res);
            setLoading(false);
        }
        genToken();

    }, []);
    
    return (
        <>
            { !loading && 
                (playlist.map((playlist: any, idx: number) => (
                    <div key={idx} >
                        <SongItem  songImage={playlist.track.album.images[0].url} songName={playlist.track.name} songArtist={playlist.track.artists[0].name} search={false}/>
                    </div>
                )))
            }
            {
                loading && [...Array(18)].map((_,idx)=>(
                    <div key={idx}>
                    <LoadingSkeleton  />
                    <div >

                    </div >
                    </div>
                ))
            }
        </>

    )
}
export default Content;