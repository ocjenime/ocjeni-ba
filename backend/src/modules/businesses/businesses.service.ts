import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import slugify from 'slugify';
import { Business } from './business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Injectable()
export class BusinessesService {
  constructor(
    @InjectRepository(Business)
    private readonly businessesRepository: Repository<Business>,
  ) {}

  async create(createBusinessDto: CreateBusinessDto, ownerId: string): Promise<Business> {
    const slug = slugify(createBusinessDto.name, { lower: true, strict: true });

    const existingBusiness = await this.businessesRepository.findOne({ where: { slug } });
    if (existingBusiness) {
      slug === existingBusiness.slug;
    }

    const business = this.businessesRepository.create({
      ...createBusinessDto,
      ownerId,
      slug,
    });
    return this.businessesRepository.save(business);
  }

  async findAll(): Promise<Business[]> {
    return this.businessesRepository.find({ relations: ['owner'] });
  }

  async findBySlug(slug: string): Promise<Business> {
    const business = await this.businessesRepository.findOne({
      where: { slug },
      relations: ['owner'],
    });
    if (!business) {
      throw new NotFoundException('Tvrtka nije pronađena');
    }
    return business;
  }

  async findById(id: string): Promise<Business> {
    const business = await this.businessesRepository.findOne({
      where: { id },
      relations: ['owner'],
    });
    if (!business) {
      throw new NotFoundException('Tvrtka nije pronađena');
    }
    return business;
  }

  async findByOwner(ownerId: string): Promise<Business[]> {
    return this.businessesRepository.find({
      where: { ownerId },
      relations: ['owner'],
    });
  }

  async update(id: string, updateBusinessDto: UpdateBusinessDto): Promise<Business> {
    const business = await this.findById(id);
    Object.assign(business, updateBusinessDto);
    return this.businessesRepository.save(business);
  }

  async remove(id: string): Promise<void> {
    const business = await this.findById(id);
    await this.businessesRepository.remove(business);
  }
}
