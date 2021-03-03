import React from 'react';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { useSelector } from 'react-redux';
import { CodeState } from 'codeReducer';
import { Button } from 'components/Styled';
import { HeaderTools, MainHeader } from './styles';

const Header: React.FC = () => {
    const { js, html, css } = useSelector<CodeState, CodeState>((state) => state);
    return (
        <>
            <MainHeader>
                <HeaderTools>
                    <Button
                        onClick={() => {
                            const zip = new JSZip();
                            zip.file('index.css', css);
                            zip.file('main.js', js);
                            zip.file('index.html', html);
                            zip.generateAsync({ type: 'blob' }).then((content) => {
                                FileSaver.saveAs(content, 'download.zip');
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
