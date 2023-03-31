export const getIdByResourceURI = (uri: string) => {
  const id = uri.split("/characters/")[1];

  return id;
};
