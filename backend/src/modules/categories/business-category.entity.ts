import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Business } from '../businesses/business.entity';
import { Category } from './category.entity';

@Entity('business_categories')
export class BusinessCategory {
  @PrimaryColumn()
  businessId: string;

  @PrimaryColumn()
  categoryId: string;

  @ManyToOne(() => Business, (business) => business.businessCategories)
  @JoinColumn({ name: 'businessId' })
  business: Business;

  @ManyToOne(() => Category, (category) => category.businessCategories)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column({ default: false })
  isPrimary: boolean;
}
