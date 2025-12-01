export const SAVINGS_QUERY_KEY = {
  index: ['savings-products'],
  get: () => [...SAVINGS_QUERY_KEY.index, 'get'],
} as const;
