import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const GetManagedRestaurantMock = http
  .get<
    never,
    never,
    GetManagedRestaurantResponse
  >('/managed-restaurant', async () => {
    return HttpResponse.json({
      id: 'custom-restaurant-id',
      name: 'Pizza Shop',
      description: 'custom restaurant description',
      managerId: 'custom-manager-id',
      createdAt: new Date(),
      updatedAt: null
    })
  })