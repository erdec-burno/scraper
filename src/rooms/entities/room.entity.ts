import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from '../../hotels/entities/hotel.entity';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column({ type: 'json' })
  // TODO - определить тип!
  images: any;

  @Column({ type: 'json' })
  // TODO - определить тип!
  amenities: any;

  @ManyToOne(() => Hotel, (hotel) => hotel.id, { onDelete: 'CASCADE' })
  hotel: Hotel;
}
