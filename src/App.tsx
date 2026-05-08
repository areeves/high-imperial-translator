import React, { useState } from 'react';
import SplitView from './components/SplitView';
import ConfigPane from './components/ConfigPane';

const App: React.FC = () => {
    const [showConfig, setShowConfig] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setShowConfig(true)} className="config-button">
                ⚙️ Configuration
            </button>
            {/* Always render SplitView */}
            <SplitView />
            {/* Render ConfigPane as overlay if showConfig is true */}
            {showConfig && (
                <div className="modal-overlay">
                    <ConfigPane onClose={() => setShowConfig(false)} />
                </div>
            )}
        </div>
    );
};

export default App;