import Link from "next/link";
import AnimeList from "./components/AnimeList/AnimeList";

const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await res.json();

  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="font-bold text-2xl">Paling Populer</h1>
        <Link
          href="/populer"
          className="text-xl underline hover:text-indigo-500 transition-all"
        >
          Lihat semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data?.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
