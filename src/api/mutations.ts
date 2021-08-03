import { files, folders } from 'src/api/store'
import type { FileData } from 'src/api/File/File'
import type { Folder } from 'src/api/Folder/Folder'

export const setFiles = (newFiles: FileData[]) => {
  files.set(newFiles)
}

export const setFolders = (newFolders: Folder[]) => {
  folders.set(newFolders)
}
