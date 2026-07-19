import { IsString, IsEmail, MinLength, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../user.entity';

export class CreateUserDto {
  @ApiProperty({ example: 'Ivan Blazek' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'ivan@ocjeni.ba' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'ivanb' })
  @IsString()
  @MinLength(3)
  username: string;

  @ApiProperty({ example: 'lozinka123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({ example: 'Sarajevo' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ enum: UserRole, default: UserRole.CONSUMER })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
