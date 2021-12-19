export interface User {
  id: string
}

let user: User

export const getUser = async () => {
  if (!user) {
    await fetchUser()
  }
  return user
}

export const fetchUser = async () => {
  user = {
    id: '123456'
  }
}
