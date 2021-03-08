import React, { useState } from 'react';

import { ButtonNav, CodeNav } from './styles';

interface TabsControl {
    html: boolean;
    js: boolean;
    css: boolean;
}

interface Props {
    onTabChange: (tab: string, tabs: TabsControl) => void;
}

const MobileEditorNav: React.FC<Props> = ({ onTabChange }) => {
    const [activeTabs, setActiveTabs] = useState<TabsControl>({ html: true, js: false, css: false });

    const handleTabClick = (tab: string, tabs: TabsControl) => {
        setActiveTabs(tabs);
        onTabChange(tab, tabs);
    };

    return (
        <CodeNav>
            <ButtonNav
                isActive={activeTabs.html}
                onClick={() => {
                    handleTabClick('html', { ...activeTabs, ...{ html: true, js: false, css: false } });
                }}
            >
                HTML
            </ButtonNav>
            <ButtonNav
                isActive={activeTabs.js}
                onClick={() => {
                    handleTabClick('js', { ...activeTabs, ...{ html: false, js: true, css: false } });
                }}
            >
                JS
            </ButtonNav>
            <ButtonNav
                isActive={activeTabs.css}
                onClick={() => {
                    handleTabClick('css', { ...activeTabs, ...{ html: false, js: false, css: true } });
                }}
            >
                CSS
            </ButtonNav>
        </CodeNav>
    );
};

export default MobileEditorNav;
