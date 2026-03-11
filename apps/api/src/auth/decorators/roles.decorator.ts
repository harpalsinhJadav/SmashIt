import { SetMetadata } from '@nestjs/common';
import { Role } from '@smashit/database';

export const ROLES_KEY = 'roles';

// Use @Roles(Role.ADMIN) or @Roles(Role.OWNER, Role.ADMIN)
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
