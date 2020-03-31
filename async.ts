import { join } from './deps.ts'

/**
 * Type of values that {@link traverseFileSystem} yields
 */
export interface Item {
  /** Path to directory that contains current item */
  readonly container: string
  /** Stat info and name of current item */
  readonly info: Deno.FileInfo
  /** Wether current item is a directory */
  readonly isDirectory: boolean
}

/**
 * Traverse a file system tree
 * @param container Root of the tree
 * @param deep Determine whether a particular directory should be explored
 * @returns An async iterator of {@link Item}
 */
export async function * traverseFileSystem (
  container: string,
  deep: (param: Item) => boolean
): AsyncGenerator<Item, void, unknown> {
  for (const info of await Deno.readdir(container)) {
    const isDirectory = info.isDirectory()
    const item: Item = {
      container,
      info,
      isDirectory
    }
    yield item
    if (isDirectory && deep(item)) {
      yield * traverseFileSystem(join(container, info.name!), deep)
    }
  }
}

export default traverseFileSystem
