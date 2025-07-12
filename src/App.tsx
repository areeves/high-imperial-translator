import React, { useState } from 'react';
import SplitView from './components/SplitView';
import ConfigPane from './components/ConfigPane';

const App: React.FC = () => {
    const [showConfig, setShowConfig] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setShowConfig(true)} style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
                Open Configuration
            </button>
            {showConfig && <ConfigPane onClose={() => setShowConfig(false)} />}
            {!showConfig && <SplitView />}
        </div>
    );
};

export default App;