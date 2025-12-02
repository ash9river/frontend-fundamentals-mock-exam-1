import { QUERY_OPTIONS } from '@shared/queries';
import { useQuery } from '@tanstack/react-query';
import { SavingsListItem } from '../list/SavingsListItem';
import { useSelectSavings } from '../../hooks/useSelectSavings';

type Props = Pick<ReturnType<typeof useSelectSavings>, 'isSelectedSavings' | 'handleSelectSavings'>;

export function SavingsProductTabContent({ isSelectedSavings, handleSelectSavings }: Readonly<Props>) {
  const { data = [] } = useQuery(QUERY_OPTIONS.savings.get());

  // 데이터 isLoading, skellton 등을 할 수 있으나, 연습용인데 아는걸 굳이?
  return (
    <>
      {data.map(savings => (
        <SavingsListItem
          key={`savings-list-${savings.id}`}
          type="3RowTypeA"
          top={savings.name}
          middle={savings.annualRateDescription}
          bottom={savings.description}
          isSelected={isSelectedSavings(savings.id)}
          onClick={() => handleSelectSavings(savings)}
        />
      ))}
    </>
  );
}
