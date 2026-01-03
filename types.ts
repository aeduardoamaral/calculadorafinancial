
export enum CalculatorType {
  COMPOUND_INTEREST = 'COMPOUND_INTEREST',
  LOAN_AMORTIZATION = 'LOAN_AMORTIZATION',
  SAVINGS_GOAL = 'SAVINGS_GOAL'
}

export interface InvestmentData {
  initialAmount: number;
  monthlyContribution: number;
  annualRate: number;
  periodYears: number;
}

export interface LoanData {
  loanAmount: number;
  interestRate: number;
  termMonths: number;
}

export interface SavingsGoalData {
  targetAmount: number;
  currentSavings: number;
  annualRate: number;
  timeframeMonths: number;
}

export interface ChartDataPoint {
  period: number;
  total: number;
  invested: number;
  interest: number;
}
