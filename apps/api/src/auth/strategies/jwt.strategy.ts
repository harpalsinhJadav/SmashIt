import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extract JWT from Authorization: Bearer <token> header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'fallback-secret',
    });
  }

  // This is called after the JWT signature is validated.
  // Whatever we return here is attached to req.user
  validate(payload: { sub: string; email: string; role: string }) {
    return { id: payload.sub, email: payload.email, role: payload.role };
  }
}
