import AnimeList from "../components/AnimeList/AnimeList";
import AnimeListHeader from "../components/AnimeList/AnimeListHeader";

const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await res.json();

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
      <section>
        <AnimeListHeader
          title="Paling Baru"
          linkTitle="Ikuti sekarang"
          linkHref="/new"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
