import React, { useState } from 'react';
import { Resizer, BoxCode, MobileEditorNav } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { CodeState } from 'reducers/codeReducer';
import { LayoutState } from 'reducers/layoutReducer';
import { ApplicationState } from 'store/store';
import { setCSS, setHTML, setJS } from 'actions/actions';
import { ResizerWrapperDirection } from 'components/Resizer/styles';
import { useWindowDimensions } from 'utils';
import { Preview } from './styles';

const SimpleCodeContentMobile: React.FC = () => {
    const { js, html, css } = useSelector<ApplicationState, CodeState>((state) => state.code);
    const dispatch = useDispatch();
    const [currentTab, setCurrentTab] = useState('html');

    const getBoxCode = (tab: string) => {
        switch (tab) {
            case 'js':
                return <BoxCode title="JS" initialValue={js} onCodeChange={(value) => dispatch(setJS(value))} />;

            case 'css':
                return (
                    <BoxCode
                        title="CSS"
                        initialValue={css}
                        language="css"
                        onCodeChange={(value) => dispatch(setCSS(value))}
                    />
                );

            default:
                return (
                    <BoxCode
                        title="HTML"
                        initialValue={html}
                        language="html"
                        onCodeChange={(value) => dispatch(setHTML(value))}
                    />
                );
        }
    };

    return (
        <>
            <MobileEditorNav
                onTabChange={(tab) => {
                    setCurrentTab(tab);
                }}
            />
            <Resizer barSize={18} direction="vertical">
                {getBoxCode(currentTab)}
                <Preview
                    sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                    title="preview"
                    srcDoc={`${html} <style>${css}</style><script>${js}</script>`}
                />
            </Resizer>
        </>
    );
};

const SimpleCodeContent: React.FC = () => {
    const { mobile } = useWindowDimensions();
    const { js, html, css } = useSelector<ApplicationState, CodeState>((state) => state.code);
    const layout = useSelector<ApplicationState, LayoutState>((state) => state.layout);

    const dispatch = useDispatch();

    return (
        <>
            {mobile ? (
                <SimpleCodeContentMobile />
            ) : (
                <Resizer barSize={18} direction={layout.main as ResizerWrapperDirection} reverse={layout.reverse}>
                    <Resizer barSize={18} direction={layout.code as ResizerWrapperDirection}>
                        <BoxCode
                            title="HTML"
                            initialValue={html}
                            language="html"
                            onCodeChange={(value) => dispatch(setHTML(value))}
                        />
                        <BoxCode title="JS" initialValue={js} onCodeChange={(value) => dispatch(setJS(value))} />
                        <BoxCode
                            title="CSS"
                            initialValue={css}
                            language="css"
                            onCodeChange={(value) => dispatch(setCSS(value))}
                        />
                    </Resizer>
                    <Preview
                        sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                        title="preview"
                        srcDoc={`${html} <style>${css}</style><script>${js}</script>`}
                    />
                </Resizer>
            )}
        </>
    );
};

export default SimpleCodeContent;
