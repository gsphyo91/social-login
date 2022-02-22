interface LoadScriptInterface {
  /**
   * ID (required)
   *
   * script 태그에 지정될 id
   */
  id: string;
  /**
   * Src (required)
   *
   * script URL
   */
  src: string;
  /**
   * async (optional)
   *
   * script를 async로 다운로드할 지 결정
   *
   * 기본 값은 true
   */
  async?: boolean;
  /**
   * defer (optional)
   *
   * script file을 async로 다운로드하고 실행할 지 결정
   *
   * 기본 값은 true
   */
  defer?: boolean;
  /**
   * onError (required)
   *
   * script 다운로드 혹은 실행에 실패할 경우 실행되는 함수
   */
  onError: (err: string | Event) => void;
  /**
   * onLoad (required)
   *
   * script를 다운로드하고 실행이 완료되었을 때 실행되는 함수
   */
  onLoad: () => void;
}

export const loadScript = ({
  id,
  src,
  async = true,
  defer = true,
  onError,
  onLoad,
}: LoadScriptInterface) => {
  const element = document.getElementsByTagName("script")[0];
  let js = element;
  js = document.createElement("script");
  js.id = id;
  js.src = src;
  js.async = async;
  js.defer = defer;

  if (element && element.parentNode) {
    element.parentNode.insertBefore(js, element);
  } else {
    document.head.appendChild(js);
  }

  js.onerror = onError;

  js.onload = onLoad;
};
