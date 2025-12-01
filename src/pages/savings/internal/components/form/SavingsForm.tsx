import { Spacing, TextField } from 'tosslib';
import { BottomSheet } from '../BottmSheet';

type;

export function SavingsForm() {
  return (
    <>
      <TextField label="목표 금액" placeholder="목표 금액을 입력하세요" suffix="원" />
      <Spacing size={16} />
      <TextField label="월 납입액" placeholder="희망 월 납입액을 입력하세요" suffix="원" />
      <Spacing size={16} />

      <BottomSheet savingsPeriod={savingsPeriod} handleChangeSavingsPeriod={handleChangeSavingsPeriod} />
    </>
  );
}
