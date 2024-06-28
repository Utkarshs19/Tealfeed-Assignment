// src/App.js
import React from 'react';
import CodeEditor from './CodeEditor';

const App = () => {
  return (
    // To style a CodeEditor
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1>Simple Code Editor</h1>
        <CodeEditor />
      </div>
    </div>
  );
};

export default App;
