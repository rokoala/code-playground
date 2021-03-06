import React, { useEffect, useState } from 'react';
import { BoxCode, MobileEditorNav, ResizerBar, ResizerContent } from 'components';
import { usePrevious, useWindowDimensions } from 'utils';
import { CodeBlock } from './styles';

interface Props {
    height: number;
    setJSCode: (code: string) => void;
    setHTMLCode: (code: string) => void;
    setCSSCode: (code: string) => void;
}

const BoxCodeBlock: React.FC<Props> = ({ height, setJSCode, setHTMLCode, setCSSCode }) => {
    const win = useWindowDimensions();
    const previousWidth = usePrevious(win.width) || win.width;

    const initWidth = (win.width - 18 * 3) / 3;

    const [dimensionsHTML, setDimensionsHTML] = useState(initWidth);
    const [dimensionsJS, setDimensionsJS] = useState(initWidth);
    const [dimensionsCSS, setDimensionsCSS] = useState(initWidth);

    const [tabsOn, setTabsOn] = useState({ html: true, js: false, css: false, result: true });
    const [mobileMode, setMobileMode] = useState(false);

    const [diff1, setDiff1] = useState(0);
    const [diff2, setDiff2] = useState(0);

    useEffect(() => {
        if (win.width < 767 || win.height < 440) {
            setMobileMode(true);
        } else {
            const diff = (win.width - previousWidth) / 3;
            setDimensionsHTML(dimensionsHTML + diff);
            setDimensionsJS(dimensionsJS + diff);
            setDimensionsCSS(dimensionsCSS + diff);
            if (mobileMode) setMobileMode(false);
        }
    }, [win.width]);

    return (
        <CodeBlock height={height}>
            {mobileMode && (
                <MobileEditorNav
                    onTabChange={(tabs) => {
                        setTabsOn(tabs);
                    }}
                />
            )}
            <ResizerBar hide={mobileMode} />
            <ResizerContent
                hide={mobileMode && !tabsOn.html}
                currentX={mobileMode ? win.width : dimensionsHTML}
                diffX={diff1}
            >
                <BoxCode title="HTML" language="html" onCodeChange={(value) => setHTMLCode(value)} />
            </ResizerContent>
            <ResizerBar
                hide={mobileMode}
                onResize={({ x }) => {
                    setDiff1(x);
                }}
                onStop={({ x }) => {
                    setDiff1(0);
                    setDimensionsHTML(dimensionsHTML + x);
                    setDimensionsJS(dimensionsJS - x);
                }}
            />
            <ResizerContent
                hide={mobileMode && !tabsOn.js}
                currentX={mobileMode ? win.width : dimensionsJS}
                diffX={-diff1 + diff2}
            >
                <BoxCode title="JS" onCodeChange={(value) => setJSCode(value)} />
            </ResizerContent>
            <ResizerBar
                hide={mobileMode}
                onResize={({ x }) => {
                    setDiff2(x);
                }}
                onStop={({ x }) => {
                    setDiff2(0);
                    setDimensionsJS(dimensionsJS + x);
                    setDimensionsCSS(dimensionsCSS - x);
                }}
            />
            <ResizerContent
                hide={mobileMode && !tabsOn.css}
                currentX={mobileMode ? win.width : dimensionsCSS}
                diffX={-diff2}
            >
                <BoxCode title="CSS" language="css" onCodeChange={(value) => setCSSCode(value)} />
            </ResizerContent>
        </CodeBlock>
    );
};

export default BoxCodeBlock;
