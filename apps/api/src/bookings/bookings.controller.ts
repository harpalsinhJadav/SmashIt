import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Role, BookingStatus } from '@smashit/database';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/booking.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Bookings')
@ApiBearerAuth()
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Post()
  @Roles(Role.PLAYER)
  @ApiOperation({ summary: 'Create a booking for a court slot (Player only)' })
  create(@CurrentUser() user: { id: string }, @Body() dto: CreateBookingDto) {
    return this.bookingsService.create(user.id, dto);
  }

  @Get('my')
  @Roles(Role.PLAYER)
  @ApiOperation({ summary: "Get the current player's bookings" })
  findMine(@CurrentUser() user: { id: string }) {
    return this.bookingsService.findByUser(user.id);
  }

  @Patch(':id/cancel')
  @Roles(Role.PLAYER)
  @ApiOperation({ summary: 'Cancel a pending booking (Player only)' })
  cancel(@CurrentUser() user: { id: string }, @Param('id') id: string) {
    return this.bookingsService.cancel(user.id, id);
  }

  @Get('owner/all')
  @Roles(Role.OWNER)
  @ApiOperation({ summary: "Get all bookings for the owner's courts" })
  findByOwner(@CurrentUser() user: { id: string }) {
    return this.bookingsService.findByOwner(user.id);
  }

  @Patch(':id/status')
  @Roles(Role.OWNER)
  @ApiOperation({ summary: 'Confirm or reject a booking (Owner only)' })
  updateStatus(
    @CurrentUser() user: { id: string },
    @Param('id') id: string,
    @Body('status') status: BookingStatus,
  ) {
    return this.bookingsService.updateStatus(user.id, id, status);
  }

  @Get('admin/all')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get all bookings in the platform (Admin only)' })
  findAll() {
    return this.bookingsService.findAll();
  }
}
