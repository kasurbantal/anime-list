import Link from "next/link";
import InputSearch from "@/components/Navbar/InputSearch";
import { signIn } from "next-auth/react";

const Navbar = () => {
  return (
    <header className="bg-color-secondary">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4">
        <Link className="font-bold text-2xl" href="/">
          ANIME-KINI
        </Link>
        <InputSearch />
        <Link href="/api/auth/signin" className="">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
