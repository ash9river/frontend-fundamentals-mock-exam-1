export type { MutatedSavings } from './internal/queries/types/savings.types';

import { createSavingsProductsQueryOptions } from './internal/queries/options/createSavingsProductsQueryOptions';

export const SavingsQueryOptions = {
  get: createSavingsProductsQueryOptions,
} as const;
