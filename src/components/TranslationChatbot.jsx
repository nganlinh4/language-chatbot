import { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import Settings from './Settings';
import { callGeminiForTranslation, callGeminiForSpeechTranslation, detectLanguage } from '../utils/translationUtils';
import translations from '../utils/translations';

function TranslationChatbot() {
  const [settings, setSettings] = useState({
    apiKey: '',
    model: 'gemini-2.0-flash-lite',
    theme: 'system',
    interfaceLanguage: 'en'
  });
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('gemini_api_key') || '';
    const savedModel = localStorage.getItem('gemini_model') || 'gemini-2.0-flash-lite';
    const savedTheme = localStorage.getItem('app_theme') || 'system';
    const savedLanguage = localStorage.getItem('interface_language') || 'en';

    setSettings({
      apiKey: savedApiKey,
      model: savedModel,
      theme: savedTheme,
      interfaceLanguage: savedLanguage
    });
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    const { theme } = settings;

    // Remove any previous theme classes
    document.documentElement.classList.remove('theme-light', 'theme-dark');

    if (theme === 'system') {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.add(prefersDark ? 'theme-dark' : 'theme-light');
    } else {
      // Use selected theme
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [settings.theme]);

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
    setError(''); // Clear any previous errors when settings change
  };

  const handleSendMessage = async (text) => {
    const t = translations[settings.interfaceLanguage];

    if (!settings.apiKey) {
      setError(t.apiKeyError);
      setShowSettings(true);
      return;
    }

    // Add user message to chat
    setMessages(prev => [...prev, { text, isUser: true }]);
    setIsLoading(true);
    setError('');

    try {
      // Call Gemini API for translation
      const translatedText = await callGeminiForTranslation(text, settings.apiKey, settings.model);

      // Add bot response to chat
      setMessages(prev => [...prev, { text: translatedText, isUser: false }]);
    } catch (err) {
      console.error('Translation error:', err);
      setError(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendVoice = async (base64Audio) => {
    const t = translations[settings.interfaceLanguage];

    if (!settings.apiKey) {
      setError(t.apiKeyError);
      setShowSettings(true);
      return;
    }

    // Add user message placeholder
    setMessages(prev => [...prev, { text: `🎤 ${t.voiceMessageSent}`, isUser: true }]);
    setIsLoading(true);
    setError('');

    try {
      // Call Gemini API for speech translation
      const result = await callGeminiForSpeechTranslation(base64Audio, settings.apiKey, settings.model);

      // Update user message with transcription
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = `🎤 ${result.transcription}`;
        return newMessages;
      });

      // Add bot response with translation
      setMessages(prev => [...prev, { text: result.translation, isUser: false }]);
    } catch (err) {
      console.error('Speech translation error:', err);
      setError(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Get translations based on current interface language
  const t = translations[settings.interfaceLanguage];

  return (
    <div className="translation-chatbot">
      <div className="chatbot-header">
        <h1>{t.appTitle}</h1>
        <button
          className="settings-button"
          onClick={() => setShowSettings(true)}
          title={t.settingsTitle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </button>
      </div>

      <p className="description">
        {t.appDescription}
      </p>

      <div className="chat-container">
        {messages.length === 0 ? (
          <div className="empty-chat">
            {t.emptyChatMessage}
          </div>
        ) : (
          <div className="messages-container">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isUser={msg.isUser}
              />
            ))}
          </div>
        )}
      </div>

      {error && <div className="error-message">{error}</div>}

      <ChatInput
        onSendMessage={handleSendMessage}
        onSendVoice={handleSendVoice}
        disabled={isLoading || !settings.apiKey}
        language={settings.interfaceLanguage}
      />

      {isLoading && <div className="loading-indicator">{t.loadingMessage}</div>}

      {showSettings && (
        <Settings
          onClose={() => setShowSettings(false)}
          onSettingsChange={handleSettingsChange}
          language={settings.interfaceLanguage}
        />
      )}
    </div>
  );
}

export default TranslationChatbot;
