import React, { useState } from 'react';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { useSelector } from 'react-redux';
import { CodeState } from 'reducers/codeReducer';
import { Button } from 'components/Styled';
import { TitleInput } from 'components';
import { HeaderTools, MainHeader } from './styles';

const Header: React.FC = () => {
    const defaultTitle = 'Untitled';

    const { js, html, css } = useSelector<CodeState, CodeState>((state) => state);

    const [fileName, setFileName] = useState('');

    return (
        <>
            <MainHeader>
                <TitleInput
                    placeholder={defaultTitle}
                    onTitleChange={(title) => {
                        setFileName(title);
                    }}
                />
                <HeaderTools>
                    <Button
                        onClick={() => {
                            const zip = new JSZip();
                            zip.file('index.css', css);
                            zip.file('main.js', js);
                            zip.file('index.html', html);
                            zip.generateAsync({ type: 'blob' }).then((content) => {
                                FileSaver.saveAs(content, `${fileName || defaultTitle}.zip`);
                            });
                        }}
                    >
                        Download
                    </Button>
                </HeaderTools>
            </MainHeader>
        </>
    );
};

export default Header;
