import React, { useState, useEffect } from 'react';

interface ConfigPaneProps {
  onClose: () => void;
}

const CONFIG_KEY = 'appConfig';

const ConfigPane: React.FC<ConfigPaneProps> = ({ onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const stored = localStorage.getItem(CONFIG_KEY);
    if (stored) {
      try {
        const config = JSON.parse(stored);
        if (config.apiKey) setApiKey(config.apiKey);
      } catch {}
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(CONFIG_KEY, JSON.stringify({ apiKey }));
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
