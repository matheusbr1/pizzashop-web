import { api } from "@/lib/axios";

type Role = 'manager' | 'customer'

export interface GetProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: Role
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')
  return response.data
}