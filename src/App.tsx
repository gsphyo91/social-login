import { Route, Routes } from "react-router-dom";
import { KakaoLogin, KakaoLoginSuccessInterface } from "./kakao";

function App() {
  const onSuccessKakao = (data: KakaoLoginSuccessInterface) => {
    console.log(data);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <KakaoLogin
            apiKey={process.env.REACT_APP_KAKAO_API_KEY as string}
            redirectURI="http://localhost:3000"
            onSuccess={onSuccessKakao}
          />
        }
      />
    </Routes>
  );
}

export default App;
