import Link from "next/link";
import InputSearch from "@/components/Navbar/InputSearch";

const Navbar = () => {
  return (
    <header className="bg-yellow-400">
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
        <Link className="font-bold text-blue-700 text-2xl" href="/">
          ANIME-KINI
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
