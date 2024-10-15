import { StyledAuthButton } from './AuthButton.style';
import { FaUserCircle } from "react-icons/fa";
import { Text } from '../../utils/text.styles';
import { useAppContext } from '../../context/App.context';

export const AuthButton = (): JSX.Element => {
    const { text } = useAppContext();

    return (
        <StyledAuthButton>
            <FaUserCircle size={22} />
            <Text className='auth'>{text.signIn}</Text>
        </StyledAuthButton>
    )
}