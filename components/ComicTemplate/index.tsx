import Image from "next/image";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

import { Comic } from "types/getComic";
import { formatCurrency } from "utils/currency/format";
import Link from "next/link";
import { getIdByResourceURI } from "utils/characters/getIdByResourceURI";

type ComicProps = {
  comic: Comic;
};

export const ComicTemplate = (props: ComicProps) => {
  const {
    comic: { thumbnail, title, prices, description, characters, ...comic },
  } = props;

  const image = `${thumbnail.path}.${thumbnail.extension}`;
  const price = prices[0].price;

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="1fr 3fr"
        padding="1rem 0"
        gap="1rem"
      >
        <Box width="100%" height="50vh" position="relative">
          <Image src={image} alt={title} layout="fill" objectFit="contain" />
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
                  {title}
                </Typography>
              </Box>

              <Box display="flex" gap="1rem" alignItems="center">
                {price ? (
                  <>
                    <Typography
                      variant="h2"
                      color="#fff"
                      fontWeight="bold"
                      fontSize="1.2rem"
                    >
                      {formatCurrency(price)}
                    </Typography>

                    <Tooltip title="Buy comic! 😻">
                      <IconButton
                        sx={{
                          background: "#e62429",

                          "&:hover": {
                            background: "#e62429",
                          },
                        }}
                      >
                        <ShoppingCart />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <Typography variant="h2" color="#fff" fontWeight="bold">
                    Out of stock 😿
                  </Typography>
                )}
              </Box>
            </Box>

            <Box
              width="100%"
              borderBottom="1px solid #272727"
              margin="1rem 0"
            />
            <Typography color="#ccc">{description}</Typography>

            <Box marginY="1rem">
              <Typography
                variant="h4"
                fontSize="1.1rem"
                fontWeight="bold"
                color="#ccc"
              >
                Characters:
              </Typography>

              <Box>
                {characters.items.map((character) => {
                  const { resourceURI, name } = character;
                  const id = getIdByResourceURI(resourceURI);

                  return (
                    <Box>
                      <Link href={`/characters/${id}`}>
                        <a
                          style={{
                            fontSize: "1rem",
                            color: "#ccc",
                            textDecoration: "none",
                          }}
                        >
                          {character.name}
                        </a>
                      </Link>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
