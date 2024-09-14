import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import DashboardHeader from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();

  let collection = null;
  if (user) {
    collection = await prisma.collections.findMany({
      where: { user_email: user.email },
    });
  }

  console.log({ collection });
  return (
    <section className="mt-4 px-4 w-full">
      <DashboardHeader title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative border-2 border-color-accent hover:border-color-secondary hover:border-x-8 hover:border-y-8 hover:transition-all "
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_image}
                width={250}
                height={250}
                className="w-full"
              />
              <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-12">
                <h5 className="text-xl text-color-dark text-center">
                  {collect.anime_title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
