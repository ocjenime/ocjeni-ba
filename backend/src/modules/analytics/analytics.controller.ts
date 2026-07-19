import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Dohvati statistike dashboarda' })
  async getDashboardStats() {
    return this.analyticsService.getDashboardStats();
  }

  @Get('business/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Dohvati statistike tvrtke' })
  async getBusinessStats(@Param('id') id: string) {
    return this.analyticsService.getBusinessStats(id);
  }

  @Get('recent')
  @ApiOperation({ summary: 'Dohvati najnovije recenzije' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getRecentReviews(@Query('limit') limit?: number) {
    return this.analyticsService.getRecentReviews(limit || 10);
  }
}
