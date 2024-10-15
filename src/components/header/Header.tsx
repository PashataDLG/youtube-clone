import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { HeaderMoreSection, LeftSection, LogoSection, SearchSection, StyledHeader } from "./Header.styles";
import { SlMenu } from "react-icons/sl";
import { Text } from "../../utils/text.styles";
import { Icon } from "../../utils/icon.styles";
import { AuthButton } from "../authButton/AuthButton";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { Settings } from "../Settings/Settings";



export const Header = (): JSX.Element => {
    const [showSettings, setShowSettings] = React.useState(false);

    return (
        <>
            <StyledHeader>
                <LeftSection>
                    <Icon className="menu">
                        <SlMenu size={17} />
                    </Icon>
                    <LogoSection to="/">
                        <FaYoutube color='FF0000' size={30} />
                        <Text className="logo">YouTube</Text>
                    </LogoSection>
                </LeftSection>
                <SearchSection>Search Section</SearchSection>
                <HeaderMoreSection>

                    <Icon data-tooltip-id="settings" data-tooltip-content="Settings" onClick={() => setShowSettings(currentState => !currentState)}>
                        <CgMoreVerticalAlt size={21} />
                    </Icon>
                    <AuthButton />
                    {showSettings && <Settings />}
                </HeaderMoreSection>
            </StyledHeader>
        </>
    );
};