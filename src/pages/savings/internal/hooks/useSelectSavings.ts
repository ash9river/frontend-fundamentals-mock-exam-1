import { MutatedSavings } from '@domains/savings';
import { useState } from 'react';

type Key = MutatedSavings | null;

export function useSelectSavings() {
  const [selectedSavings, setSelectedSavings] = useState<Key>(null);

  function isSelectedSavings(id: MutatedSavings['id']) {
    if (!selectedSavings) {
      return false;
    }
    if (selectedSavings.id === id) {
      return true;
    }
    return false;
  }

  function handleSelectSavings(value: Key) {
    setSelectedSavings(value);
  }

  return {
    selectedSavings,
    isSelectedSavings,
    handleSelectSavings,
  };
}
