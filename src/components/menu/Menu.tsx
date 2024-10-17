import { useAppContext } from "../../context/App.context";
import { MENU_LARGE, MENU_SMALL } from "../../utils/SideMenu";
import { LargeMenuSection, MenuItem, StyledMenu } from "./Menu.styles";
import { Text } from "../../utils/text.styles";
import { ITranslations } from "../../utils/translations";

export const Menu = (): JSX.Element => {
    const { isMenuSmall, text } = useAppContext();

    if (isMenuSmall) {
        return <StyledMenu>
            {MENU_SMALL.map(({ name, icon }) => (
                <MenuItem className="small" key={name}>
                    {icon}
                    <Text>{text[name as keyof ITranslations]}</Text>
                </MenuItem>
            ))}
        </StyledMenu>
    } else {
        return (
            <StyledMenu>
                {MENU_LARGE.map(({ title, list }, index) => (
                    <LargeMenuSection>
                        {title && <Text className="title">{text[title as keyof ITranslations]}</Text>}
                        {list.map(({ name, icon }) => (
                            <MenuItem className="large" key={name}>
                                {icon}
                                <Text>{text[name as keyof ITranslations]}</Text>
                            </MenuItem>
                        ))}
                    </LargeMenuSection>
                ))}
            </StyledMenu>
        );
    }

};