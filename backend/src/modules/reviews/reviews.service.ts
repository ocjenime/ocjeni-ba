import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review, ReviewStatus } from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewsRepository: Repository<Review>,
  ) {}

  async create(createReviewDto: CreateReviewDto, userId: string): Promise<Review> {
    const review = this.reviewsRepository.create({
      ...createReviewDto,
      userId,
      status: ReviewStatus.PENDING,
    });
    return this.reviewsRepository.save(review);
  }

  async findAll(): Promise<Review[]> {
    return this.reviewsRepository.find({
      relations: ['user', 'business'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByBusiness(businessId: string): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: { businessId, status: ReviewStatus.APPROVED },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByUser(userId: string): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: { userId },
      relations: ['business'],
      order: { createdAt: 'DESC' },
    });
  }

  async findById(id: string): Promise<Review> {
    const review = await this.reviewsRepository.findOne({
      where: { id },
      relations: ['user', 'business'],
    });
    if (!review) {
      throw new NotFoundException('Recenzija nije pronađena');
    }
    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto, userId: string): Promise<Review> {
    const review = await this.findById(id);
    if (review.userId !== userId) {
      throw new ForbiddenException('Nemate pravo ažurirati ovu recenziju');
    }
    Object.assign(review, updateReviewDto);
    return this.reviewsRepository.save(review);
  }

  async remove(id: string, userId: string): Promise<void> {
    const review = await this.findById(id);
    if (review.userId !== userId) {
      throw new ForbiddenException('Nemate pravo obrisati ovu recenziju');
    }
    await this.reviewsRepository.remove(review);
  }

  async approve(id: string): Promise<Review> {
    const review = await this.findById(id);
    review.status = ReviewStatus.APPROVED;
    return this.reviewsRepository.save(review);
  }

  async reject(id: string): Promise<Review> {
    const review = await this.findById(id);
    review.status = ReviewStatus.REJECTED;
    return this.reviewsRepository.save(review);
  }

  async respond(id: string, response: string): Promise<Review> {
    const review = await this.findById(id);
    review.response = response;
    review.responseDate = new Date();
    return this.reviewsRepository.save(review);
  }
}
