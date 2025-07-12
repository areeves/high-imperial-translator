import React from 'react';

interface InputPaneProps {
    inputText: string;
    onInputChange: (text: string) => void;
    onTranslate: (text: string) => void;
}

const InputPane: React.FC<InputPaneProps> = ({ inputText, onInputChange, onTranslate }) => {
    return (
        <div style={{ padding: '20px', flex: 1 }}>
            <h2>Input</h2>
            <textarea
                value={inputText}
                onChange={(e) => onInputChange(e.target.value)}
                rows={10}
                style={{ width: '100%', resize: 'none' }}
            />
            <button
                style={{ marginTop: '10px', width: '100%' }}
                onClick={() => onTranslate(inputText)}
            >
                Submit
            </button>
        </div>
    );
};

export default InputPane;