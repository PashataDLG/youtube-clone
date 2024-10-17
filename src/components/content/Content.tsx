import { Categories } from "../categories/Categories";
import { StyledContent } from "./Context.styles";

export const Content = (): JSX.Element => {
    return(
        <StyledContent>
            <Categories />
        </StyledContent>
    );
};