import { api } from "@/lib/axios";

export interface RegisterRestauranteBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestaurante({
  email,
  managerName,
  phone,
  restaurantName
}: RegisterRestauranteBody) {
  await api.post('/restaurants', {
    email,
    managerName,
    phone,
    restaurantName
  })
}