import * as folder from 'src/api/Folder/Folder'
import type { File } from 'src/api/File/File'
import { setFiles, setFolders } from './mutations'
import { GenericObject, ObjectType } from './object'

export const fetchFilesAndFolders = async (path: string) => {
  const list: GenericObject[] = await folder.list(path)

  const files = list.filter(
    (x) => x.type === ObjectType.object && x.name !== '.thinkdrive.container'
  )
  setFiles(files as File[])

  const folders = list.filter((x) => x.type === ObjectType.container)
  setFolders(folders as folder.Folder[])
}
