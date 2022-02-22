import { GoogleLogin } from "./google";
import { KakaoLogin } from "./kakao";

function App() {
  const onSuccess = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <KakaoLogin
        options={{
          client_id: process.env.REACT_APP_KAKAO_API_KEY as string,
          redirectUri: "http://localhost:3000",
        }}
        onSuccess={onSuccess}
      />
      <GoogleLogin
        options={{
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
        }}
        onSuccess={onSuccess}
      />
    </>
  );
}

export default App;
