import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { Role } from '@smashit/database';
import { CourtsService } from './courts.service';
import { CreateCourtDto, UpdateCourtDto } from './dto/court.dto';
import { Public } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Courts')
@Controller('courts')
export class CourtsController {
  constructor(private courtsService: CourtsService) {}

  @Public()
  @Get()
  @ApiOperation({
    summary: 'List all active courts (public, with optional filters)',
  })
  @ApiQuery({
    name: 'game',
    required: false,
    description: 'Filter by court type (BADMINTON, TENNIS...)',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search by name or location',
  })
  findAll(@Query('game') game?: string, @Query('search') search?: string) {
    return this.courtsService.findAll(game, search);
  }

  @Public()
  @Get(':id')
  @ApiOperation({
    summary: 'Get a single court with full details, slots, and reviews',
  })
  findOne(@Param('id') id: string) {
    return this.courtsService.findOne(id);
  }

  @Get('owner/my-courts')
  @ApiBearerAuth()
  @Roles(Role.OWNER)
  @ApiOperation({ summary: 'Get all courts owned by the current owner' })
  findByOwner(@CurrentUser() user: { id: string }) {
    return this.courtsService.findByOwner(user.id);
  }

  @Post()
  @ApiBearerAuth()
  @Roles(Role.OWNER)
  @ApiOperation({ summary: 'Create a new court (Owner only)' })
  create(@CurrentUser() user: { id: string }, @Body() dto: CreateCourtDto) {
    return this.courtsService.create(user.id, dto);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.OWNER, Role.ADMIN)
  @ApiOperation({ summary: 'Update a court (Owner or Admin)' })
  update(
    @CurrentUser() user: { id: string },
    @Param('id') id: string,
    @Body() dto: UpdateCourtDto,
  ) {
    return this.courtsService.update(user.id, id, dto);
  }

  @Get('admin/all')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: 'Get ALL courts including under review (Admin only)',
  })
  findAllAdmin() {
    return this.courtsService.findAllAdmin();
  }
}
