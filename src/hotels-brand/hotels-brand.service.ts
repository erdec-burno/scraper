import { Injectable } from '@nestjs/common';
import { CreateHotelsBrandDto } from './dto/create-hotels-brand.dto';
import { UpdateHotelsBrandDto } from './dto/update-hotels-brand.dto';

@Injectable()
export class HotelsBrandService {
  create(createHotelsBrandDto: CreateHotelsBrandDto) {
    return 'This action adds a new hotelsBrand';
  }

  findAll() {
    return `This action returns all hotelsBrand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotelsBrand`;
  }

  update(id: number, updateHotelsBrandDto: UpdateHotelsBrandDto) {
    return `This action updates a #${id} hotelsBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotelsBrand`;
  }
}
