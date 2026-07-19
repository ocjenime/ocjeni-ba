import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { BusinessesService } from './businesses.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('businesses')
@Controller('businesses')
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Kreiraj novu tvrtku' })
  @ApiResponse({ status: 201, description: 'Tvrtka uspješno kreirana' })
  async create(@Body() createBusinessDto: CreateBusinessDto, @Request() req) {
    return this.businessesService.create(createBusinessDto, req.user.sub);
  }

  @Get()
  @ApiOperation({ summary: 'Dohvati sve tvrtke' })
  @ApiQuery({ name: 'city', required: false })
  @ApiQuery({ name: 'entity', required: false })
  async findAll(@Query('city') city?: string, @Query('entity') entity?: string) {
    return this.businessesService.findAll();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Dohvati tvrtku po slugu' })
  async findBySlug(@Param('slug') slug: string) {
    return this.businessesService.findBySlug(slug);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Ažuriraj tvrtku' })
  async update(@Param('id') id: string, @Body() updateBusinessDto: UpdateBusinessDto) {
    return this.businessesService.update(id, updateBusinessDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obriši tvrtku' })
  async remove(@Param('id') id: string) {
    return this.businessesService.remove(id);
  }
}
