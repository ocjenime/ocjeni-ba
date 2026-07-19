import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Business } from '../businesses/business.entity';

export enum ExperienceType {
  PURCHASE = 'purchase',
  SERVICE = 'service',
  VISIT = 'visit',
}

export enum ReviewStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  FLAGGED = 'flagged',
}

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  businessId: string;

  @ManyToOne(() => Business, (business) => business.reviews)
  @JoinColumn({ name: 'businessId' })
  business: Business;

  @Column({ type: 'smallint' })
  rating: number;

  @Column({ length: 100 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'date' })
  experienceDate: Date;

  @Column({
    type: 'enum',
    enum: ExperienceType,
  })
  experienceType: ExperienceType;

  @Column()
  wouldRecommend: boolean;

  @Column('simple-array', { nullable: true })
  photos: string[];

  @Column({ nullable: true })
  videoUrl: string;

  @Column({ default: false })
  verifiedPurchase: boolean;

  @Column({
    type: 'enum',
    enum: ReviewStatus,
    default: ReviewStatus.PENDING,
  })
  status: ReviewStatus;

  @Column({ default: 0 })
  helpfulCount: number;

  @Column({ type: 'text', nullable: true })
  response: string;

  @Column({ nullable: true })
  responseDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
