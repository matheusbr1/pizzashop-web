import { http, HttpResponse } from 'msw'

import { RegisterRestauranteBody } from '../register-restaurant'

export const registerRestaurantsMock = http
  .post<never, RegisterRestauranteBody>('/restaurants', async ({ request }) => {
    const { email } = await request.json()

    if (email === 'Pizza Shop') {
      return new HttpResponse(null, {
        status: 201,
      })
    }

    return new HttpResponse(null, { status: 400 })
  })