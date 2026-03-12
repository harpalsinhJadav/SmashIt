import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from '@smashit/database';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { CourtsService } from './courts.service';
import {
  CreateCourtDto,
  CreateSlotDto,
  UpdateCourtDto,
  UpdateSlotDto,
} from './dto/court.dto';

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

  // --- Slot Management ---

  @Post(':id/slots')
  @ApiBearerAuth()
  @Roles(Role.OWNER)
  @ApiOperation({ summary: 'Add a new time slot to a court' })
  addSlot(
    @CurrentUser() user: { id: string },
    @Param('id') id: string,
    @Body() slotData: CreateSlotDto,
  ) {
    return this.courtsService.addSlot(user.id, id, slotData);
  }

  @Patch(':id/slots/:slotId')
  @ApiBearerAuth()
  @Roles(Role.OWNER)
  @ApiOperation({ summary: 'Update a specific court slot' })
  updateSlot(
    @CurrentUser() user: { id: string },
    @Param('id') id: string,
    @Param('slotId') slotId: string,
    @Body() slotData: UpdateSlotDto,
  ) {
    return this.courtsService.updateSlot(user.id, id, slotId, slotData);
  }

  @Delete(':id/slots/:slotId')
  @ApiBearerAuth()
  @Roles(Role.OWNER)
  @ApiOperation({ summary: 'Remove a court slot' })
  deleteSlot(
    @CurrentUser() user: { id: string },
    @Param('id') id: string,
    @Param('slotId') slotId: string,
  ) {
    return this.courtsService.deleteSlot(user.id, id, slotId);
  }
}
