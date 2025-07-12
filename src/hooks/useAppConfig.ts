import { useState } from 'react';

// Define the shape of your app config here
export interface AppConfig {
  [key: string]: any;
}

const LOCAL_STORAGE_KEY = 'appConfig';

function getInitialConfig(): AppConfig {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        // ignore parse error
      }
    }
  }
  return {};
}

export function useAppConfig<T extends AppConfig = AppConfig>() {
  const [config, setConfig] = useState<AppConfig>(getInitialConfig());

  const setConfigValue = (key: string, value: any) => {
    setConfig(prev => {
      const updated = { ...prev, [key]: value };
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const getConfigValue = (key: string) => config[key];

  return { config, setConfigValue, getConfigValue };
}
