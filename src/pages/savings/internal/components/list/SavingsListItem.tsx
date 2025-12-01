import { MutatedSavings } from '@domains/savings';
import { Assets, ListRow, colors } from 'tosslib';

type ListRowTextParameters = Parameters<typeof ListRow.Texts>[0];

type Type = ListRowTextParameters['type'];

interface Props {
  type: Type;
  isSelected?: boolean;
  onClick?: () => void;
  top: MutatedSavings['name'];
  middle?: MutatedSavings['annualRateDescription'];
  bottom?: MutatedSavings['description'] | 'string';
}

export function SavingsListItem({ type, isSelected, onClick, top, middle = '', bottom = '' }: Readonly<Props>) {
  const variant = {
    '3RowTypeA': {
      topProps: { fontSize: 16, fontWeight: 'bold', color: colors.grey900 },
      middleProps: { fontSize: 14, color: colors.blue600, fontWeight: 'medium' },
      bottomProps: { fontSize: 13, color: colors.grey600 },
    },
    '2RowTypeA': {
      topProps: { color: colors.grey600 },
      middleProps: {},
      bottomProps: { fontWeight: 'bold', color: colors.blue600 },
    },
    '1RowTypeA': {
      topProps: {},
      middleProps: {},
      bottomProps: {},
    },
  } as const;

  return (
    <ListRow
      contents={
        <ListRow.Texts
          type={type}
          top={top}
          topProps={variant[type].topProps}
          middle={middle}
          middleProps={variant[type].middleProps}
          bottom={bottom}
          bottomProps={variant[type].bottomProps}
        />
      }
      right={isSelected && <Assets.Icon name="icon-check-circle-green" />}
      onClick={onClick}
    />
  );
}
