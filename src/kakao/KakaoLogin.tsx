import { useCallback, useEffect } from "react";
import { loadScript } from "../utils/load-script";
import KakaoLoginBtnMedium from "./assets/kakao_login_medium_narrow.png";
import KakaoLoginBtnLarge from "./assets/kakao_login_large_narrow.png";
import { KakaoLoginBtn } from "./KakaoLogin.style";
import { useSearchParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { Props, KakaoLoginSuccessInterface } from "./type";

const KakaoLogin = ({ apiKey, redirectURI, onSuccess, onFail, size = "medium", style }: Props) => {
  const [params] = useSearchParams();

  const onClickKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: redirectURI,
    });
  };

  const getToken = useCallback(
    async (code: string) => {
      try {
        const kakaoApi = axios.create({
          baseURL: "https://kauth.kakao.com",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        const params = {
          grant_type: "authorization_code",
          client_id: apiKey,
          redirect_uri: redirectURI,
          code,
        };

        const { data }: AxiosResponse<KakaoLoginSuccessInterface> = await kakaoApi.post(
          "/oauth/token",
          null,
          {
            params,
          }
        );
        onSuccess(data);
      } catch (error) {
        const err = error as AxiosResponse;
        console.error(err);
      }
    },
    [apiKey, onSuccess, redirectURI]
  );

  useEffect(() => {
    loadScript({
      id: "kakao-login",
      src: "https://developers.kakao.com/sdk/js/kakao.js",
      onError: (err) => {
        console.error(err);
      },
      onLoad: () => {
        window.Kakao.init(apiKey);
      },
    });
  }, [apiKey]);

  useEffect(() => {
    const code = params.get("code");
    if (!code) {
      return;
    }
    getToken(code);
  }, [getToken, params]);

  return (
    <KakaoLoginBtn onClick={onClickKakaoLogin} style={style}>
      <img
        src={size === "medium" ? KakaoLoginBtnMedium : KakaoLoginBtnLarge}
        alt="카카오 로그인 버튼"
      />
    </KakaoLoginBtn>
  );
};

export default KakaoLogin;
