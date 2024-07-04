import { Test, TestingModule } from '@nestjs/testing';
import { ScraperSessionsService } from './scraper-sessions.service';

describe('ScraperSessionsService', () => {
  let service: ScraperSessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScraperSessionsService],
    }).compile();

    service = module.get<ScraperSessionsService>(ScraperSessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
