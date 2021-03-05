import React, { useState } from 'react';
import { BoxCodeBlock, ResizerBar } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { CodeState } from 'reducers/codeReducer';
import { setCSS, setHTML, setJS } from 'actions/actions';
import { useWindowDimensions } from 'utils';
import { Content, Preview } from './styles';

const SimpleCodeContent: React.FC = () => {
    const { js, html, css } = useSelector<CodeState, CodeState>((state) => state);
    const { height } = useWindowDimensions();

    const dispatch = useDispatch();

    const [boxCodeHeight, setBoxCodeHeight] = useState(350);

    return (
        <Content>
            <BoxCodeBlock
                height={boxCodeHeight}
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
                limit={{ ymin: 150, ymax: height - 100 }}
                onResize={({ y }) => {
                    setBoxCodeHeight(boxCodeHeight + y);
                }}
                isVertical
            />
            <Preview
                sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                title="preview"
                srcDoc={`${html} <style>${css}</style><script>${js}</script>`}
            />
        </Content>
    );
};

export default SimpleCodeContent;
