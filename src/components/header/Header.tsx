import { MouseEventHandler, useEffect, useState } from "react";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import {
    HeaderMoreSection,
    LeftSection, LogoSection,
    SearchBar,
    SearchSection,
    StyledHeader
} from "./Header.styles";
import { SlMenu } from "react-icons/sl";
import { Text } from "../../utils/text.styles";
import { Icon } from '../../utils/icon.styles';
import { AuthButton } from "../authButton/AuthButton";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { Settings } from "../Settings/Settings";
import { useAppContext } from "../../context/App.context";
import { LuSearch } from "react-icons/lu";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const Header = (): JSX.Element => {
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');

    const { text, setSearchBarText } = useAppContext();

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        setSearchText(transcript);
        setSearchBarText(transcript);
    }, [transcript]);

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleVoiceSearchClick: MouseEventHandler<HTMLDivElement> = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            SpeechRecognition.startListening({ continuous: true, interimResults: true });
        };
    };

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
                <SearchSection>
                    <SearchBar>
                        <input
                            value={searchText}
                            placeholder={text.search}
                            onChange={e => setSearchText(e.target.value)}
                        />
                        <Icon
                            data-tooltip-id="search"
                            data-tooltip-content={text.search}
                            onClick={() => setSearchBarText(searchText)}>
                            <LuSearch size={19} />
                        </Icon>
                    </SearchBar>
                    <Icon
                        data-tooltip-id="voiceSearch"
                        data-tooltip-content={text.voiceSearch}
                        onClick={handleVoiceSearchClick}
                        $showBackground
                        className={listening ? 'listening' : ''}>
                        <FaMicrophone size={19} />
                    </Icon>
                </SearchSection>
                <HeaderMoreSection>
                    <Icon
                        data-tooltip-id="settings"
                        data-tooltip-content="Settings"
                        onClick={() => setShowSettings(currentState => !currentState
                        )}>
                        <CgMoreVerticalAlt size={21} />
                    </Icon>
                    <AuthButton />
                    {showSettings && <Settings />}
                </HeaderMoreSection>
            </StyledHeader>
        </>
    );
};