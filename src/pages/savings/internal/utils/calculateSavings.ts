import { MutatedSavings } from '@domains/savings';
import { useChangeSavingsPeriod } from '../hooks/useChangeSavingsPeriod';

type Props = {
  goalAmount: string;
  monthlyDeposit: string;
  period: ReturnType<typeof useChangeSavingsPeriod>['savingsPeriod'];
  annualRate: MutatedSavings['annualRate'];
};

export function calculateSavings({ goalAmount, monthlyDeposit, period, annualRate }: Readonly<Props>) {
  const g = Number(goalAmount);
  const m = Number(monthlyDeposit);
  const n = period;

  const i = annualRate / 12 / 100;

  const maturityAmount = i === 0 ? m * n : m * ((Math.pow(1 + i, n) - 1) / i);

  const totalDeposit = m * n;

  const profit = maturityAmount - totalDeposit;

  const difference = g - maturityAmount;

  // 목표 금액을 맞추기 위한 추천 월 납입액
  const recommendedMonthly = i === 0 ? g / n : (g * i) / (Math.pow(1 + i, n) - 1);

  return [
    {
      label: '예상 수익 금액',
      value: profit,
    },
    {
      label: '목표 금액과의 차이',
      value: difference,
    },
    {
      label: '추천 월 납입 금액',
      value: recommendedMonthly,
    },
  ] satisfies Array<{ label: string; value: number }>;
}
