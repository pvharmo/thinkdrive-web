import * as http from 'src/http.client'
import user from 'src/user'

export interface File {
  name: string
  location: string | undefined
  owner: string | undefined
  ownerAvatar: string | undefined
  lastModified: string
  type: string
}

export const list = (path: string) => {
  return http.get(`container/${user.id}${path}`)
}
