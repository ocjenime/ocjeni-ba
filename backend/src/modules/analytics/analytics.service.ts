import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from '../reviews/review.entity';
import { Business } from '../businesses/business.entity';
import { User } from '../users/user.entity';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewsRepository: Repository<Review>,
    @InjectRepository(Business)
    private readonly businessesRepository: Repository<Business>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getDashboardStats() {
    const totalReviews = await this.reviewsRepository.count();
    const totalBusinesses = await this.businessesRepository.count();
    const totalUsers = await this.usersRepository.count();

    const averageRating = await this.reviewsRepository
      .createQueryBuilder('review')
      .select('AVG(review.rating)', 'average')
      .getRawOne();

    return {
      totalReviews,
      totalBusinesses,
      totalUsers,
      averageRating: parseFloat(averageRating.average) || 0,
    };
  }

  async getBusinessStats(businessId: string) {
    const totalReviews = await this.reviewsRepository.count({
      where: { businessId },
    });

    const averageRating = await this.reviewsRepository
      .createQueryBuilder('review')
      .select('AVG(review.rating)', 'average')
      .where('review.businessId = :businessId', { businessId })
      .getRawOne();

    const ratingDistribution = await this.reviewsRepository
      .createQueryBuilder('review')
      .select('review.rating', 'rating')
      .addSelect('COUNT(*)', 'count')
      .where('review.businessId = :businessId', { businessId })
      .groupBy('review.rating')
      .getRawMany();

    return {
      totalReviews,
      averageRating: parseFloat(averageRating.average) || 0,
      ratingDistribution,
    };
  }

  async getRecentReviews(limit: number = 10) {
    return this.reviewsRepository.find({
      relations: ['user', 'business'],
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }
}
