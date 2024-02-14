import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const GetProfileMock = http
  .get<
    never,
    never,
    GetProfileResponse
  >('/me', async () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Jhon Doe',
      email: 'johndoe@example.com',
      phone: '11912341234',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null
    })
  })