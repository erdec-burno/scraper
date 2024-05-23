import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env['DB_PORT']),
      username: `${process.env['DB_USERNAME']}`,
      password: `${process.env['DB_PASSWORD']}`,
      database: `${process.env['DB_NAME']}`,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/../migrations/*.js'],
      migrationsRun: true,
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
