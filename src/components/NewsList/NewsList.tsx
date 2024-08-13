import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeletons = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeletons;
