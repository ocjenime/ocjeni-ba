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
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Kreiraj novu recenziju' })
  @ApiResponse({ status: 201, description: 'Recenzija uspješno kreirana' })
  async create(@Body() createReviewDto: CreateReviewDto, @Request() req) {
    return this.reviewsService.create(createReviewDto, req.user.sub);
  }

  @Get()
  @ApiOperation({ summary: 'Dohvati sve recenzije' })
  @ApiQuery({ name: 'businessId', required: false })
  @ApiQuery({ name: 'userId', required: false })
  async findAll(
    @Query('businessId') businessId?: string,
    @Query('userId') userId?: string,
  ) {
    if (businessId) {
      return this.reviewsService.findByBusiness(businessId);
    }
    if (userId) {
      return this.reviewsService.findByUser(userId);
    }
    return this.reviewsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Dohvati recenziju po ID-u' })
  async findOne(@Param('id') id: string) {
    return this.reviewsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Ažuriraj recenziju' })
  async update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto, @Request() req) {
    return this.reviewsService.update(id, updateReviewDto, req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obriši recenziju' })
  async remove(@Param('id') id: string, @Request() req) {
    return this.reviewsService.remove(id, req.user.sub);
  }

  @Post(':id/approve')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Odobri recenziju (samo admin/moderator)' })
  async approve(@Param('id') id: string) {
    return this.reviewsService.approve(id);
  }

  @Post(':id/reject')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Odbij recenziju (samo admin/moderator)' })
  async reject(@Param('id') id: string) {
    return this.reviewsService.reject(id);
  }

  @Post(':id/respond')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Odgovori na recenziju (samo vlasnik tvrtke)' })
  async respond(@Param('id') id: string, @Body('response') response: string) {
    return this.reviewsService.respond(id, response);
  }
}
