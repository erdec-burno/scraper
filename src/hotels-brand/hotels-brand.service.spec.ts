import { Test, TestingModule } from '@nestjs/testing';
import { HotelsBrandService } from './hotels-brand.service';

describe('HotelsBrandService', () => {
  let service: HotelsBrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelsBrandService],
    }).compile();

    service = module.get<HotelsBrandService>(HotelsBrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
