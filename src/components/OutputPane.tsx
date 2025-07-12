import React from 'react';

interface OutputPaneProps {
    outputText: string;
}

const OutputPane: React.FC<OutputPaneProps> = ({ outputText }) => {
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', height: '100%', overflowY: 'auto' }}>
            <h2>Translated Output</h2>
            <pre>{outputText}</pre>
        </div>
    );
};

export default OutputPane;