import { useAppContext } from "../../context/App.context";
import { Content } from "../content/Content";
import { Menu } from "../menu/Menu";
import { StyledBody } from "./Body.styles";

export const Body = (): JSX.Element => {
    const { isMenuSmall } = useAppContext();

    return(
        <StyledBody $isMenuSmall={isMenuSmall}>
            <Menu />
            <Content />
        </StyledBody>
    );
};