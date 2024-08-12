import React from "react";
import { render } from "@testing-library/react-native";
import LoanCard from ".";

describe("LoanCard", () => {
  const props = {
    title: "Personal Loan",
    maxAmount: "UGX 10,000,000",
    interestRate: "5%",
    backgroundColor: "#ffffff",
  };

  it("renders the loan title", () => {
    const { getByText } = render(<LoanCard {...props} />);
    expect(getByText("Personal Loan")).toBeTruthy();
  });

  it("renders the loan max amount", () => {
    const { getByText } = render(<LoanCard {...props} />);
    expect(getByText("UGX 10,000,000")).toBeTruthy();
  });

  it("renders the loan interest rate", () => {
    const { getByText } = render(<LoanCard {...props} />);
    expect(getByText("Interest: 5%")).toBeTruthy();
  });

  it("renders the Learn More button", () => {
    const { getByText } = render(<LoanCard {...props} />);
    expect(getByText("Learn More")).toBeTruthy();
  });
});
