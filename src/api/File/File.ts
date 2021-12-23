import type { GenericObject } from '../object'
import * as http from 'src/http.client'

export interface FileData extends GenericObject {
  lastModified: string
  contentUrl: string
}

export const destroy = async (path: string) => {
  return await http.action('destroy', {
    path: `${path}`
  })
}

export const toTrash = async (path: string) => {
  return await http.action('trash', {
    path: `${path}`
  })
}

export const move = async (path: string, newPath: string) => {
  return await http.action('move', {
    path: `${path}`,
    newPath
  })
}

export const upload = async (path: string, file: File) => {
  const { presignedUrl } = await http.action('upload', {
    path: `${path}`
  })
  await fetch(presignedUrl, { method: 'PUT', body: file })
}

export const download = async (path: string) => {
  const { presignedUrl } = await http.action('get', {
    path: `${path}`
  })
  window.open(presignedUrl)
}
