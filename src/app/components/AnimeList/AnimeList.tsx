import Image from "next/image";

const AnimeList = () => {
  return (
    <div className="grid grid-cols-3 gap-2 h-32">
      <div className="bg-slate-500">
        <Image
          src="https://placehold.co/600x400/png"
          alt="img"
          width={600}
          height={400}
        />
        <div>Judul Di Sini</div>
      </div>
      <div className="bg-slate-500">Kotak 2</div>
      <div className="bg-slate-500">Kotak 3</div>
      <div className="bg-slate-500">Kotak 4</div>
      <div className="bg-slate-500">Kotak 5</div>
      <div className="bg-slate-500">Kotak 6</div>
    </div>
  );
};

export default AnimeList;
