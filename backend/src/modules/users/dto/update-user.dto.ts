import { IsString, IsOptional, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'Ivan Blazek' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'https://example.com/avatar.jpg' })
  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @ApiPropertyOptional({ example: 'Passion for helping businesses grow' })
  @IsOptional()
  @IsString()
  @MinLength(10)
  bio?: string;

  @ApiPropertyOptional({ example: 'Sarajevo' })
  @IsOptional()
  @IsString()
  location?: string;
}
