import React, { useState, useEffect } from 'react';
import { useAppConfig } from '../hooks/useAppConfig';

interface ConfigPaneProps {
  onClose: () => void;
}

const ConfigPane: React.FC<ConfigPaneProps> = ({ onClose }) => {
  const { config, setConfigValue } = useAppConfig();
  const [apiKey, setApiKey] = useState(config.apiKey || '');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setApiKey(config.apiKey || '');
  }, [config.apiKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfigValue('apiKey', apiKey);
    onClose();
  };

  return (
    <div className="config-modal">
      <div className="config-content">
        <h2>⚙️ Configuration</h2>
        <form onSubmit={handleSubmit} className="config-form">
          <div className="form-group">
            <label htmlFor="apiKey">OpenAI API Key:</label>
            <input
              id="apiKey"
              name="apiKey"
              type="password"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              placeholder="Enter your OpenAI API key"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="save-button">💾 Save</button>
            <button type="button" onClick={onClose} className="cancel-button">❌ Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigPane;
