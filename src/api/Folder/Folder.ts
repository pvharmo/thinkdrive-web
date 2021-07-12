import * as http from 'src/http.client'
import user from 'src/user'
import type { GenericObject } from '../object'

export interface Folder extends GenericObject {}

export const listContent = async (path: string) => {
  if (path[path.length - 1] !== '/') {
    path += '/'
  }
  return await http.get(`container/${user.id}${path}`)
}

export const create = async (path: string, name: string) => {
  return await http.post(`container/${user.id}${path}${name}`)
}

export const destroy = async (path: string) => {
  return await http.del(`container/${user.id}${path}`)
}

export const move = async (path: string, newPath: string) => {
  return await http.put(`container/${user.id}${path}`, {
    newPath
  })
}
