import { useState, useEffect } from 'react';

function ApiKeyInput({ onApiKeyChange }) {
  const [apiKey, setApiKey] = useState('');
  
  // Load API key from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('gemini_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      onApiKeyChange(savedApiKey);
    }
  }, [onApiKeyChange]);
  
  const handleApiKeyChange = (e) => {
    const newApiKey = e.target.value;
    setApiKey(newApiKey);
    localStorage.setItem('gemini_api_key', newApiKey);
    onApiKeyChange(newApiKey);
  };
  
  return (
    <div className="api-key-input">
      <label htmlFor="api-key">Gemini API Key:</label>
      <input
        type="password"
        id="api-key"
        value={apiKey}
        onChange={handleApiKeyChange}
        placeholder="Enter your Gemini API key"
      />
    </div>
  );
}

export default ApiKeyInput;
