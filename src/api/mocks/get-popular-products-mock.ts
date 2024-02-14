import { http, HttpResponse } from 'msw'

import { GetPropularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http
  .get<
    never,
    never,
    GetPropularProductsResponse
  >('/metrics/popular-products', async () => {
    return HttpResponse.json([
      { product: 'Pizza 1', amount: 1 },
      { product: 'Pizza 2', amount: 2 },
      { product: 'Pizza 3', amount: 3 },
      { product: 'Pizza 4', amount: 4 },
      { product: 'Pizza 5', amount: 5 },
    ])
  })