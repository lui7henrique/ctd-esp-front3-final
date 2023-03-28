import md5 from "md5";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY;

export const generateAuthenticationString = () => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);
  const auth = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  return auth;
};
