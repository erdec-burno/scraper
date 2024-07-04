import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelsBrandDto } from './create-hotels-brand.dto';

export class UpdateHotelsBrandDto extends PartialType(CreateHotelsBrandDto) {}
