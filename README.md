# Deno Tree

[![Test](https://github.com/KSXGitHub/deno-tree/workflows/Test/badge.svg)](https://github.com/KSXGitHub/deno-tree/actions?query=workflow%3ATest)

[Deno](https://deno.land)'s library to traverse filesystem tree.

## Usage

### Async

```typescript
import traverse from 'https://ksxgithub.github.io/deno-tree/async.ts'

for await (const item of traverse('.', () => true)) {
  console.log(
    item.isDirectory ? 'dir' : 'file',
    item.container + '/' + item.info.name
  )
}
```

## TODO

* [ ] Test
* [ ] Sync version

## License

[MIT](https://git.io/Jv5km) © [Hoàng Văn Khải](https://github.com/KSXGitHub)
