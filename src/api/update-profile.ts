import { api } from '@/lib/axios'

interface UpdateProfile {
  name: string
  description: string
}

export async function updateProfile({ description, name }: UpdateProfile) {
  await api.put('/profile', { description, name })
}