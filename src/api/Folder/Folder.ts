import * as http from 'src/http.client'
import user from 'src/user'
import type { GenericObject } from '../object'

export interface Folder extends GenericObject {
  owner: string | undefined
  ownerAvatar: string | undefined
}

export const list = async (path: string) => {
  console.log(path)
  if (path[path.length - 1] !== '/') {
    path += '/'
  }
  return await http.get(`container/${user.id}${path}`)
}

export const create = async (path: string, name: string) => {
  await http.post(`container/${user.id}${path}${name}`)
}
