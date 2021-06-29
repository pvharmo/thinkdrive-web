import type { GenericObject } from '../object'

export interface File extends GenericObject {
  owner: string | undefined
  ownerAvatar: string | undefined
  lastModified: string
}
