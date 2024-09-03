import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="mt-8 flex flex-col justify-center items-center text-color-primary">
      <h5 className="mb-2 text-2xl font-bold">Welcome, {user.name} </h5>
      <Image src={user.image} alt="image" width={250} height={250} />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collections"
          className="bg-color-secondary text-color-dark font-bold px-4 py-2 text-xl rounded-full transition-all"
        >
          My Collections
        </Link>
        <Link
          href="/users/dashboard/comments"
          className="bg-color-secondary text-color-dark font-bold px-4 py-2 text-xl rounded-full transition-all"
        >
          My Comments
        </Link>
      </div>
    </div>
  );
};

export default Page;
