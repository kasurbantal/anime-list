import Link from "next/link";
import InputSearch from "@/components/Navbar/InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-secondary">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4">
        <Link className="font-bold text-2xl" href="/">
          ANIME-KINI
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
