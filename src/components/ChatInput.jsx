import { useState, useRef } from 'react';
import VoiceRecorder from './VoiceRecorder';
import translations from '../utils/translations';

function ChatInput({ onSendMessage, onSendVoice, disabled, language = 'en' }) {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  // Handle key press in the input field
  const handleKeyPress = (e) => {
    // If Enter is pressed, prevent default and send message
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  // Common function to send message
  const sendMessage = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
      // Focus back on the input field after sending
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleVoiceRecording = (base64Audio) => {
    if (!disabled) {
      onSendVoice(base64Audio);
      // Focus back on the input field after voice recording
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  // Click handler for the send button
  const handleSendClick = (e) => {
    e.stopPropagation(); // Stop event from propagating
    sendMessage();
  };

  // Get translations based on current interface language
  const t = translations[language];

  return (
    <div className="chat-input">
      <input
        ref={inputRef}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={t.inputPlaceholder}
        disabled={disabled}
      />
      <div className="button-container">
        <VoiceRecorder
          onRecordingComplete={handleVoiceRecording}
          disabled={disabled}
          language={language}
        />
        <button
          type="button"
          onClick={handleSendClick}
          disabled={disabled || !message.trim()}
          className="send-button"
        >
          {t.sendButton}
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
