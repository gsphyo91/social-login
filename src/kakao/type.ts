import { AxiosResponse } from "axios";
import { CSSProperties } from "react";

export interface Props {
  size?: string;
  options: { client_id: string; client_secret?: string } & KakaoAuthorizeOptions;
  onSuccess: (data: KakaoLoginSuccessInterface) => void;
  onFail?: (error: AxiosResponse) => void;
  style?: CSSProperties;
}

interface KakaoAuthorizeOptions {
  redirectUri: string;
  state?: string;
  scope?: string;
  throughTalk?: boolean;
}

export interface KakaoGetTokenParameter {
  grant_type: "authorization_code";
  client_id: string;
  redirect_uri: string;
  code: string;
  client_secret?: string;
}

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
        authorize: (options: KakaoAuthorizeOptions) => void;
      };
    };
  }
}
