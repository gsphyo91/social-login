# Social Login

## Installation

```bash
yarn

yarn start
```

## Social Login

### 1. Kakao

#### Example

```tsx
<KakaoLogin
  size="mediun"
  apiKey="Kakao API key"
  redirectURI="Redirect URI"
  onSuccess={onSuccess}
  onFail={onFail}
  style={style}
/>
```

#### Description

|속성|type|default|설명|
|:-:|:-:|:-:|:-:|
|size|`"medium"` `"large"`|"medium"|로그인 버튼의 사이즈|
|apiKey|`string`|-|Kakao Developer 사이트에서 발급받은 API Key|
|redirectURI|`string`|-|Kakao Developer에 등록한 Redirect URI|
|onSuccess|`(data: KakaoLoginSuccessInterface) => void`|-|로그인에 성공했을 때 실행되는 함수|
|onFail|`(err: AxiosResponse) => void`|-|인증에 실패했을 때 실행되는 함수|
|style|`CSSProperties`|-|버튼 스타일|

### 2. Google(예정)

### 3. Naver(예정)

### 4. Apple(예정)
