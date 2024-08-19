import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList.jsx";
import { useGetLatestNewsQuery } from "../../store/services/newsApi.js";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
