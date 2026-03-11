import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Injects the current logged-in user into the controller
// Usage: getProfile(@CurrentUser() user: { id, email, role })
export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
