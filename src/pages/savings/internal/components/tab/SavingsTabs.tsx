import { Tab } from 'tosslib';
import { SAVINGS_TABS } from '../../constants/savingsTabs';
import { useSelectSavingsTab } from '../../hooks/useSelectSavingsTab';

type Props = Pick<ReturnType<typeof useSelectSavingsTab>, 'isSelectedTab' | 'handleChangeTab'>;

export function SavingsTabs({ isSelectedTab, handleChangeTab }: Readonly<Props>) {
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
