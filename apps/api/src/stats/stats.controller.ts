import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Role } from '@smashit/database';

import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { StatsService } from './stats.service';

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

  @Get('owner')
  @Roles(Role.OWNER)
  @ApiOperation({ summary: 'Get statistics for Owner Dashboard' })
  getOwnerStats(@CurrentUser() user: { id: string }) {
    return this.statsService.getOwnerStats(user.id);
  }
}

