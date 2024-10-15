import { StyledAuthButton } from './AuthButton.style';
import { FaUserCircle } from "react-icons/fa";
import { Text } from '../../utils/text.styles';

export const AuthButton = (): JSX.Element => {
    return (
        <StyledAuthButton>
            <FaUserCircle size={22} />
            <Text className='auth'>Sign In</Text>
        </StyledAuthButton>
    )
}