"use client";

import AnimeList from "@/components/AnimeList/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const PopularPage = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await res.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination />
    </>
  );
};

export default PopularPage;
