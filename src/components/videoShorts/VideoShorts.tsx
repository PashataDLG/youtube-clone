import { Video } from "pexels";
import { MoreLessButton, MoreLessContainer, ShortVideosContainer, StyledVideoShorts, VideoShortsHeading } from "./VideoShorts.styles";
import { SiYoutubeshorts } from "react-icons/si";
import { Text } from "../../utils/text.styles";
import { useAppContext } from "../../context/App.context";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ShortVideoItem } from "../shortsVideoItem/ShortsVideoItem";

interface IVideoShorts {
    videos: Video[]
};

export const VideoShorts = ({ videos }: IVideoShorts): JSX.Element => {
    const [showLess, setShowLess] = useState<boolean>(true);
    const videosList = showLess ? videos.slice(0, videos.length / 2) : videos;
    const { text } = useAppContext();

    return (
        <StyledVideoShorts>
            <VideoShortsHeading>
                <SiYoutubeshorts size={25} color="red" />
                <Text>{text.shorts}</Text>
            </VideoShortsHeading>
            <ShortVideosContainer>
                {videosList.map((video, index) => <ShortVideoItem video={video} />)}
            </ShortVideosContainer>
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