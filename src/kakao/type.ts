import { AxiosResponse } from "axios";
import { CSSProperties } from "react";

export interface KakaoLoginSuccessInterface {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export interface Props {
  apiKey: string;
  redirectURI: string;
  onSuccess: (data: KakaoLoginSuccessInterface) => void;
  onFail?: (error: AxiosResponse) => void;
  size?: string;
  style?: CSSProperties;
}
