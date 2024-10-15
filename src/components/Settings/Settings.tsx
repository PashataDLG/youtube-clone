import { Setting, StyledSettings } from "./Settings.style";
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { Text } from "../../utils/text.styles";

interface SettingObjProps {
    label: string;
    icon: JSX.Element;
    value: string;
    onClick: () => void;
};

export const Settings = (): JSX.Element => {
    const SETTINGS = [
        {
            label: "Language",
            icon: <HiLanguage size={23} />,
            value: "English",
            onClick: () => null,
        },
        {
            label: "Appearance",
            icon: <GoMoon size={23} />,
            value: "United States",
            onClick: () => null,
        }
    ];

    return (
        <StyledSettings>
            {SETTINGS.map(({ label, icon, value, onClick }: SettingObjProps) => (
                <Setting key={label} onClick={onClick}>
                    {icon}
                    <Text>{`${label} : ${value}`}</Text>
                </Setting>
            ))}
        </StyledSettings>
    );
};