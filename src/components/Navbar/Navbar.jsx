import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-yellow-400">
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
        <Link className="font-bold text-blue-700 text-2xl" href="/">
          ANIME-KINI
        </Link>
        <input placeholder="Looking for anime..." className="" />
      </div>
    </header>
  );
};

export default Navbar;
