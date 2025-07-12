import React, { useState } from 'react';
import InputPane from './InputPane';
import OutputPane from './OutputPane';

const SplitView: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [outputText, setOutputText] = useState<string>('');

    const handleInputChange = (text: string) => {
        setInputText(text);
    };

    const handleTranslation = (translatedText: string) => {
        setOutputText(translatedText);
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