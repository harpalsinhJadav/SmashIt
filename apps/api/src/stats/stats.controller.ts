import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { StatsService } from './stats.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@smashit/database';

@ApiTags('Stats')
@ApiBearerAuth()
@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Get('admin')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get high-level statistics for Admin Dashboard' })
  getAdminStats() {
    return this.statsService.getAdminStats();
  }
}
