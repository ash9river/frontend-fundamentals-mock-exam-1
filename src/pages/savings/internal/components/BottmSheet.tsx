import { SelectBottomSheet } from 'tosslib';
import { useChangeSavingsPeriod } from '../hooks/useChangeSavingsPeriod';

type Props = ReturnType<typeof useChangeSavingsPeriod>;

export function BottomSheet({ savingsPeriod, handleChangeSavingsPeriod }: Readonly<Props>) {
  return (
    <SelectBottomSheet
      label="저축 기간"
      title="저축 기간을 선택해주세요"
      value={savingsPeriod}
      onChange={handleChangeSavingsPeriod}
    >
      <SelectBottomSheet.Option value={6}>6개월</SelectBottomSheet.Option>
      <SelectBottomSheet.Option value={12}>12개월</SelectBottomSheet.Option>
      <SelectBottomSheet.Option value={24}>24개월</SelectBottomSheet.Option>
    </SelectBottomSheet>
  );
}
