import { Categories } from "../categories/Categories";
import { HomepageVideos } from "../homepageVideos/HomepageVideos";
import { StyledContent } from "./Content.styles";

export const Content = (): JSX.Element => {
    return(
        <StyledContent>
            <Categories />
            <HomepageVideos />
        </StyledContent>
    );
};