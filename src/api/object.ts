export enum ObjectType {
  container = 'container',
  object = 'object'
}

export interface GenericObject {
  name: string
  type: ObjectType
  location: string
  owner: string | undefined
  ownerAvatar: string | undefined
}
