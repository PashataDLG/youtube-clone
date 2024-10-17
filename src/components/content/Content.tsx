import { Categories } from "../categories/Categories";
import { StyledContent } from "./Content.styles";

export const Content = (): JSX.Element => {
    return(
        <StyledContent>
            <Categories />
        </StyledContent>
    );
};