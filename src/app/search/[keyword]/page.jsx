import AnimeList from "@/components/AnimeList/AnimeList";
import AnimeListHeader from "@/components/AnimeList/AnimeListHeader";
import { getAnimeResponse } from "@/app/libs/api-libs";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <AnimeListHeader title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default SearchPage;
