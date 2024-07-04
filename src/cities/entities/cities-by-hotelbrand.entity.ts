import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { City } from './city.entity';
import { HotelsBrand } from '../../hotels-brand/entities/hotels-brand.entity';
import { Hotel } from '../../hotels/entities/hotel.entity';
import { ScraperSession } from '../../scraper-sessions/entities/scraper-session.entity';

@Entity('cities_by_hotelbrand')
export class CitiesByHotelbrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @ManyToOne(() => City, (city) => city.id, { onDelete: 'CASCADE' })
  city: City[];

  @ManyToOne(() => HotelsBrand, (hotelBrand) => hotelBrand.id, {
    onDelete: 'CASCADE',
  })
  brand: HotelsBrand[];

  @ManyToOne(() => ScraperSession, (scraperSession) => scraperSession.id, {
    onDelete: 'CASCADE',
  })
  scraperSession: ScraperSession[];

  @OneToMany(() => Hotel, (hotels) => hotels.id)
  hotels: Hotel[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
