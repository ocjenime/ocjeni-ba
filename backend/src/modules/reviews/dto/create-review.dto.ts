import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, IsArray, Min, Max, IsDateString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ExperienceType } from '../review.entity';

export class CreateReviewDto {
  @ApiProperty({ example: 'uuid-of-business' })
  @IsString()
  businessId: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ example: 'Odlična usluga!' })
  @IsString()
  @MinLength(3)
  title: string;

  @ApiProperty({ example: 'Bio sam jako zadovoljan uslugom...' })
  @IsString()
  @MinLength(10)
  content: string;

  @ApiProperty({ example: '2026-01-15' })
  @IsDateString()
  experienceDate: Date;

  @ApiProperty({ enum: ExperienceType, example: ExperienceType.SERVICE })
  @IsEnum(ExperienceType)
  experienceType: ExperienceType;

  @ApiProperty({ example: true })
  @IsBoolean()
  wouldRecommend: boolean;

  @ApiPropertyOptional({ example: ['https://example.com/photo1.jpg'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  photos?: string[];

  @ApiPropertyOptional({ example: 'https://youtube.com/watch?v=...' })
  @IsOptional()
  @IsString()
  videoUrl?: string;
}
