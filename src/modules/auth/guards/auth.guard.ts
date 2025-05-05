import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { env } from 'src/config/env';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }

    const [, token] = authHeader.split(' ');

    try {
      const { sub: userId } = verify(token, env.jwtSecret) as { sub: string };
      request.user = { id: userId };
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
