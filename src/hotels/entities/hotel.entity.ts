import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CitiesByHotelbrand } from '../../cities/entities/cities-by-hotelbrand.entity';

@Entity('hotels')
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hotelCode: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  @Column({ nullable: true })
  logo: string;

  @ManyToOne(
    () => CitiesByHotelbrand,
    (citiesByHotelBrand) => citiesByHotelBrand.hotels,
    { onDelete: 'CASCADE' },
  )
  citiesByHotelBrand: CitiesByHotelbrand;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
