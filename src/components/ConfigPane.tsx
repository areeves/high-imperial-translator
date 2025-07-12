import React from 'react';

interface ConfigPaneProps {
  onClose: () => void;
}

const ConfigPane: React.FC<ConfigPaneProps> = ({ onClose }) => {
  // Example configuration fields
  return (
    <div style={{ padding: 24, background: '#fff', borderRadius: 8, maxWidth: 400, margin: '40px auto', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
      <h2>Configuration</h2>
      <form>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="apiKey">API Key:</label>
          <input id="apiKey" name="apiKey" type="text" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="language">Language:</label>
          <select id="language" name="language" style={{ width: '100%' }}>
            <option value="en">English</option>
            <option value="hi">High Imperial</option>
          </select>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose} style={{ marginLeft: 8 }}>Cancel</button>
      </form>
    </div>
  );
};

export default ConfigPane;
