import { Result } from "types/getCharacter";
import { CharacterCard } from "../CharacterCard";

import Grid from "@mui/material/Grid";

type CharactersListProps = {
  characters: Result[];
};

export const CharactersList = (props: CharactersListProps) => {
  const { characters } = props;

  return (
    <>
      <Grid container spacing={2}>
        {characters.map((character) => {
          return (
            <Grid item xs={2}>
              <CharacterCard character={character} key={character.id} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
