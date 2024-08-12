import { gql } from "@apollo/client";


export const GET_LOAN_PRODUCT_DATA = gql`
  query loanProducts {
    loanProducts {
      id,
      name,
      interestRate,
      maximumAmount
    }
  }
`;