import Link from "next/link";

const AnimeListHeader = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm underline text-color-primary hover:text-color-secondary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default AnimeListHeader;
