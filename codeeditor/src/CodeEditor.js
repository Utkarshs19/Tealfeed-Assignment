// Import all the necessary dependencies.

import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';


// Inside a code editor box a simple react code 
const CodeEditor = () => {
  const [code, setCode] = useState(
    `import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));`
  );

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

//   For styling a CodeEditor
  return (
    <div style={{ position: 'relative', width: '500px', height: '300px' }}>
      <textarea
        value={code}
        onChange={handleCodeChange}
        spellCheck="false"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          padding: '10px',
          fontSize: '16px',
          fontFamily: 'monospace',
          border: '1px solid #ccc',
          borderRadius: '4px',
          outline: 'none',
          resize: 'none',
          background: 'transparent',
          color: 'transparent',
          caretColor: 'black',
          zIndex: 1,
          whiteSpace: 'pre-wrap',
          overflowWrap: 'break-word',
        }}
      />
     {/* For dark theme */}
      <Highlight theme={themes.vsDark} code={code} language="jsx">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            style={{
              margin: 0,
              padding: '10px',
              fontSize: '16px',
              fontFamily: 'monospace',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f5f5f5',
              overflow: 'auto',
              height: '100%',
              width: '100%',
            }}
          >
            {/* For mapping */}
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
