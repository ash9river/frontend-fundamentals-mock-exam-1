import { Border, Spacing } from 'tosslib';
import { useSelectSavings } from '../../../hooks/useSelectSavings';
import { calculateSavings } from '../../../utils/calculateSavings';
import { SavingsListItem } from '../../list/SavingsListItem';
import { RecommendSavingsList } from '../../list/RecommendSavingsList';
import { SavingsFormState } from '../../../types/SavingsFormState.types';

type Props = {
  savingsFormState: SavingsFormState;
} & Pick<ReturnType<typeof useSelectSavings>, 'selectedSavings'>;

export function SavingsResultTabContent({ selectedSavings, savingsFormState }: Readonly<Props>) {
  const hasSelected = selectedSavings !== null;

  if (!hasSelected) {
    return (
      <>
        <Spacing size={40} />
        <SavingsListItem type="1RowTypeA" top="상품을 선택해주세요." isSelected={false} />
      </>
    );
  }

  const { profit, difference, recommendedMonthly } = calculateSavings({
    savingsFormState,
    annualRate: selectedSavings.annualRate,
  });

  return (
    <>
      <SavingsListItem type="2RowTypeA" top="예상 수익 금액" bottom={`${profit}원`} />
      <SavingsListItem type="2RowTypeA" top="목표 금액과의 차이" bottom={`${difference}원`} />
      <SavingsListItem type="2RowTypeA" top="추천 월 납입 금액" bottom={`${recommendedMonthly}원`} />

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <RecommendSavingsList />
    </>
  );
}
