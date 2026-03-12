import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CourtsModule } from './courts/courts.module';
import { BookingsModule } from './bookings/bookings.module';
import { StatsModule } from './stats/stats.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';

@Module({
  imports: [
    // Load .env file for all modules
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    CourtsModule,
    BookingsModule,
    StatsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Apply JWT guard GLOBALLY - all routes require auth unless @Public()
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    // Apply Roles guard GLOBALLY - routes respect @Roles() decorator
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
