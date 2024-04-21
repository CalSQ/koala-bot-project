export interface OAuthCredentialsResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  id_token: string;
  scope: string;
}
