import { useState, useEffect } from 'react';
import translations from '../utils/translations';

function Settings({ onClose, onSettingsChange, language = 'en' }) {
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('gemini-2.0-flash-lite');
  const [theme, setTheme] = useState('system');
  const [interfaceLanguage, setInterfaceLanguage] = useState('en');

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('gemini_api_key') || '';
    const savedModel = localStorage.getItem('gemini_model') || 'gemini-2.0-flash-lite';
    const savedTheme = localStorage.getItem('app_theme') || 'system';
    const savedLanguage = localStorage.getItem('interface_language') || 'en';

    setApiKey(savedApiKey);
    setModel(savedModel);
    setTheme(savedTheme);
    setInterfaceLanguage(savedLanguage);
  }, []);

  const handleSave = () => {
    // Save settings to localStorage
    localStorage.setItem('gemini_api_key', apiKey);
    localStorage.setItem('gemini_model', model);
    localStorage.setItem('app_theme', theme);
    localStorage.setItem('interface_language', interfaceLanguage);

    // Notify parent component
    onSettingsChange({ apiKey, model, theme, interfaceLanguage });
    onClose();
  };

  // Get translations based on current interface language
  const t = translations[language];

  return (
    <div className="settings-overlay">
      <div className="settings-panel">
        <h2>{t.settingsTitle}</h2>

        <div className="settings-group">
          <label htmlFor="api-key">{t.apiKeyLabel}</label>
          <input
            type="password"
            id="api-key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={t.apiKeyPlaceholder}
          />
          <div className="api-key-help">
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.getApiKeyLink}
            </a>
          </div>
        </div>

        <div className="settings-group">
          <label htmlFor="model-select">{t.modelLabel}</label>
          <select
            id="model-select"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="gemini-2.0-flash-lite">{t.modelFast}</option>
            <option value="gemini-2.0-flash">{t.modelMedium}</option>
            <option value="gemini-2.5-pro-preview-03-25">{t.modelSlow}</option>
          </select>
        </div>

        <div className="settings-group">
          <label htmlFor="theme-select">{t.themeLabel}</label>
          <select
            id="theme-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="system">{t.systemTheme}</option>
            <option value="light">{t.lightTheme}</option>
            <option value="dark">{t.darkTheme}</option>
          </select>
        </div>

        <div className="settings-group">
          <label htmlFor="language-select">{t.interfaceLanguageLabel}</label>
          <select
            id="language-select"
            value={interfaceLanguage}
            onChange={(e) => setInterfaceLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
          </select>
        </div>

        <div className="settings-actions">
          <button onClick={onClose} className="cancel-button">{t.cancelButton}</button>
          <button onClick={handleSave} className="save-button">{t.saveButton}</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
