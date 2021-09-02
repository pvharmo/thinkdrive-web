import type { GenericObject } from '../object'
import * as http from 'src/http.client'
import { getUser } from 'src/user'

export interface FileData extends GenericObject {
  lastModified: string
}

export const destroy = async (path: string) => {
  return await http.del(`object/${(await getUser()).id}${path}`)
}

export const toTrash = async (path: string) => {
  return await http.put(`object/trash/${(await getUser()).id}${path}`)
}

export const move = async (path: string, newPath: string) => {
  return await http.put(`object/move/${(await getUser()).id}${path}`, {
    newPath
  })
}

export const upload = async (path: string, file: File) => {
  const { presignedUrl } = await http.post(`object/${(await getUser()).id}${path}`)
  await fetch(presignedUrl, { method: 'PUT', body: file })
}

export const download = async (path: string) => {
  const { presignedUrl } = await http.get(`object/${(await getUser()).id}${path}`)
  window.open(presignedUrl)
}
