import React from 'react';

interface InputPaneProps {
    inputText: string;
    onInputChange: (text: string) => void;
    onTranslate: (text: string) => void;
}

const InputPane: React.FC<InputPaneProps> = ({ inputText, onInputChange, onTranslate }) => {
    return (
        <div className="input-container">
            <h2>English Input</h2>
            <textarea
                value={inputText}
                onChange={(e) => onInputChange(e.target.value)}
                rows={15}
                className="input-textarea"
                placeholder="Enter English text to translate..."
            />
            <button
                className="translate-button"
                onClick={() => onTranslate(inputText)}
            >
                🔄 Translate to High Imperial
            </button>
        </div>
    );
};

export default InputPane;
