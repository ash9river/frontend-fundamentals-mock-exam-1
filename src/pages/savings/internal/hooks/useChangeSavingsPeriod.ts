import { useState } from 'react';

export function useChangeSavingsPeriod() {
  const [savingsPeriod, setSavingsPeriod] = useState<6 | 12 | 24>(12);

  function handleChangeSavingsPeriod(value: 6 | 12 | 24) {
    switch (value) {
      case 6:
      case 12:
      case 24:
        setSavingsPeriod(value);
        break;
      default:
        throw new Error('저축 기간이 잘못되었습니다.');
    }
  }

  return { savingsPeriod, handleChangeSavingsPeriod };
}
