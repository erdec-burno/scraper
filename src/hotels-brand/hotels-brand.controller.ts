import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelsBrandService } from './hotels-brand.service';
import { CreateHotelsBrandDto } from './dto/create-hotels-brand.dto';
import { UpdateHotelsBrandDto } from './dto/update-hotels-brand.dto';

@Controller('hotels-brand')
export class HotelsBrandController {
  constructor(private readonly hotelsBrandService: HotelsBrandService) {}

  @Post()
  create(@Body() createHotelsBrandDto: CreateHotelsBrandDto) {
    return this.hotelsBrandService.create(createHotelsBrandDto);
  }

  @Get()
  findAll() {
    return this.hotelsBrandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelsBrandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelsBrandDto: UpdateHotelsBrandDto) {
    return this.hotelsBrandService.update(+id, updateHotelsBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsBrandService.remove(+id);
  }
}
