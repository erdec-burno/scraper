import { PartialType } from '@nestjs/mapped-types';
import { CreateScraperSessionDto } from './create-scraper-session.dto';

export class UpdateScraperSessionDto extends PartialType(CreateScraperSessionDto) {}
