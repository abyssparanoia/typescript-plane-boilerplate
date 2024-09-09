# DB schema migration について

- typeORM の migration 機能で管理しています。

## usage

- migration file 作成

```sh
> pnpm workspace @typescript-plane-boilerplate/backend migration:generate -n added_displayname
```

- migration を走らせる

```sh
> pnpm workspace @typescript-plane-boilerplate/backend migration:run
```
