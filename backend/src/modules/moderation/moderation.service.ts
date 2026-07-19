import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review, ReviewStatus } from '../reviews/review.entity';

@Injectable()
export class ModerationService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewsRepository: Repository<Review>,
  ) {}

  async getPendingReviews(): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: { status: ReviewStatus.PENDING },
      relations: ['user', 'business'],
      order: { createdAt: 'ASC' },
    });
  }

  async getFlaggedReviews(): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: { status: ReviewStatus.FLAGGED },
      relations: ['user', 'business'],
      order: { createdAt: 'ASC' },
    });
  }

  async approveReview(id: string): Promise<Review> {
    const review = await this.reviewsRepository.findOne({ where: { id } });
    review.status = ReviewStatus.APPROVED;
    return this.reviewsRepository.save(review);
  }

  async rejectReview(id: string): Promise<Review> {
    const review = await this.reviewsRepository.findOne({ where: { id } });
    review.status = ReviewStatus.REJECTED;
    return this.reviewsRepository.save(review);
  }

  async flagReview(id: string): Promise<Review> {
    const review = await this.reviewsRepository.findOne({ where: { id } });
    review.status = ReviewStatus.FLAGGED;
    return this.reviewsRepository.save(review);
  }
}
