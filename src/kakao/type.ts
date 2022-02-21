export interface KakaoLoginSuccessInterface {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

declare global {
  interface Window {
    Kakao: {
      init: (apiKey: string) => void;
      Auth: {
        authorize: (options: { redirectUri: string; state?: string }) => void;
      };
    };
  }
}
