import { getData } from '@shared/services/api';
import { queryOptions } from '@tanstack/react-query';
import { SAVINGS_PRODUCTS_ENDPOINT } from '../../services/api/SAVINGS_PRODUCTS_ENDPOINT';
import { SAVINGS_PRODUCTS_QUERY_KEY } from '../keys/SAVINGS_PRODUCT_QUERY_KEY';

export function createSavingsProductsQueryOptions() {
  return queryOptions({
    queryKey: SAVINGS_PRODUCTS_QUERY_KEY.get(),
    queryFn: () => getData(SAVINGS_PRODUCTS_ENDPOINT),
  });
}
