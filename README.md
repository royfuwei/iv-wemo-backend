Wemo Backend Engineer 題目實作
===

## Document
- [面試專案題目](./doc/interview-project.md)
- [開發文件](./doc/development/README.md)
- [DB 相關資訊](./doc/db/README.md)

---

## 環境變數
- `PORT`: server port`3000`
- `DB_HOST`: postgresql 的連線位址, 預設為`postgis`
- `DB_PORT`: postgresql 的連線port, 預設為`5432`
- `DB_USER`: postgresql 的username
- `DB_PASSWORD`: postgresql 的password
- `DB_SYNC`: default: `false`

---
## How to start 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

Nest is [MIT licensed](LICENSE).
