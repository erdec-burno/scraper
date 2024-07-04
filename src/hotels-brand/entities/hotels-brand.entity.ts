import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CitiesByHotelbrand } from '../../cities/entities/cities-by-hotelbrand.entity';

@Entity('hotels_brand')
export class HotelsBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  url: string;

  @Column({ type: 'bool', default: true })
  isActive: boolean;

  @OneToMany(
    () => CitiesByHotelbrand,
    (cityByHotelBrand) => cityByHotelBrand.city,
  )
  byHotelBrand: CitiesByHotelbrand[];
}
