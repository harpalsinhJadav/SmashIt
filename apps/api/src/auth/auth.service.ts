import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(dto: RegisterDto) {
    // Check if user already exists
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('A user with this email already exists');
    }

    // Hash password with bcrypt (10 salt rounds)
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: hashedPassword,
        role: dto.role,
        phoneNumber: dto.phoneNumber,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        phoneNumber: true,
        createdAt: true,
      },
    });

    // If the user registers as an OWNER, auto-create their Owner profile
    if (user.role === 'OWNER') {
      await this.prisma.owner.create({ data: { userId: user.id } });
    }

    return { user, token: this.generateToken(user) };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    delete (user as { password?: string }).password;
    return { user, token: this.generateToken(user) };
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        phoneNumber: true,
        avatarUrl: true,
        createdAt: true,
        ownerProfile: {
          select: {
            id: true,
            _count: {
              select: {
                courts: true,
              },
            },
          },
        },
      },
    });

    if (user && user.role === 'OWNER' && user.ownerProfile) {
      const bookingsCount = await this.prisma.booking.count({
        where: {
          court: {
            ownerId: user.ownerProfile.id,
          },
        },
      });

      return {
        ...user,
        stats: {
          courts: user.ownerProfile._count.courts,
          assistants: 0, // Placeholder
          bookings: bookingsCount,
        },
      };
    }

    return user;
  }

  private generateToken(user: { id: string; email: string; role: string }) {
    return this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });
  }
}
