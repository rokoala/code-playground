import React, { useState } from 'react';

import { ButtonNav, CodeNav } from './styles';

interface TabsControl {
    html: boolean;
    js: boolean;
    css: boolean;
    result: boolean;
}

interface Props {
    onTabChange: (tab: TabsControl) => void;
}

const MobileEditorNav: React.FC<Props> = ({ onTabChange }) => {
    const [activeTabs, setActiveTabs] = useState<TabsControl>({ html: true, js: false, css: false, result: true });

    const handleTabClick = (tabs: TabsControl) => {
        setActiveTabs(tabs);
        onTabChange(tabs);
    };

    return (
        <CodeNav>
            <ButtonNav
                isActive={activeTabs.html}
                onClick={() => {
                    handleTabClick({ ...activeTabs, ...{ html: true, js: false, css: false } });
                }}
            >
                HTML
            </ButtonNav>
            <ButtonNav
                isActive={activeTabs.js}
                onClick={() => {
                    handleTabClick({ ...activeTabs, ...{ html: false, js: true, css: false } });
                }}
            >
                JS
            </ButtonNav>
            <ButtonNav
                isActive={activeTabs.css}
                onClick={() => {
                    handleTabClick({ ...activeTabs, ...{ html: false, js: false, css: true } });
                }}
            >
                CSS
            </ButtonNav>
        </CodeNav>
    );
};

export default MobileEditorNav;
