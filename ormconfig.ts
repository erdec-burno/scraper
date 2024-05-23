import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env['DB_PORT']),
  username: `${process.env['DB_USERNAME']}`,
  password: `${process.env['DB_PASSWORD']}`,
  database: `${process.env['DB_NAME']}`,
  entities: ['dist/**/*.entity.{js,ts}'],
  synchronize: false,
  migrations: ['dist/migrations/*{.js,.ts}'],
});
