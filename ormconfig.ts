export default {
  type: process.env.TYPE_DB,
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  migrations: ['./src/database/migrations/**.ts'],
  entities: ['./src/app/models/**.ts'],
  cli:{
    entitiesDir: './src/app/models',
    migrationsDir: './src/database/migrations'
  }, 
}