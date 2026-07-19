import { IsString, IsOptional, IsEmail, IsEnum, IsUrl, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, SubscriptionPlan } from '../business.entity';

export class CreateBusinessDto {
  @ApiProperty({ example: 'Caffe Bar Kod Brace' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiPropertyOptional({ example: 'Najbolji kafe u Sarajevu' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://example.com/logo.png' })
  @IsOptional()
  @IsUrl()
  logoUrl?: string;

  @ApiPropertyOptional({ example: 'https://example.com' })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiPropertyOptional({ example: 'info@kodbrace.ba' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: '+387 61 123 456' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: 'Ferhadija 15' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ example: 'Sarajevo' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ example: '71000' })
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiProperty({ enum: Entity, example: Entity.FBIH })
  @IsEnum(Entity)
  entity: Entity;

  @ApiPropertyOptional({ example: 43.8563 })
  @IsOptional()
  latitude?: number;

  @ApiPropertyOptional({ example: 18.4131 })
  @IsOptional()
  longitude?: number;
}
