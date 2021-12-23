import * as http from 'src/http.client'
import type { GenericObject } from '../object'

export interface Folder extends GenericObject {
  contentUrl: string
}

export const listContent = async (path: string): Promise<GenericObject[]> => {
  if (path[path.length - 1] !== '/') {
    path += '/'
  }
  return await http.action('getContainerContent', {
    path: `${path}`
  })
}

export const create = async (path: string, name: string) => {
  return await http.action('createContainer', {
    path: `${path}${name}`
  })
}

export const destroy = async (path: string) => {
  return await http.action('destroyContainer', {
    path: `${path}`
  })
}

export const toTrash = async (path: string) => {
  return await http.action('trashFolder', {
    path: `${path}`
  })
}

export const move = async (path: string, newPath: string) => {
  return await http.action('move', {
    path: `${path}`,
    newPath
  })
}
