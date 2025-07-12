import React, { useState } from 'react';
import InputPane from './InputPane';
import OutputPane from './OutputPane';
import { fetchTranslation } from '../api/openai';

const SplitView: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [outputText, setOutputText] = useState<string>('');

    const handleInputChange = (text: string) => {
        setInputText(text);
    };

    const handleTranslation = async (inputText: string) => {
        try {
            const config = JSON.parse(localStorage.getItem('appConfig') || '{}');
            const apiKey = config.apiKey || '';
            if (!apiKey) {
                setOutputText('API key not set. Please configure it first.');
                return;
            }
            const translated = await fetchTranslation(inputText, apiKey);
            setOutputText(translated);
        } catch (error) {
            setOutputText('Translation failed.');
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, padding: '10px' }}>
                <InputPane inputText={inputText} onInputChange={handleInputChange} onTranslate={handleTranslation} />
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
                <OutputPane outputText={outputText} />
            </div>
        </div>
    );
};

export default SplitView;