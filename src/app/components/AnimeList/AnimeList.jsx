import React from "react";
import Image from "next/image";

const AnimeList = ({ title, images }) => {
  return (
    <div className="bg-slate-500">
      <Image src={images} alt={title} width={600} height={400} />
      <h3>{title}</h3>
    </div>
  );
};

export default AnimeList;
