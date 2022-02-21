/// <reference types="react-scripts" />
interface Window {
  Kakao: {
    init: (apiKey: string) => void;
    Auth: {
      authorize: (options: { redirectUri: string; state?: string }) => void;
    };
  };
}
