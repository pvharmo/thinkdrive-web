import * as folder from 'src/api/Folder/Folder'
import type { FileData } from 'src/api/File/File'
import { setFiles, setFolders } from './mutations'
import { GenericObject, ObjectType } from './object'

export const fetchFilesAndFolders = async (path: string) => {
  const list: GenericObject[] = await folder.listContent(path)

  const files = list.filter(
    (x) => x.type === ObjectType.object && x.name !== '.thinkdrive.container'
  )
  setFiles(files as FileData[])

  const folders = list.filter((x) => x.type === ObjectType.container)
  setFolders(folders as folder.Folder[])
}
