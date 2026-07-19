import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registracija novog korisnika' })
  @ApiResponse({ status: 201, description: 'Korisnik uspješno registrovan' })
  @ApiResponse({ status: 409, description: 'Email ili korisničko ime već postoji' })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Prijava korisnika' })
  @ApiResponse({ status: 200, description: 'Uspješna prijava' })
  @ApiResponse({ status: 401, description: 'Netačni podaci' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('me')
  @ApiOperation({ summary: 'Dohvati trenutnog korisnika' })
  async getProfile(@Request() req) {
    return this.authService.validateUser(req.user.sub);
  }
}
