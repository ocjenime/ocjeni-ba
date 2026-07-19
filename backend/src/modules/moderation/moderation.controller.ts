import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ModerationService } from './moderation.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('moderation')
@Controller('moderation')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ModerationController {
  constructor(private readonly moderationService: ModerationService) {}

  @Get('pending')
  @ApiOperation({ summary: 'Dohvati recenzije na čekanju' })
  async getPending() {
    return this.moderationService.getPendingReviews();
  }

  @Get('flagged')
  @ApiOperation({ summary: 'Dohvati označene recenzije' })
  async getFlagged() {
    return this.moderationService.getFlaggedReviews();
  }

  @Post('approve/:id')
  @ApiOperation({ summary: 'Odobri recenziju' })
  async approve(@Param('id') id: string) {
    return this.moderationService.approveReview(id);
  }

  @Post('reject/:id')
  @ApiOperation({ summary: 'Odbij recenziju' })
  async reject(@Param('id') id: string) {
    return this.moderationService.rejectReview(id);
  }

  @Post('flag/:id')
  @ApiOperation({ summary: 'Označi recenziju' })
  async flag(@Param('id') id: string) {
    return this.moderationService.flagReview(id);
  }
}
