import type { GenericObject } from '../object'
import * as http from 'src/http.client'

export interface FileData extends GenericObject {
  lastModified: string
  contentUrl: string
}

export const destroy = async (path: string) => {
  return await http.action('destroyFile', {
    path: `${path}`
  })
}

export const move = async (path: string, newPath: string) => {
  return await http.action('moveFile', {
    path: `${path}`,
    newPath
  })
}

export const upload = async (path: string, file: File) => {
  const { presignedUrl } = await http.action('uploadFile', {
    path: `${path}`
  })
  await fetch(presignedUrl, { method: 'PUT', body: file })
}

export const download = async (path: string) => {
  const { presignedUrl } = await http.action('getFile', {
    path: `${path}`
  })
  window.open(presignedUrl)
}
