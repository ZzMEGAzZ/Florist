// components/AudioPlayer.js
'use client'

import React, { useRef } from 'react';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => alert(`Error playing the audio: ${e.message}`));
        }
    };

    return (
        <>
            <button onClick={playAudio}>Play Audio</button>
            <audio ref={audioRef} src={src} />
        </>
    );
};

export default AudioPlayer;
