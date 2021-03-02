import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/theme/moxer.css';

import { Title, Header } from './styles';

interface Props {
    title: string;
    onCodeChange: (code: string) => void;
    codeMirrorOptions?: CodeMirror.EditorConfiguration;
}

const BoxCode: React.FC<Props> = ({ title = '', onCodeChange, codeMirrorOptions = {} }: Props) => (
    <>
        <Header>
            <Title>{title}</Title>
        </Header>
        <CodeMirror
            options={{ mode: 'xml', theme: 'moxer', lineNumbers: true, ...codeMirrorOptions }}
            value=""
            onChange={(code) => onCodeChange(code)}
        />
    </>
);
export default BoxCode;
