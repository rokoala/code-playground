import React, { useEffect, useState } from 'react';
import { BoxCode, MobileEditorNav, Resizer } from 'components';
import { useWindowDimensions } from 'utils';
import { CodeBlock } from './styles';

interface Props {
    height: number;
    setJSCode: (code: string) => void;
    setHTMLCode: (code: string) => void;
    setCSSCode: (code: string) => void;
}

const BoxCodeBlock: React.FC<Props> = ({ height, setJSCode, setHTMLCode, setCSSCode }) => {
    const win = useWindowDimensions();

    const [tabsOn, setTabsOn] = useState({ html: true, js: false, css: false, result: true });
    const [mobileMode, setMobileMode] = useState(false);

    useEffect(() => {
        if (win.width < 767 || win.height < 440) {
            setMobileMode(true);
        } else if (mobileMode) setMobileMode(false);
    }, [win.width]);

    return (
        <CodeBlock style={{ height }}>
            {mobileMode && (
                <MobileEditorNav
                    onTabChange={(tabs) => {
                        setTabsOn(tabs);
                    }}
                />
            )}
            <Resizer
                mobileMode={mobileMode}
                hide={[mobileMode && !tabsOn.html, mobileMode && !tabsOn.js, mobileMode && !tabsOn.css]}
            >
                <BoxCode title="HTML" language="html" onCodeChange={(value) => setHTMLCode(value)} />
                <BoxCode title="JS" onCodeChange={(value) => setJSCode(value)} />
                <BoxCode title="CSS" language="css" onCodeChange={(value) => setCSSCode(value)} />
            </Resizer>
        </CodeBlock>
    );
};

export default BoxCodeBlock;
