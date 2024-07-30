import AnimeList from "@/components/AnimeList/AnimeList";
import AnimeListHeader from "@/components/AnimeList/AnimeListHeader";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );
  const searchAnime = await res.json();

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
