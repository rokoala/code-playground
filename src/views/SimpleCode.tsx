import React, { useState } from 'react';
import { BoxCodeBlock, Header } from 'layout';
import { useSelector, useDispatch } from 'react-redux';
import { CodeState } from 'codeReducer';
import { setCSS, setHTML, setJS } from 'actions';
import { ResizerBar } from 'components';
import { Content, Preview } from './styles';

const SimpleCode: React.FC = () => {
    const { js, html, css } = useSelector<CodeState, CodeState>((state) => state);

    const dispatch = useDispatch();

    const [boxCodeBlockDim, setBoxCodeBlockDim] = useState({ width: 0, height: 350 });

    return (
        <>
            <Header />
            <Content>
                <BoxCodeBlock
                    height={boxCodeBlockDim.height}
                    setCSSCode={(code) => {
                        dispatch(setCSS(code));
                    }}
                    setJSCode={(code) => {
                        dispatch(setJS(code));
                    }}
                    setHTMLCode={(code) => {
                        dispatch(setHTML(code));
                    }}
                />
                <ResizerBar
                    limit={{ ymin: 150, ymax: 800 }}
                    onResize={({ y }) => {
                        setBoxCodeBlockDim({ ...boxCodeBlockDim, height: boxCodeBlockDim.height + y });
                    }}
                    isVertical
                />
                <Preview
                    sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                    title="preview"
                    srcDoc={`${html} <style>${css}</style><script>${js}</script>`}
                />
            </Content>
        </>
    );
};

export default SimpleCode;
