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
    <div style={{ padding: 24, background: '#fff', borderRadius: 8, maxWidth: 400, margin: '40px auto', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
      <h2>Configuration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="apiKey">API Key:</label>
          <input id="apiKey" name="apiKey" type="text" style={{ width: '100%' }} value={apiKey} onChange={e => setApiKey(e.target.value)} />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose} style={{ marginLeft: 8 }}>Cancel</button>
      </form>
    </div>
  );
};

export default ConfigPane;
