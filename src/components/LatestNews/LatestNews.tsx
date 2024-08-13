import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList.jsx";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { getLatestNews } from "../../api/apiNews.js";
import { NewsApiResponse } from "../../interfaces/index.js";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
