import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum SessionStatus {
  PROCESSING = 'PROCESSING',
  DONE = 'DONE',
}

@Entity('scraper_sessions')
export class ScraperSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({
    type: 'enum',
    enum: SessionStatus,
    default: SessionStatus.PROCESSING,
  })
  status: SessionStatus;

  @Column({ type: 'bool', default: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
