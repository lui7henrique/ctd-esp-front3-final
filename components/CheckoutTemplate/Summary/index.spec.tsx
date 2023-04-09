import { render, screen } from "@testing-library/react";

import { CheckoutTemplate } from "..";

describe("checkout-summary", () => {
  describe("when render comics list", () => {
    it("should not be able to render summary without comic on cart", async () => {
      render(<CheckoutTemplate />);

      const emptyMessage = screen.getByText("no comic on cart.");
      expect(emptyMessage).toBeInTheDocument();
    });
  });
});
