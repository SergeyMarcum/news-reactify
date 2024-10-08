import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoryType } from "../../interfaces";

interface Props {
  categories: CategoryType[];
  setSelectedCategory: (category: CategoryType | null) => void;
  selectedCategory: CategoryType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>

        {categories.map((category) => {
          return (
            <button
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
