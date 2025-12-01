import { getData } from '@shared/services/api';
import { DefaultError, queryOptions } from '@tanstack/react-query';
import { SAVINGS_QUERY_KEY } from '../keys/SAVINGS_QUERY_KEY';
import { SAVINGS_ENDPOINT } from '../../services/api/SAVINGS_ENDPOINT';
import { MutatedSavings, Savings } from '../types/savings.types';

export function createSavingsProductsQueryOptions() {
  return queryOptions<Savings[], DefaultError, MutatedSavings[]>({
    queryKey: SAVINGS_QUERY_KEY.get(),
    queryFn: () => getData(SAVINGS_ENDPOINT),
    select: data =>
      data.map(savings => ({
        ...savings,
        id: savings.id,
        name: savings.name,
        annualRateDescription: `연 이자율: ${savings.annualRate}%`,
        description: `${savings.minMonthlyAmount}원 ~ ${savings.maxMonthlyAmount}원 | ${savings.availableTerms}개월`,
      })),
  });
}
