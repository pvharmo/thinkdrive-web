import type { GenericObject } from '../object'
import * as http from 'src/http.client'
import user from 'src/user'

export interface File extends GenericObject {
  lastModified: string
}

export const destroy = async (path: string) => {
  return await http.del(`object/${user.id}${path}`)
}

export const move = async (path: string, newPath: string) => {
  return await http.put(`object/${user.id}${path}`, {
    newPath
  })
}
