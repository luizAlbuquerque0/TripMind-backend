import { createParamDecorator, ExecutionContext } from '@nestjs/common';

interface RequestWithUser extends Request {
  user: {
    id: string;
  };
}

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user;
  },
);
