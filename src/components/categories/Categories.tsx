import { useAppContext } from "../../context/App.context";
import { CATEGORIES } from "../../utils/categories";
import { Text } from "../../utils/text.styles";
import { ITranslations } from "../../utils/translations";
import { CategoriesCarousel, CategoryItem, StyledCategories } from "./Categories.styles";

export const Categories = (): JSX.Element => {
    const { text, activeCategory, setActiveCategory } = useAppContext();

    return (
        <CategoriesCarousel>
            <StyledCategories>
                {CATEGORIES.map((name, index) => (
                    <CategoryItem
                        active={name.toLowerCase() === activeCategory.toLowerCase()}
                        key={index}
                        onClick={() => setActiveCategory(name)}
                    >
                        <Text>{text[name as keyof ITranslations]}</Text>
                    </CategoryItem>
                ))}
            </StyledCategories>
        </CategoriesCarousel>
    );
};