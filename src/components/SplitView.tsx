import React, { useState } from 'react';
import InputPane from './InputPane';
import OutputPane from './OutputPane';
import { fetchTranslation } from '../api/openai';
import { useAppConfig } from '../hooks/useAppConfig';

const SplitView: React.FC = () => {
    const { config } = useAppConfig();
    const [inputText, setInputText] = useState<string>('');
    const [outputText, setOutputText] = useState<string>('');

    const handleInputChange = (text: string) => {
        setInputText(text);
    };

    const handleTranslation = async (inputText: string) => {
        try {
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
        <div className="split-view">
            <div className="pane input-pane">
                <InputPane inputText={inputText} onInputChange={handleInputChange} onTranslate={handleTranslation} />
            </div>
            <div className="pane output-pane">
                <OutputPane outputText={outputText} />
            </div>
        </div>
    );
};

export default SplitView;