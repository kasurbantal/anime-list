import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  //   console.log(anime);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        <div className="pt-4 px-4 flex gap-2 text-color-primary">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
