import React, { useState } from 'react';
import { BoxCodeBlock } from 'layout';

const SimpleCode: React.FC = () => {
    const [JSCode, setJSCode] = useState('');
    const [HTMLCode, setHTMLCode] = useState('');
    const [CSSCode, setCSSCode] = useState('');

    return (
        <>
            <BoxCodeBlock />
            <iframe
                sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                title="preview"
                srcDoc={`${HTMLCode} <style>${CSSCode}</style><script>${JSCode}</script>`}
            />
        </>
    );
};

export default SimpleCode;
