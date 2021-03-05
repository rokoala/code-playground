import React from 'react';
import Editor from '@monaco-editor/react';
import { BoxContent, Title, Header } from './styles';

interface Props {
    initialValue?: string;
    title?: string;
    language?: string;
    theme?: string;
    onCodeChange: (code: string) => void;
}

const BoxCode: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
    initialValue = '',
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
            height="calc(100% - 35px)"
            width="100%"
            value={initialValue}
            onChange={(value) => {
                onCodeChange(value || '');
            }}
            options={{
                automaticLayout: true,
            }}
            theme={theme}
            language={language}
            defaultValue=""
        />
    </BoxContent>
);

export default BoxCode;
