import { render, screen } from "@testing-library/react";
import { CheckoutTemplate } from ".";
import { personalDataTestId } from "./PersonalData";
import { addressTestId } from "./Address";
import { paymentTestId } from "./Payment";
import { summaryTestId } from "./Summary";

describe("checkout", () => {
  describe("when render checkout template", () => {
    it("should be able to render personal data section", async () => {
      render(<CheckoutTemplate />);

      const personalData = screen.getByTestId(personalDataTestId);
      expect(personalData).toBeInTheDocument();
    });

    it("should be able to render address section", async () => {
      render(<CheckoutTemplate />);

      const address = screen.getByTestId(addressTestId);
      expect(address).toBeInTheDocument();
    });

    it("should be able to render payment section", async () => {
      render(<CheckoutTemplate />);

      const payment = screen.getByTestId(paymentTestId);
      expect(payment).toBeInTheDocument();
    });

    it("should be able to render summary section", async () => {
      render(<CheckoutTemplate />);

      const summary = screen.getByTestId(summaryTestId);
      expect(summary).toBeInTheDocument();
    });
  });
});
