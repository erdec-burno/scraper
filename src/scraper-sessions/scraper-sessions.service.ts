import { Injectable } from '@nestjs/common';
import { CreateScraperSessionDto } from './dto/create-scraper-session.dto';
import { UpdateScraperSessionDto } from './dto/update-scraper-session.dto';

@Injectable()
export class ScraperSessionsService {
  create(createScraperSessionDto: CreateScraperSessionDto) {
    return 'This action adds a new scraperSession';
  }

  findAll() {
    return `This action returns all scraperSessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scraperSession`;
  }

  update(id: number, updateScraperSessionDto: UpdateScraperSessionDto) {
    return `This action updates a #${id} scraperSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} scraperSession`;
  }
}
