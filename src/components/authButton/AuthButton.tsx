import React from 'react';
import { StyledAuthButton } from './AuthButton.style';
import { FaUserCircle } from "react-icons/fa";
import { Text } from '../../utils/text.styles';

export const AuthButton = (): JSX.Element => {
    return (
        <StyledAuthButton>
            <FaUserCircle size={22} />
            <Text>Sign In</Text>
        </StyledAuthButton>
    )
}