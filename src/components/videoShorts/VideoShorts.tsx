import { Video } from "pexels";
import { MoreLessButton, MoreLessContainer, StyledVideoShorts, VideoShortsHeading } from "./VideoShorts.styles";
import { SiYoutubeshorts } from "react-icons/si";
import { Text } from "../../utils/text.styles";
import { useAppContext } from "../../context/App.context";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface IVideoShorts {
    videos: Video[]
};

export const VideoShorts = (props: IVideoShorts): JSX.Element => {
    const [showLess, setShowLess] = useState<boolean>(true);
    const { text } = useAppContext();

    return (
        <StyledVideoShorts>
            <VideoShortsHeading>
                <SiYoutubeshorts size={25} color="red" />
                <Text>{text.shorts}</Text>
            </VideoShortsHeading>
            <MoreLessContainer>
                <MoreLessButton onClick={() => setShowLess(state => !state)}>
                    <Text>{showLess ? text.showMore : text.showLess}</Text>
                    {showLess ?
                        <IoIosArrowDown className="icon" size={20} />
                        :
                        <IoIosArrowUp className="icon" />}
                </MoreLessButton>
            </MoreLessContainer>
        </StyledVideoShorts>
    );
}