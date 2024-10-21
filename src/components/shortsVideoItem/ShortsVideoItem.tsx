import { useState } from "react";
import { useAppContext } from "../../context/App.context";
import { StyledShortVideoItem, StyledShortVideoThumbnail } from "./ShortsVideoItems.styles";
import ReactPlayer from "react-player";
import { Video } from "pexels";
import { Text } from "../../utils/text.styles";
import { getTitle } from "../../utils/videos";

interface IShortsVideoItem {
    video: Video;
}

export const ShortVideoItem = ({ video }: IShortsVideoItem): JSX.Element => {
    const [playTrailer, setPlayTrailer] = useState<boolean>(false);
    const { isMenuSmall } = useAppContext();
    const TITLE_LENGTH: number = 50;

    return (
        <StyledShortVideoItem
            onMouseOver={() => setPlayTrailer(true)}
            onMouseOut={() => setPlayTrailer(false)}
        >
            <StyledShortVideoThumbnail $isMenuSmall={isMenuSmall}>
                {playTrailer ? (
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        controls={false}
                        volume={1}
                        muted={false}
                        style={{ height: "100%", width: "100%" }}
                        playing={playTrailer}
                        url={video.video_files[0].link}
                    />
                ) : (
                    <img src={video.image} alt="thumbnail" />
                )}
            </StyledShortVideoThumbnail>
            <Text className="videoItemTitle">
                {getTitle(video.url).slice(0, TITLE_LENGTH)}
                {getTitle(video.url).length > TITLE_LENGTH && "..."}
            </Text>
            <Text className="details">
                {video.duration}M views
            </Text>
        </StyledShortVideoItem>
    );
};