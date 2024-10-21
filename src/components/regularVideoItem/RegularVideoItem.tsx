import { Video } from "pexels";
import { RegularVideoContent, RegularVideoPic, RegularVideoThumnail, RegularVideoTitleSubtitle, StyledRegularVideoItem, Time } from "./RegularVideoItem.styles";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/text.styles";
import { getTitle } from "../../utils/videos";

interface IRegularVideoItem {
    video: Video
};

export const RegularVideoItem = ({ video }: IRegularVideoItem): JSX.Element => {
    const [playTrailer, setPlayTrailer] = useState<boolean>(false);
    const { isMenuSmall } = useAppContext();
    const TITLE_LENGTH: number = 50;

    return (
        <StyledRegularVideoItem
            onMouseOver={() => setPlayTrailer(true)}
            onMouseOut={() => setPlayTrailer(false)}
        >
            <RegularVideoThumnail $isMenuSmall={isMenuSmall}>
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
                <Time>
                    <Text>
                        {Math.floor(video.duration / 60)} : {Math.floor(video.duration % 60)}
                    </Text>
                </Time>
            </RegularVideoThumnail>
            <RegularVideoContent>
                <RegularVideoPic>
                    <img src={video.image} alt="profile pic" />
                </RegularVideoPic>
                <RegularVideoTitleSubtitle>
                    <Text className="videoItemTitle">
                        {getTitle(video.url).slice(0, TITLE_LENGTH)}
                        {getTitle(video.url).length > TITLE_LENGTH && "..."}
                    </Text>
                    <Text className="name">
                        {video.user.name}
                    </Text>
                    <Text className="details">
                        {video.duration}M views <span className="dot">&#9679;</span> 2 hours ago
                    </Text>
                </RegularVideoTitleSubtitle>
            </RegularVideoContent>
        </StyledRegularVideoItem>
    );
};