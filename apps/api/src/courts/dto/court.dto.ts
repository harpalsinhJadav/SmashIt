import { ApiProperty } from '@nestjs/swagger';
import { CourtType, Status } from '@smashit/database';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateCourtDto {
  @ApiProperty({ example: 'Smash Arena - Badminton' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Professional wooden floors with AC',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'Bandra, Mumbai' })
  @IsString()
  location: string;

  @ApiProperty({
    example: '12 Turner Road, Bandra West, Mumbai',
    required: false,
  })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ enum: CourtType, example: CourtType.BADMINTON })
  @IsEnum(CourtType)
  type: CourtType;

  @ApiProperty({ example: 600 })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  pricePerHour: number;

  @ApiProperty({ example: ['Parking', 'WiFi', 'Water'], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  facilities?: string[];

  @ApiProperty({ example: 'https://...image.jpg', required: false })
  @IsString()
  @IsOptional()
  mainImage?: string;

  @ApiProperty({ example: 19.0596, required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  latitude?: number;

  @ApiProperty({ example: 72.8295, required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  longitude?: number;

  @ApiProperty({ enum: Status, example: Status.ACTIVE, required: false })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;
}

export class UpdateCourtDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pricePerHour?: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  facilities?: string[];

  @IsString()
  @IsOptional()
  mainImage?: string;

  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @IsEnum(CourtType)
  @IsOptional()
  type?: CourtType;
}

export class CreateSlotDto {
  @ApiProperty({ example: '06:00' })
  @IsString()
  startTime: string;

  @ApiProperty({ example: '07:00' })
  @IsString()
  endTime: string;

  @ApiProperty({ example: 600, required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  price?: number;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  isAvailable?: boolean;
}

export class UpdateSlotDto {
  @IsString()
  @IsOptional()
  startTime?: string;

  @IsString()
  @IsOptional()
  endTime?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  price?: number;

  @IsOptional()
  isAvailable?: boolean;
}
