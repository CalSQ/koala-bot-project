export interface IRobloxService {
  validateUser();
  authenticateUser(request: Request, accessCode: string);
  revokeUser();
}
