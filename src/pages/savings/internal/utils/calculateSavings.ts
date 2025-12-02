import { MutatedSavings } from '@domains/savings';
import { useChangeSavingsForm } from '../hooks/useChangeSavingsForm';

type Props = {
  savingsFormState: ReturnType<typeof useChangeSavingsForm>['savingsFormState'];
  annualRate?: MutatedSavings['annualRate'];
};

export function calculateSavings({ savingsFormState, annualRate = 0 }: Readonly<Props>) {
  const { goalAmount, monthlyDeposit, savingsPeriod } = savingsFormState;

  const g = Number(goalAmount);
  const m = Number(monthlyDeposit);
  const n = savingsPeriod;

  const i = annualRate / 12 / 100;

  const maturityAmount = i === 0 ? m * n : m * ((Math.pow(1 + i, n) - 1) / i);

  const totalDeposit = m * n;

  const profit = maturityAmount - totalDeposit;

  const difference = g - maturityAmount;

  // 목표 금액을 맞추기 위한 추천 월 납입액
  const recommendedMonthly = i === 0 ? g / n : (g * i) / (Math.pow(1 + i, n) - 1);

  return { profit, difference, recommendedMonthly };
}
