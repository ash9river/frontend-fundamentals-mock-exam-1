import { Spacing } from 'tosslib';
import { SavingsListItem } from '../list/SavingsListItem';
import { useSelectSavings } from '../../hooks/useSelectSavings';

type Props = Pick<ReturnType<typeof useSelectSavings>, 'selectedSavings'>;

export function NoResultForNotSelectedSavings({ selectedSavings }: Readonly<Props>) {
  const isNotSelected = selectedSavings?.id === '';

  return (
    <>
      <Spacing size={40} />
      {isNotSelected && <SavingsListItem type="1RowTypeA" top="상품을 선택해주세요." isSelected={false} />}
    </>
  );
}
