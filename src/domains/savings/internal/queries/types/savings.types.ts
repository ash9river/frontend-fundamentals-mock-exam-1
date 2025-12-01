export type Savings = {
  id: string;
  name: string;
  annualRate: number;
  availableTerms: number;
  minMonthlyAmount: number;
  maxMonthlyAmount: number;
};

export type MutatedSavings = {
  annualRateDescription: string;
  description: string;
} & Savings;
