import { createSavingsProductsQueryOptions } from './internal/queries/options/createSavingsProductsQueryOptions';
import { SAVINGS_PRODUCTS_ENDPOINT } from './internal/services/api/SAVINGS_PRODUCTS_ENDPOINT';

export const SavingsQueryOptions = {
  get: createSavingsProductsQueryOptions,
  asd: SAVINGS_PRODUCTS_ENDPOINT,
} as const;
