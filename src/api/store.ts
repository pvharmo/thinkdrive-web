import { writable } from 'svelte/store'
import type { FileData } from 'src/api/File/File'
import type { Folder } from 'src/api/Folder/Folder'
import type { GenericObject } from './object'

export const files = writable<FileData[]>([])
export const folders = writable<Folder[]>([])

export const metadata = writable<GenericObject | undefined>(undefined)
