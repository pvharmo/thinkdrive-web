import * as http from 'src/http.client'
import user from 'src/user'

export interface userScope {
  userId: string
  scopes: string[]
}

export interface SharingStatus {
  globalScopes?: string[]
  usersScope?: userScope[]
}

export const updateStatus = async (path: string, status: SharingStatus) => {
  await http.put(`share/${user.id}${path}`, { sharingStatus: status })
}

export const getStatus = async (path: string): Promise<SharingStatus> => {
  return await http.get(`share/${user.id}${path}`)
}
