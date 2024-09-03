import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="mt-4">
      <h3 className="text-color-secondary text-2xl mb-4 font-bold">
        This is my Collections Page
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={250} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-12">
            <h5 className="text-xl text-color-dark text-center">Anime Title</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
