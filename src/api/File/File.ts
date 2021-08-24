import type { GenericObject } from '../object'
import * as http from 'src/http.client'
import user from 'src/user'

export interface FileData extends GenericObject {
  lastModified: string
}

export const destroy = async (path: string) => {
  return await http.del(`object/${user.id}${path}`)
}

export const move = async (path: string, newPath: string) => {
  return await http.put(`object/move/${user.id}${path}`, {
    newPath
  })
}

export const upload = async (path: string, file: File) => {
  const { presignedUrl } = await http.post(`object/${user.id}${path}`)
  await fetch(presignedUrl, { method: 'PUT', body: file })
}

export const download = async (path: string) => {
  const { presignedUrl } = await http.get(`object/${user.id}${path}`)
  window.open(presignedUrl)
}
