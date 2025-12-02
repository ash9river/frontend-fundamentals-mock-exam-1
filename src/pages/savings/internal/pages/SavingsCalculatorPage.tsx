import { Border, NavigationBar, Spacing } from 'tosslib';
import { SavingsTabs } from '../components/tab/SavingsTabs';
import { useSelectSavings } from '../hooks/useSelectSavings';
import { SavingsForm } from '../components/form/SavingsForm';
import { useChangeSavingsForm } from '../hooks/useChangeSavingsForm';
import { useSelectSavingsTab } from '../hooks/useSelectSavingsTab';
import { SavingsTabSwitch } from '../components/tab/SavingsTabsSwitch';

export function SavingsCalculatorPage() {
  const { savingsFormState, handleChangeGoalAmount, handleChangeMonthlyDeposit, handleChangeSavingsPeriod } =
    useChangeSavingsForm();
  const { selectedSavings, isSelectedSavings, handleSelectSavings } = useSelectSavings();
  const { tab, isSelectedTab, handleChangeTab } = useSelectSavingsTab();

  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />

      <SavingsForm
        savingsFormState={savingsFormState}
        handleChangeGoalAmount={handleChangeGoalAmount}
        handleChangeMonthlyDeposit={handleChangeMonthlyDeposit}
        handleChangeSavingsPeriod={handleChangeSavingsPeriod}
      />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <SavingsTabs isSelectedTab={isSelectedTab} handleChangeTab={handleChangeTab} />

      <SavingsTabSwitch
        tab={tab}
        productProps={{ isSelectedSavings, handleSelectSavings }}
        resultProps={{ selectedSavings, savingsFormState }}
      />
    </>
  );
}
