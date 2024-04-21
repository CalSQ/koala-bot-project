import { Request } from 'express';

export interface IRobloxService {
  authenticateUser(request: Request, accessCode: string): void;
  getStatus(request: Request): Promise<RobloxProfile | boolean>;
  revokeUser(token: string): Promise<boolean>;
}

export interface RobloxProfileResponse {
  sub: string;
  name: string;
  nickname: string;
  preferred_username: string;
  created_at: number;
  profile: string;
  picture: string;
}

export interface RobloxProfile {
  id: string;
  username: string;
  display_name: string;
  profile_url: string;
  picture_url: string;
}
