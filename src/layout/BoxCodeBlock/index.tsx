import React, { useState } from 'react';
import { BoxCode, ResizerBar, ResizerContent } from 'components';
import { useWindowDimensions } from 'utils';
import { CodeBlock } from './styles';

interface Props {
    setJSCode: (code: string) => void;
    setHTMLCode: (code: string) => void;
    setCSSCode: (code: string) => void;
}

const BoxCodeBlock: React.FC<Props> = ({ setJSCode, setHTMLCode, setCSSCode }) => {
    const { width } = useWindowDimensions();

    const [dimensionsHTML, setDimensionsHTML] = useState(width / 3);
    const [dimensionsJS, setDimensionsJS] = useState(width / 3);
    const [dimensionsCSS, setDimensionsCSS] = useState(width / 3);
    const [diff1, setDiff1] = useState(0);
    const [diff2, setDiff2] = useState(0);

    return (
        <CodeBlock>
            <ResizerBar />
            <ResizerContent currentX={dimensionsHTML} diffX={diff1}>
                <BoxCode title="HTML" onCodeChange={(value) => setHTMLCode(value)} />
            </ResizerContent>
            <ResizerBar
                onResize={(n) => {
                    setDiff1(n);
                }}
                onStop={(n) => {
                    setDiff1(0);
                    setDimensionsHTML(dimensionsHTML + n);
                    setDimensionsJS(dimensionsJS - n);
                }}
            />
            <ResizerContent currentX={dimensionsJS} diffX={-diff1 + diff2}>
                <BoxCode
                    title="JS"
                    codeMirrorOptions={{ mode: 'javascript' }}
                    onCodeChange={(value) => setJSCode(value)}
                />
            </ResizerContent>
            <ResizerBar
                onResize={(n) => {
                    setDiff2(n);
                }}
                onStop={(n) => {
                    setDiff2(0);
                    setDimensionsJS(dimensionsJS + n);
                    setDimensionsCSS(dimensionsCSS - n);
                }}
            />
            <ResizerContent currentX={dimensionsCSS} diffX={-diff2}>
                <BoxCode title="CSS" codeMirrorOptions={{ mode: 'css' }} onCodeChange={(value) => setCSSCode(value)} />
            </ResizerContent>
        </CodeBlock>
    );
};

export default BoxCodeBlock;
