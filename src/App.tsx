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
            {/* Always render SplitView */}
            <SplitView />
            {/* Render ConfigPane as overlay if showConfig is true */}
            {showConfig && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.3)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <ConfigPane onClose={() => setShowConfig(false)} />
                </div>
            )}
        </div>
    );
};

export default App;