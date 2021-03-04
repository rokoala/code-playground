import React, { useState } from 'react';
import { BoxCode, ResizerBar, ResizerContent } from 'components';
import { useWindowDimensions } from 'utils';
import { CodeBlock } from './styles';

interface Props {
    height?: number;
    setJSCode: (code: string) => void;
    setHTMLCode: (code: string) => void;
    setCSSCode: (code: string) => void;
}

const BoxCodeBlock: React.FC<Props> = ({ height = 300, setJSCode, setHTMLCode, setCSSCode }) => {
    const { width } = useWindowDimensions();

    const [dimensionsHTML, setDimensionsHTML] = useState(width / 3);
    const [dimensionsJS, setDimensionsJS] = useState(width / 3);
    const [dimensionsCSS, setDimensionsCSS] = useState(width / 3);
    const [diff1, setDiff1] = useState(0);
    const [diff2, setDiff2] = useState(0);

    return (
        <CodeBlock height={height}>
            <ResizerBar />
            <ResizerContent currentX={dimensionsHTML} diffX={diff1}>
                <BoxCode title="HTML" language="html" onCodeChange={(value) => setHTMLCode(value)} />
            </ResizerContent>
            <ResizerBar
                onResize={({ x }) => {
                    setDiff1(x);
                }}
                onStop={({ x }) => {
                    setDiff1(0);
                    setDimensionsHTML(dimensionsHTML + x);
                    setDimensionsJS(dimensionsJS - x);
                }}
            />
            <ResizerContent currentX={dimensionsJS} diffX={-diff1 + diff2}>
                <BoxCode title="JS" onCodeChange={(value) => setJSCode(value)} />
            </ResizerContent>
            <ResizerBar
                onResize={({ x }) => {
                    setDiff2(x);
                }}
                onStop={({ x }) => {
                    setDiff2(0);
                    setDimensionsJS(dimensionsJS + x);
                    setDimensionsCSS(dimensionsCSS - x);
                }}
            />
            <ResizerContent currentX={dimensionsCSS} diffX={-diff2}>
                <BoxCode title="CSS" language="css" onCodeChange={(value) => setCSSCode(value)} />
            </ResizerContent>
        </CodeBlock>
    );
};

export default BoxCodeBlock;
