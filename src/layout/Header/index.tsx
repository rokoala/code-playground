import React, { useState } from 'react';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { useSelector } from 'react-redux';
import { CodeState } from 'reducers/codeReducer';
import { DownloadButton } from 'components/Styled';
import { TitleInput } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Logo, HeaderTools, MainHeader } from './styles';

const Header: React.FC = () => {
    const defaultTitle = 'Untitled';

    const { js, html, css } = useSelector<CodeState, CodeState>((state) => state);

    const [fileName, setFileName] = useState('');

    return (
        <>
            <MainHeader>
                <Logo imgUrl={`${process.env.PUBLIC_URL}/logo192.png`} />
                <TitleInput
                    placeholder={defaultTitle}
                    onTitleChange={(title) => {
                        setFileName(title);
                    }}
                />
                <HeaderTools>
                    <DownloadButton
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
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Download</span>
                    </DownloadButton>
                </HeaderTools>
            </MainHeader>
        </>
    );
};

export default Header;
