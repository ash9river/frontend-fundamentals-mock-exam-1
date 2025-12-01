import { useState } from 'react';
import { SAVINGS_TABS } from '../constants/savingsTabs';

export type SavingsTabType = (typeof SAVINGS_TABS)[number]['value'];

export function useSelectSavingsTab() {
  const [tab, setTab] = useState<SavingsTabType>('products');

  function handleChangeTab(value: string) {
    if (value === 'products' || value === 'result') {
      setTab(value);
    }
  }

  function isSelectedTab(value: SavingsTabType) {
    return tab === value;
  }

  return {
    isSelectedTab,
    handleChangeTab,
  };
}
