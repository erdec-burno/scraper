import { Module } from '@nestjs/common';
import { HotelsBrandService } from './hotels-brand.service';
import { HotelsBrandController } from './hotels-brand.controller';

@Module({
  controllers: [HotelsBrandController],
  providers: [HotelsBrandService],
})
export class HotelsBrandModule {}
