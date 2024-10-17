import { useAppContext } from "../../context/App.context";
import { MENU_SMALL } from "../../utils/SideMenu";
import { MenuItem, StyledMenu } from "./Menu.styles";
import { Text } from "../../utils/text.styles";
import { ITranslations } from "../../utils/translations";

export const Menu = (): JSX.Element => {
    const { isMenuSmall, text } = useAppContext();

    if (isMenuSmall) {
       return <StyledMenu>
            {MENU_SMALL.map(({ name, icon }) => (
                <MenuItem className="small">
                    {icon}
                    <Text>{text[name as keyof ITranslations]}</Text>
                </MenuItem>
            ))}
        </StyledMenu>
    };

    return (
        <StyledMenu>Menu</StyledMenu>
    );
};