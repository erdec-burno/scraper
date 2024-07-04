import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
import { CitiesModule } from './cities/cities.module';
import { HotelsBrandModule } from './hotels-brand/hotels-brand.module';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { ScraperSessionsModule } from './scraper-sessions/scraper-sessions.module';

config();

console.log(`ENVIRONMENT:`, process.env.NODE_ENV);

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
      migrationsRun: process.env.NODE_ENV !== 'development',
    }),
    ConfigModule.forRoot(),
    CitiesModule,
    HotelsBrandModule,
    HotelsModule,
    RoomsModule,
    ScraperSessionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
