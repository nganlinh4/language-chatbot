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
      <VoiceRecorder
        onRecordingComplete={handleVoiceRecording}
        disabled={disabled}
        language={language}
      />
      <button type="submit" disabled={disabled || !message.trim()}>
        {t.sendButton}
      </button>
    </form>
  );
}

export default ChatInput;
