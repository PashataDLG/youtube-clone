import { Video } from "pexels";
import { StyledRegularVideoItem } from "./RegularVideoItem.styles";

interface IRegularVideoItem {
    video: Video
};

export const RegularVideoItem = ({ video }: IRegularVideoItem): JSX.Element => {
    return <StyledRegularVideoItem>RegularVideoItem</StyledRegularVideoItem>
};