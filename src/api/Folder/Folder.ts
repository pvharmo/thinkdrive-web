import * as http from 'src/http.client'
import user from 'src/user'

export interface Folder {
  name: string
  location: string | undefined
  owner: string | undefined
  ownerAvatar: string | undefined
  lastModified: string
}

export const list = async (path: string) => {
  return await http.get(`container/${user.id}/${path}`)
}
