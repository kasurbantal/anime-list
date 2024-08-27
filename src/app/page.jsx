import AnimeList from "../components/AnimeList/AnimeList";
import AnimeListHeader from "../components/AnimeList/AnimeListHeader";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = { data: recommendedAnime.slice(0, 8) };

  return (
    <>
      <section>
        <AnimeListHeader
          title="Most Popular"
          linkTitle="Lihat semua"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <AnimeListHeader title="Recommendations" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Home;
