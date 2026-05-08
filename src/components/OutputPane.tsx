import React from 'react';

interface OutputPaneProps {
    outputText: string;
}

const OutputPane: React.FC<OutputPaneProps> = ({ outputText }) => {
    return (
        <div className="output-container">
            <h2>High Imperial Translation</h2>
            <textarea
                value={outputText || 'Translation will appear here...'}
                readOnly={true}
                rows={15}
                className="input-textarea"
            />
            
            <div className="dummy-spacer"></div>
        </div>
    );
};

export default OutputPane;
