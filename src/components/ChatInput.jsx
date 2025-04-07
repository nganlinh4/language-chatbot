import { useState } from 'react';
import VoiceRecorder from './VoiceRecorder';
import translations from '../utils/translations';

function ChatInput({ onSendMessage, onSendVoice, disabled, language = 'en' }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleVoiceRecording = (base64Audio) => {
    if (!disabled) {
      onSendVoice(base64Audio);
    }
  };

  // Separate click handler for the send button to prevent event propagation issues
  const handleSendClick = (e) => {
    e.stopPropagation(); // Stop event from propagating
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  // Get translations based on current interface language
  const t = translations[language];

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
    </form>
  );
}

export default ChatInput;
