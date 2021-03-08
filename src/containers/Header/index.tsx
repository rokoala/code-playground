import React, { useState } from 'react';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { ApplicationState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import { CodeState } from 'reducers/codeReducer';
import { TitleInput, LayoutButton } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/Styled';
import { setLayout, setLayout2, setLayout3 } from 'actions/actions';
import { Logo, HeaderTools, MainHeader, HideMobile, DownloadButton } from './styles';

const Header: React.FC = () => {
    const defaultTitle = 'Untitled';

    const dispatch = useDispatch();

    const { js, html, css } = useSelector<ApplicationState, CodeState>((state) => state.code);

    const [fileName, setFileName] = useState('');

    return (
        <>
            <MainHeader>
                <Logo />
                <TitleInput
                    placeholder={defaultTitle}
                    onTitleChange={(title) => {
                        setFileName(title);
                    }}
                />
                <HeaderTools>
                    <HideMobile>
                        <LayoutButton>
                            <Button margin="5px" onClick={() => dispatch(setLayout2())}>
                                Left Code
                            </Button>
                            <Button margin="5px" onClick={() => dispatch(setLayout())}>
                                Top Code
                            </Button>
                            <Button margin="5px" onClick={() => dispatch(setLayout3())}>
                                Right Code
                            </Button>
                        </LayoutButton>
                    </HideMobile>
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
