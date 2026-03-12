import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsNumber, IsString, Min } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ example: 'cuid-of-court' })
  @IsString()
  courtId: string;

  @ApiProperty({ example: '2026-03-15' })
  @IsDateString()
  bookingDate: string;

  @ApiProperty({ example: '07:00' })
  @IsString()
  startTime: string;

  @ApiProperty({ example: '08:00' })
  @IsString()
  endTime: string;

  @ApiProperty({ example: 600 })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  totalAmount: number;
}
