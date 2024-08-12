


export interface loanData {
    id: number;
    name: string;
    interestRate: number;
    maximumAmount: number;
  }
  
 export  interface loanProductsData {
    loanProducts: loanData[];
  }