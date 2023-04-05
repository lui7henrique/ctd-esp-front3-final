import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Character } from "types/getCharacter";

type CharacterTemplateProps = {
  character: Character;
};

export const CharacterTemplate = (props: CharacterTemplateProps) => {
  const { character } = props;
  const { thumbnail, name, description } = character;

  const image = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="1fr 3fr"
        padding="1rem 0"
        gap="1rem"
      >
        <Box width="100%" height="50vh" position="relative">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </Box>

        <Box width="100%" display="flex" flexDirection="column" gap="1rem">
          <Box sx={{ background: "#121214" }} padding="1rem">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h1"
                  color="#fff"
                  fontWeight="bold"
                  fontSize="1.2rem"
                >
                  {name}
                </Typography>
              </Box>
            </Box>

            <Box
              width="100%"
              borderBottom="1px solid #272727"
              margin="1rem 0"
            />
            <Typography color="#ccc">{description}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
