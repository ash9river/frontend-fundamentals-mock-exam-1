import { Tab } from 'tosslib';
import { useSelectSavingsTab } from '../hooks/useSelectSavingsTab';
import { SAVINGS_TABS } from '../constants/savingsTabs';

export function SavingsTabs() {
  const { isSelectedTab, handleChangeTab } = useSelectSavingsTab();

  return (
    <Tab onChange={handleChangeTab}>
      {SAVINGS_TABS.map(({ value, label }) => (
        <Tab.Item key={value} value={value} selected={isSelectedTab(value)}>
          {label}
        </Tab.Item>
      ))}
    </Tab>
  );
}
