export const SAVINGS_PRODUCTS_QUERY_KEY = {
  index: ['savings-products'],
  get: () => [...SAVINGS_PRODUCTS_QUERY_KEY.index, 'get'],
} as const;
