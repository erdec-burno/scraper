import { Test, TestingModule } from '@nestjs/testing';
import { ScraperSessionsController } from './scraper-sessions.controller';
import { ScraperSessionsService } from './scraper-sessions.service';

describe('ScraperSessionsController', () => {
  let controller: ScraperSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScraperSessionsController],
      providers: [ScraperSessionsService],
    }).compile();

    controller = module.get<ScraperSessionsController>(ScraperSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
