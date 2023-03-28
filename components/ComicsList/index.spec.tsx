import { render, screen } from "@testing-library/react";
import { ComicsList, ComicsListTestId } from ".";
import LayoutGeneral from "../layouts/layout-general";
import { ComicCard, ComicCardTestId } from "./card";
import { comics } from "./mock";

describe("ComicsList", () => {
  describe("when render comics list", () => {
    it("should be able to display grid with a maximum of 12 squares.", async () => {
      render(<ComicsList comics={comics} />);
      const comicsList = screen.getAllByTestId(ComicCardTestId);

      expect(comicsList).toHaveLength(12);
    });

    it("should be able to each comic must contain image and name, along with: buy and see details", async () => {
      const comic = comics[0];

      const { thumbnail } = comic;
      const image = `${thumbnail.path}.${thumbnail.extension}`;

      render(<ComicCard comic={comic} />);

      const img = screen.getByRole("img");
      expect(img).toHaveStyle(`backgroundImage: url(${image})`);

      const buy = screen.getByText("Buy");
      expect(buy).toBeInTheDocument();

      const details = screen.getByText("See more");
      expect(details).toBeInTheDocument();
    });

    it("should be use the general Layout, which contains both a navigable header and a footer with predefined information.", async () => {
      render(
        <LayoutGeneral>
          <ComicsList comics={comics} />
        </LayoutGeneral>
      );

      const header = screen.getByRole("header");
      expect(header).toBeInTheDocument();

      const footer = screen.getByRole("footer");
      expect(footer).toBeInTheDocument();

      const comicsList = screen.getByTestId(ComicsListTestId);
      expect(comicsList).toBeInTheDocument();
    });
  });
});
