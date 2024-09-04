import Image from "next/image";
import Link from "next/link";
import DashboardHeader from "@/components/Dashboard/Header";

const Page = () => {
  return (
    <section className="mt-4 px-4 w-full">
      <DashboardHeader title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={250} height={250} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-12">
            <h5 className="text-xl text-color-dark text-center">Anime Title</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
