import * as folder from '../Folder/Folder'
import { directory } from '../../stores/filesystem'
import {get} from 'svelte/store'

export const createFolder = async (name: string) => {
  folder.create(get(directory).format(), name)
}