import {
  Injectable,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@smashit/database';
import { ROLES_KEY } from '../decorators/roles.decorator';

// Checks that req.user.role matches what's required by @Roles(Role.ADMIN) etc.
@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest<{
      user: { role: Role };
    }>();
    const user = request.user;
    const hasRole = user && requiredRoles.includes(user.role);
    if (!hasRole) {
      throw new ForbiddenException(
        `This action requires one of these roles: ${requiredRoles.join(', ')}`,
      );
    }
    return true;
  }
}
