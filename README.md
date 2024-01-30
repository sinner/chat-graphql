# How was built this project

## Prerequisites
Node.js 20.11.3 or higher

## Create project
```bash
npx typeorm init --name MyProject --database postgres
```

## tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true, /* Enable importing .json files. */
    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
    "strict": true, /* Enable all strict type-checking options. */
    "skipLibCheck": true, /* Skip type checking all .d.ts files. */
  }
}
```

## Install Some Dependencies
```shell
npm i dotenv express cors graphql-yoga graphql
npm i -D nodemon @types/express @types/cors
```

## Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## Working with TypeORM

Create an Entity class in `src/entity` folder, after that you can generate a migration file and run it executing the following commands:

```shell
# npm typeorm migration:generate -- -d <path/to/datasource> path/to/migrations/<migration-name>
npm run typeorm migration:generate -- -d ./src/data-source.ts ./src/migration/initial --outputJs
npm run typeorm migration:run
```

TypeORM will only run migrations from .js files, so you need to generate the migration file with the `--outputJs` flag (-o).
