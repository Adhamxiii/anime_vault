"use server";

import AnimeCard, { type AnimeProp } from "@/components/AnimeCard";
import { createElement } from "react";

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data.map((anime: AnimeProp, index: number) =>
    createElement(AnimeCard, { key: anime.id, anime, index })
  );
}
