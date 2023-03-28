import { generateAuthenticationString } from "dh-marvel/services/marvel/marvel-auth.service";

import axios from "axios";
import md5 from "js-md5";

const MARVEL_API_URL = process.env.NEXT_PUBLIC_MARVEL_API_URL;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY;

const ts = +new Date();

export const marvel = axios.create({
  baseURL: MARVEL_API_URL,
  params: {
    apikey: PUBLIC_KEY,
    ts: ts,
    hash: md5
      .create()
      .update(ts + (PRIVATE_KEY ? PRIVATE_KEY : "") + PUBLIC_KEY)
      .toString(),
  },
});

const fetchApi = async (endpoint: string, urlParams?: string) => {
  const auth = generateAuthenticationString();

  const url = `${MARVEL_API_URL}/${endpoint}?${auth}&${urlParams || ""}`;
  const response = await fetch(url);

  return await response.json();
};

export const getComics = async (offset?: number, limit?: number) => {
  const params = new URLSearchParams();
  if (offset) params.set("offset", `${offset}`);
  if (limit) params.set("limit", `${limit}`);
  return fetchApi("comics", params.toString());
};

export const getComic = async (comicId: number) => {
  const data = await fetchApi(`comics/${comicId}`);
  const results = data.data.results;
  if (results.length > 0) {
    const comic = results[0];
    if (`${comic.id}`.endsWith("0")) {
      comic.price = 48;
      comic.oldPrice = 48;
      comic.stock = 0;
    } else {
      comic.price = 72;
      comic.oldPrice = 87;
      comic.stock = 2;
    }
    return comic;
  } else return null;
};

// export const getCharacter = async (id: number) => {
//   const {}
// };

export const getCharacter = async (characterId: number) => {
  const data = await fetchApi(`characters/${characterId}`);
  const results = data.data.results;
  if (results.length > 0) return results[0];
  else return null;
};
