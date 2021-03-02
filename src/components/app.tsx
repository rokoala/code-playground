import React, { useState } from 'react';
import { BoxCode } from '.';

const App: React.FC = () => {
    const [JSCode, setJSCode] = useState('');
    const [HTMLCode, setHTMLCode] = useState('');
    const [CSSCode, setCSSCode] = useState('');

    return (
        <>
            <div>
                <BoxCode title="HTML" onCodeChange={(value) => setHTMLCode(value)} />
                <BoxCode
                    title="JS"
                    codeMirrorOptions={{ mode: 'javascript' }}
                    onCodeChange={(value) => setJSCode(value)}
                />
                <BoxCode title="CSS" codeMirrorOptions={{ mode: 'css' }} onCodeChange={(value) => setCSSCode(value)} />
            </div>
            <iframe
                sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                title="preview"
                srcDoc={`${HTMLCode} <style>${CSSCode}</style><script>${JSCode}</script>`}
            />
        </>
    );
};

export default App;
