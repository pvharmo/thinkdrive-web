import * as http from 'src/http.client'
import { getUser } from 'src/user'

export interface userScope {
  userId: string
  scopes: string[]
}

export interface SharingStatus {
  globalScopes?: string[]
  usersScope?: userScope[]
}

export const updateStatus = async (path: string, status: SharingStatus) => {
  await http.put(`share/${(await getUser()).id}${path}`, { sharingStatus: status })
}

export const getStatus = async (path: string): Promise<SharingStatus> => {
  return await http.get(`share/${(await getUser()).id}${path}`)
}
