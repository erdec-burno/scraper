import { Module } from '@nestjs/common';
import { ScraperSessionsService } from './scraper-sessions.service';
import { ScraperSessionsController } from './scraper-sessions.controller';

@Module({
  controllers: [ScraperSessionsController],
  providers: [ScraperSessionsService],
})
export class ScraperSessionsModule {}
