export enum CookiesInfo {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
  REFRESH_TOKEN_EXPIRES = 'refresh_token_expires',
  COMPLETED_STAGE = "completed_stage",
}

export interface authTypeReturn {
  access_token: string;
  refresh_token: string;
  access_token_expires_in: number;
  refresh_token_expires_in: number;
}
