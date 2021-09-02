const apiBasePath = 'http://drive.local.io/.ory/kratos/public'

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
  const res = await fetch(apiBasePath + '/sessions/whoami')
  const data = await res.json()
  if (data.error?.code === 401) {
    throw 'User is not logged in'
  }
  user = data.identity
}
