import { http, HttpResponse } from 'msw'

import { GetOrderDetailsParams, GetOrderDetailsResponse } from '../get-order-details'

export const GetOrderDetailsMock = http
  .get<
    GetOrderDetailsParams,
    never,
    GetOrderDetailsResponse
  >('/orders/:orderId', ({ params }) => {
    return HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'Jhon Doe',
        email: 'johndoe@example.com',
        phone: '11912341234',
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      orderItems: [
        {
          id: 'order-item-1',
          priceInCents: 1000,
          product: {
            name: 'Pizza Peperoni'
          },
          quantity: 1
        },
        {
          id: 'order-item-2',
          priceInCents: 2000,
          product: {
            name: 'Pizza Marguerita'
          },
          quantity: 1
        },
      ],
      totalInCents: 3000,
    })
  })