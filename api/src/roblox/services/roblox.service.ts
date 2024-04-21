import { Inject, Injectable } from '@nestjs/common';
import { IRobloxService } from '../interfaces/roblox';
import {
  exchangeCodeForAccessToken,
  fetchUserProfile,
  revokeUserAccessToken,
} from '../utils/helpers';
import { SERVICES } from 'src/utils/constants';
import { IUserService } from 'src/user/interfaces/user';

@Injectable()
export class RobloxService implements IRobloxService {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}

  async authenticateUser(request, accessCode) {
    const oauthCredentials = await exchangeCodeForAccessToken(accessCode);
    const {
      token_type: tokenType,
      access_token: accessToken,
      refresh_token: refreshToken,
    } = oauthCredentials;
    const {
      sub: id,
      name,
      preferred_username,
      profile,
      picture,
    } = await fetchUserProfile(accessToken, tokenType);
    await this.userService.updateUser(request.user.discordId, {
      'roblox.id': id,
      'roblox.username': preferred_username,
      'roblox.display_name': name,
      'roblox.profile_url': profile,
      'roblox.picture_url': picture,
    });
    await this.revokeUser(refreshToken);
  }

  async getStatus(request) {
    const data = await this.userService.findUser(request.user.discordId);
    if (!data)
      throw new Error('User not found, reauthentication required.', {
        cause: 'Application',
      });
    return data.roblox.id ? data.roblox : false;
  }

  async revokeUser(token: string) {
    return await revokeUserAccessToken(token);
  }

  async logout(request) {
    await this.userService.updateUser(request.user.discordId, {
      roblox: {},
    });
    return true;
  }
}
