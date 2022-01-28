import * as http from 'src/http.client'
import type { GenericObject } from '../object'

export interface Folder extends GenericObject {
  contentUrl: string
}

export const listContent = async (path: string): Promise<GenericObject[]> => {
  if (path[path.length - 1] !== '/') {
    path += '/'
  }
  return await http.action('getFolder', {
    path: `${path}`
  })
}

export const create = async (path: string, name: string) => {
  return await http.action('createFolder', {
    path: `${path}${name}`
  })
}

export const destroy = async (path: string) => {
  return await http.action('destroyFolder', {
    path: `${path}`
  })
}

export const move = async (path: string, newPath: string) => {
  return await http.action('moveFolder', {
    path: `${path}`,
    newPath
  })
}
