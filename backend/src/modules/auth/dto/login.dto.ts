import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'ivan@ocjeni.ba' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'lozinka123' })
  @IsString()
  @MinLength(6)
  password: string;
}
