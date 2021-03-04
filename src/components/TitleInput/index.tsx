import React, { useState } from 'react';
import { EditButton, TitleText, TitleEditInput, TitleWrapper } from './styles';

interface Props {
    placeholder?: string;
    onTitleChange?: (title: string) => void;
}

const TitleInput: React.FC<Props> = ({ placeholder = '', onTitleChange }) => {
    const [title, setTitle] = useState('');
    const [editTitle, setEditTitle] = useState(false);

    return (
        <TitleWrapper>
            {editTitle ? (
                <TitleEditInput
                    autoFocus
                    onBlur={() => {
                        setEditTitle(false);
                    }}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        if (onTitleChange) onTitleChange(e.target.value);
                    }}
                    value={title}
                    type="text"
                />
            ) : (
                <TitleText>{title || placeholder}</TitleText>
            )}
            <EditButton onClick={() => setEditTitle(true)}>edit</EditButton>
        </TitleWrapper>
    );
};

export default TitleInput;
