import { writable } from 'svelte/store'
import nodePath, {PathObject} from 'path-browserify'

export class Path {
  #path: PathObject
  #isFolder: boolean

  constructor(path: string | Path) {
    if (typeof path == 'string') {
      this.#path = nodePath.parse(path)
      this.#isFolder = path.substr(-1) == "/"
    } else {
      this.#path = path.attributes
      this.#isFolder = path.isFolder
    }
  }

  format(): string {
    return nodePath.format(this.#path) + (this.#isFolder? '/': '')
  }

  toArray(): string[] {
    return this.format().split('/')
  }

  get isAbsolutePath(): boolean {
    return nodePath.isAbsolute(this.format())
  }

  get isFolder() {
    return this.#isFolder
  }

  get attributes() {
    return this.#path
  }

  get name() {
    return this.#path.name
  }

  join(path: string): Path {
    const newPath: string = nodePath.join(this.format(), path)
    return new Path(newPath)
  }

  dir(): Path {
    return new Path(this.#path.dir)
  }
}

function createPathStore() {
  const { subscribe, set, update } = writable<Path>(new Path('/123456/'));

  return {
    subscribe,
    join: (name: string) => update(path => path.join(name)),
    dir: () => update(path => path.dir()),
    set: (path: string | Path) => set(new Path(path))
  }
}

export const directory = createPathStore();