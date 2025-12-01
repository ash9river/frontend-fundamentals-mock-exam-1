import { calculateSavings } from '../../utils/calculateSavings';
import { SavingsListItem } from '../list/SavingsListItem';

type Props = Parameters<typeof calculateSavings>[0];

export function SavingsResults(props: Readonly<Props>) {
  const items = calculateSavings(props);

  return (
    <>
      {items.map(v => (
        <SavingsListItem key={v.label} type="1RowTypeA" top={v.label} bottom={`${v.value}원`} />
      ))}
    </>
  );
}
