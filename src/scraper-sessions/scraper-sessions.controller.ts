import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScraperSessionsService } from './scraper-sessions.service';
import { CreateScraperSessionDto } from './dto/create-scraper-session.dto';
import { UpdateScraperSessionDto } from './dto/update-scraper-session.dto';

@Controller('scraper-sessions')
export class ScraperSessionsController {
  constructor(private readonly scraperSessionsService: ScraperSessionsService) {}

  @Post()
  create(@Body() createScraperSessionDto: CreateScraperSessionDto) {
    return this.scraperSessionsService.create(createScraperSessionDto);
  }

  @Get()
  findAll() {
    return this.scraperSessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scraperSessionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScraperSessionDto: UpdateScraperSessionDto) {
    return this.scraperSessionsService.update(+id, updateScraperSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scraperSessionsService.remove(+id);
  }
}
