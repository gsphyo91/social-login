import { GoogleLogin } from "./google";
import { KakaoLogin } from "./kakao";

function App() {
  const onSuccess = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <KakaoLogin
        apiKey={process.env.REACT_APP_KAKAO_API_KEY as string}
        redirectURI="http://localhost:3000"
        onSuccess={onSuccess}
      />
      <GoogleLogin
        client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
        onSuccess={onSuccess}
      />
    </>
  );
}

export default App;
