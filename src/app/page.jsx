import AnimeList from "../components/AnimeList/AnimeList";
import AnimeListHeader from "../components/AnimeList/AnimeListHeader";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      <section>
        <AnimeListHeader
          title="Paling Populer"
          linkTitle="Lihat semua"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
