import { Test, TestingModule } from '@nestjs/testing';
import { HotelsBrandController } from './hotels-brand.controller';
import { HotelsBrandService } from './hotels-brand.service';

describe('HotelsBrandController', () => {
  let controller: HotelsBrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelsBrandController],
      providers: [HotelsBrandService],
    }).compile();

    controller = module.get<HotelsBrandController>(HotelsBrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
