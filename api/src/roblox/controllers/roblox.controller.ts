import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { request } from 'http';
import { AuthUser } from 'src/auth/utils/decorators';
import { AuthGuard } from 'src/auth/utils/guards';
import { UserSession } from 'src/user/types/user';
import { FRONTEND_ROUTES, ROUTES, SERVICES } from 'src/utils/constants';

@Controller(ROUTES.ROBLOX)
export class RobloxController {
  constructor(@Inject(SERVICES.ROBLOX) private robloxService) {}

  @Get('login')
  @UseGuards(AuthGuard)
  login(@Res() response: Response) {
    response.redirect(process.env.ROBLOX_OAUTH_REDIRECT);
  }

  @Get('redirect')
  @UseGuards(AuthGuard)
  async redirect(@Req() request: Request, @Res() response: Response) {
    const { code } = request.query;
    if (!code)
      throw new HttpException('No code provided', HttpStatus.BAD_REQUEST);
    try {
      await this.robloxService.authenticateUser(request, code.toString());
    } catch (error: unknown) {
      if (error instanceof Error && error.cause === 'Application') {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'There was a problem.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    response.redirect(process.env.FRONTEND_HOST + FRONTEND_ROUTES.USER);
  }

  @Get('status')
  @UseGuards(AuthGuard)
  async status(@Req() request: Request) {
    try {
      return await this.robloxService.getStatus(request);
    } catch (error: unknown) {
      if (error instanceof Error && error.cause === 'Application') {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'There was a problem.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
