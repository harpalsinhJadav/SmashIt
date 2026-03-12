import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@smashit/database';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'arjun@smashit.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Arjun Kapoor' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Player@123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ enum: Role, default: Role.PLAYER, required: false })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  @ApiProperty({ example: '+91 9800000000', required: false })
  @IsString()
  @IsOptional()
  phoneNumber?: string;
}

export class LoginDto {
  @ApiProperty({ example: 'arjun@smashit.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Player@123' })
  @IsString()
  password: string;
}
