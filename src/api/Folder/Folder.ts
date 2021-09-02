import * as http from 'src/http.client'
import { getUser } from 'src/user'
import type { GenericObject } from '../object'

export interface Folder extends GenericObject {}

export const listContent = async (path: string) => {
  if (path[path.length - 1] !== '/') {
    path += '/'
  }
  console.log(await getUser())
  console.log(path)
  return await http.get(`container/${(await getUser()).id}${path}`)
}

export const create = async (path: string, name: string) => {
  return await http.post(`container/${(await getUser()).id}${path}${name}`)
}

export const destroy = async (path: string) => {
  return await http.del(`container/${(await getUser()).id}${path}`)
}

export const toTrash = async (path: string) => {
  return await http.put(`object/trash/${(await getUser()).id}${path}`)
}

export const move = async (path: string, newPath: string) => {
  return await http.put(`container/move/${(await getUser()).id}${path}`, {
    newPath
  })
}
