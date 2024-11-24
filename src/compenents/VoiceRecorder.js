import React, { useState, useRef } from "react";
import "./VoiceRecorder.css";

const VoiceRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
                const audioURL = URL.createObjectURL(audioBlob);
                setAudioURL(audioURL);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
    };

    return (
        <div className="voice-recorder-container">
            <h1>Voice Recorder</h1>
            <div className="controls">
                {!isRecording ? (
                    <button onClick={startRecording} className="record-button">
                        Start Recording
                    </button>
                ) : (
                    <button onClick={stopRecording} className="stop-button">
                        Stop Recording
                    </button>
                )}
            </div>
            {audioURL && (
                <div className="audio-container">
                    <h3>Playback:</h3>
                    <audio controls src={audioURL}></audio>
                    <a href={audioURL} download="recording.wav" className="download-link">
                        Download Recording
                    </a>
                </div>
            )}
        </div>
    );
};

export default VoiceRecorder;
