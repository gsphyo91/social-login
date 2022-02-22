import { useCallback, useEffect, useState } from "react";
import { loadScript } from "../utils/load-script";
import GoogleLoginBtnImage from "./assets/google_login_btn.png";
import { GoogleLoginBtn } from "./GoogleLogin.style";
import { Props } from "./type";

const GoogleLogin = ({
  client_id,
  cookie_policy = "single_host_origin",
  scope,
  fetch_basic_profile = true,
  hosted_domain,
  ux_mode = "popup",
  redirect_uri,
  prompt,
  onSuccess,
}: Props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const initGoogleLogin = useCallback(() => {
    window.gapi.auth2
      .init({
        client_id,
        cookie_policy,
        scope,
        fetch_basic_profile,
        hosted_domain,
        ux_mode,
        redirect_uri,
      })
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [client_id, cookie_policy, fetch_basic_profile, hosted_domain, redirect_uri, scope, ux_mode]);

  const signInWithGoogle = () => {
    if (isLoaded) {
      const GoogleAuth = window.gapi.auth2.getAuthInstance();
      GoogleAuth.signIn({
        prompt,
        scope: "profile email",
        ux_mode,
        redirect_uri,
      })
        .then((res) => onSuccess(res))
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    loadScript({
      id: "google-login",
      src: "https://apis.google.com/js/platform.js",
      onLoad: () => {
        window.gapi.load("auth2", initGoogleLogin);
        console.log(`Loaded!!!`);
      },
      onError: (error) => {
        console.error(error);
      },
    });
  }, [initGoogleLogin]);

  return (
    <GoogleLoginBtn onClick={signInWithGoogle}>
      <img src={GoogleLoginBtnImage} alt="구글 로그인 버튼" />
    </GoogleLoginBtn>
  );
};

export default GoogleLogin;
