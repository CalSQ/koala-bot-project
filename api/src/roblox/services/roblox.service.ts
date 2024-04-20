import { Injectable } from '@nestjs/common';
import { IRobloxService } from '../interfaces/roblox';

@Injectable()
export class RobloxService implements IRobloxService {
  constructor() {}
  async validateUser() {
    return 'Working';
  }

  async authenticateUser(request, accessCode) {
    return 'Working';
  }

  async revokeUser() {
    return 'Working';
  }
}
