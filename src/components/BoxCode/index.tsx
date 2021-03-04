import React from 'react';
import Editor from '@monaco-editor/react';
import { BoxContent, Title, Header } from './styles';

interface Props {
    title: string;
    language?: string;
    theme?: string;
    onCodeChange: (code: string) => void;
}

const BoxCode: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
    title = '',
    theme = 'vs-dark',
    language = 'javascript',
    onCodeChange,
}: Props) => (
    <BoxContent>
        <Header>
            <Title>{title}</Title>
        </Header>
        <Editor
            height="100%"
            onChange={(value) => {
                onCodeChange(value || '');
            }}
            theme={theme}
            language={language}
            defaultValue=""
        />
    </BoxContent>
);

export default BoxCode;
