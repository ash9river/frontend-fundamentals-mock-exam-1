import { SelectBottomSheet, Spacing, TextField } from 'tosslib';
import { useChangeSavingsForm } from '../../hooks/useChangeSavingsForm';

type Props = ReturnType<typeof useChangeSavingsForm>;

export function SavingsForm({
  savingsFormState,
  handleChangeGoalAmount,
  handleChangeMonthlyDeposit,
  handleChangeSavingsPeriod,
}: Readonly<Props>) {
  return (
    <>
      <TextField
        label="목표 금액"
        placeholder="목표 금액을 입력하세요"
        suffix="원"
        value={savingsFormState.goalAmount}
        onChange={e => handleChangeGoalAmount(e.currentTarget.value)}
      />

      <Spacing size={16} />

      <TextField
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
        value={savingsFormState.monthlyDeposit}
        onChange={e => handleChangeMonthlyDeposit(e.currentTarget.value)}
      />

      <Spacing size={16} />

      <SelectBottomSheet
        label="저축 기간"
        title="저축 기간을 선택해주세요"
        value={savingsFormState.savingsPeriod}
        onChange={handleChangeSavingsPeriod}
      >
        <SelectBottomSheet.Option value={6}>6개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={12}>12개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={24}>24개월</SelectBottomSheet.Option>
      </SelectBottomSheet>
    </>
  );
}
