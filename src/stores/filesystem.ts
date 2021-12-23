import { writable } from 'svelte/store'
import nodePath, {PathObject} from 'path-browserify'

export class Path {
  #path: PathObject

  constructor(path: string | Path) {
    if (typeof path == 'string') {
      this.#path = nodePath.parse(path)
    } else {
      this.#path = path.attributes
    }
  }

  format(): string {
    return nodePath.format(this.#path)
  }

  toArray(): string[] {
    return this.format().split('/')
  }

  get isAbsolutePath(): boolean {
    return nodePath.isAbsolute(this.format())
  }

  get attributes() {
    return this.#path
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