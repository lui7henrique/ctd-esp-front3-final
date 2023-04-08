import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { v4 } from "uuid";

import { faqsData } from "./data";

export const FaqTemplate = () => {
  return (
    <Box my={4}>
      {faqsData.map((question) => {
        console.log({ question });

        return (
          <Accordion key={v4()}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${v4()}-content`}
              id={`${v4()}-header`}
            >
              <Typography>{question.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};
