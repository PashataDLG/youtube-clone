import { Video } from "pexels";
import { StyledVideoShorts, VideoShortsHeading } from "./VideoShorts.styles";
import { SiYoutubeshorts } from "react-icons/si";

interface IVideoShorts {
    videos: Video[]
};

export const VideoShorts = (props: IVideoShorts): JSX.Element => {
    return (
        <StyledVideoShorts>
            <VideoShortsHeading>
            <SiYoutubeshorts size={25} color="red"/>
            </VideoShortsHeading>
        </StyledVideoShorts>
    );
}