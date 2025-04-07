import { useState, useRef } from 'react';
import translations from '../utils/translations';

function VoiceRecorder({ onRecordingComplete, disabled, language = 'en' }) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        processAudioBlob(audioBlob);

        // Stop all tracks to release the microphone
        stream.getTracks().forEach(track => track.stop());
      };

      // Start recording
      mediaRecorder.start();
      setIsRecording(true);

      // Start timer
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please check your browser permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      // Clear timer
      clearInterval(timerRef.current);
    }
  };

  const processAudioBlob = async (audioBlob) => {
    try {
      // Convert audio to base64
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = () => {
        const base64Audio = reader.result.split(',')[1]; // Remove the data URL prefix
        onRecordingComplete(base64Audio);
      };
    } catch (error) {
      console.error('Error processing audio:', error);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get translations based on current interface language
  const t = translations[language];

  return (
    <div className="voice-recorder">
      {isRecording ? (
        <div className="recording-indicator">
          <span className="recording-time">{formatTime(recordingTime)}</span>
          <button
            className="stop-recording-button"
            onClick={(e) => {
              e.preventDefault(); // Prevent any form submission
              e.stopPropagation(); // Stop event bubbling
              stopRecording();
            }}
            type="button" // Explicitly set type to button
          >
            <span className="recording-icon"></span>
            {t.stopRecording}
          </button>
        </div>
      ) : (
        <button
          className="mic-button"
          onClick={(e) => {
            e.preventDefault(); // Prevent any form submission
            e.stopPropagation(); // Stop event bubbling
            startRecording();
          }}
          disabled={disabled}
          title="Record voice message"
          type="button" // Explicitly set type to button
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
          <span className="mic-text">{t.micButton}</span>
        </button>
      )}
    </div>
  );
}

export default VoiceRecorder;
