import { CSSProperties } from "react";

export interface Props {
  options: GoogleAuth2InitParameters & GoogleAuthSignInParameters;
  onSuccess: (data: any) => void;
  onFail?: () => void;
  style?: CSSProperties;
}
interface GoogleAuth2InitParameters {
  /**
   * Client ID(required)
   *
   * Google Developer Console에서 발급받은 OAuth Client ID
   */
  client_id: string;
  /**
   * Cookie Policy (optional)
   *
   * 로그인 쿠키를 만들 도메인입니다.
   *
   * URI, single_host_origin, none 입니다.
   *
   * 기본 값은 single_host_origin 입니다.
   */
  cookie_policy?: string | "single_host_origin" | "none";
  /**
   * Scope (optional)
   *
   * 공백으로 구분된 문자열료, 요청할 범위입니다.
   *
   * fetch_basic_profile이 true이면 optional 입니다.
   */
  scope?: string;
  /**
   * Fetch Basic Profile (optional)
   *
   * 로그인할 때 사용자의 기본 프로필 정보를 가져옵니다.
   *
   * Scope 범위 내에서 Profile, Email, OpenId를 추가합니다.
   *
   * 기본 값은 true 입니다.
   */
  fetch_basic_profile?: boolean;
  /**
   * Hosted Domain (optional)
   *
   * 사용자가 로그인하기 위해 속해야하는 G Suite 도메인입니다.
   * 이는 클라이언트에 의해 수정될 수 있으므로 반환된 사용자의 호스팅된 도메인 속성을 확인해야 합니다.
   * 클라이언트에서 GoogleUser.getHostedDomain()을 사용하고, 서버의 ID Token에서 hd 클레임을 사용하여 도메인이 예상한대로 설정되어있는 지 확인해야 합니다.
   */
  hosted_domain?: string;
  /**
   * UX Mode (optional)
   *
   * 로그인에 사용할 UX 모드입니다.
   * 기본적으로 팝업으로 동작합니다.
   *
   * popup, redirect 중에 하나를 선택할 수 있습니다.
   */
  ux_mode?: "popup" | "redirect";
  /**
   * Redirect URI (optional)
   *
   * ux_mode='redirect'를 사용하는 경우 이 매개 변수를 사용하면 로그인 끝에 사용될 기본 redirect_uri를 재정의할 수 있습니다.
   * 기본 redirect_uri는 query parameter와 hash가 제거된 현재 URL 입니다.
   */
  redirect_uri?: string;
}

interface GoogleAuthSignInParameters {
  /**
   * Prompt (optional)
   *
   * 로그인 동의 동작에 특정 모드를 적용합니다.
   *
   * consent
   * 권한 부여 서버는 정보를 응용 프로그램에 반환하기 전에 사용자에게 동의를 요청합니다.
   *
   * select_account
   * 인증 서버는 사용자에게 Google 계정을 선택하라는 메시지를 표시합니다.
   * 이를 통해 여러 계정을 가진 사용자가 현재 세션이있을 수있는 여러 계정 중에서 선택할 수 있습니다.
   *
   * none ( 권장하지 않음 )
   * 권한 부여 서버는 인증 또는 사용자 동의 화면을 표시하지 않습니다.
   * 사용자가 아직 인증되지 않았고 요청 된 범위에 이전에 동의하지 않은 경우 오류를 반환합니다.
   * gapi.auth2.init 는 이전에 로그인 한 경우 자동으로 사용자를 애플리케이션에 로그인하므로 signIn({prompt: 'none'}) 호출은 일반적으로 실패합니다.
   */
  prompt?: "consent" | "select_account" | "none";
  /**
   * Scope (optional)
   *
   * gapi.auth2.init 매개 변수에 정의 된 범위 위에 공백으로 구분 된 문자열로 요청할 범위입니다.
   * fetch_basic_profile 이 false로 설정되지 않은 경우 선택 사항입니다.
   */
  scope?: string;
  /**
   * UX Mode (optional)
   *
   * 로그인 흐름에 사용할 UX 모드입니다.
   * 기본적으로 동의 흐름이 팝업으로 열립니다.
   * 유효한 값은 popup 및 redirect 입니다.
   */
  ux_mode?: "popup" | "redirect";
  /**
   * Redirect URI (optional)
   *
   * ux_mode='redirect' 를 사용하는 경우이 매개 변수를 사용하면 동의 흐름 끝에 사용될 기본 redirect_uri 를 재정의 할 수 있습니다.
   * 기본 redirect_uri 는 쿼리 매개 변수와 해시 조각이 제거 된 현재 URL입니다.
   */
  redirect_uri?: string;
}

interface GoogleAuth {
  signIn: (params?: GoogleAuthSignInParameters) => Promise<any>;
}

declare global {
  interface Window {
    gapi: {
      load: (type: string, callback: () => void) => void;
      auth2: {
        init: (params: GoogleAuth2InitParameters) => Promise<any>;
        getAuthInstance: () => GoogleAuth;
      };
    };
  }
}
