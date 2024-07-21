import AnimeList from "./components/AnimeList/AnimeList";

const Home = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const anime = await res.json();
  console.log(anime);

  return (
    <div>
      <h1>Paling Populer</h1>
      {anime.data?.map((data) => {
        return (
          <AnimeList
            key={data.mal_id}
            title={data.title}
            images={data.images.webp.image_url}
          />
        );
      })}
    </div>
  );
};

export default Home;
