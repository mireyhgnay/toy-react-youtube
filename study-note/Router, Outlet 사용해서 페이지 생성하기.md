# <div align="center">👩🏻‍💻 Router, Outlet 사용해서 페이지 생성하기</div>

<br>

<APP> 을 기준으로 search header 는 계속 고정으로 있을 것이고!

- Default(/ or /videos) : 핫 트렌드 비디오 목록을 보여준다.

- Keyword(/videos/query) : 키워드를 검색하면 해당 키워드와 관련된 비디오 목록들이 나온다.

- Detail(/videos/watch/id) : 해당 id에 해당되는 상세보기 페이지가 나온다.

```
<App>
	/ 👉 <Videos>🔥
	/videos 👉 <Videos>🔥
	/videos/query 👉 <Videos>🔍
	/videos/watch/id 👉 <VideoDetail>
```

<br>

## 🔥 install

```bash
$ npm install react-router-dom
```

<br>

## 📝 오답 노트

index.js 파일에 라우터 돔 설정을 해주기!

나는 App.js 에다가 하고 Root.jsx 라는 페이지를 굳이굳이 만들어서 컴포넌트를 늘렸다..ㅎ

```jsx
// import 생략..

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Default Root
    errorElement: <NotFound />, // 우리가 지원하지 않는 경로일 경우
    children: [
      {
        index: true,
        element: <Videos />,
      },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:keyword", element: <Videos /> },
      { path: "/videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
```

<br>

라우터를 사용할 때는 우선 기존의 방식처럼 **`BrowserRouter`** 로 감싸지 않습니다.

**`CreateBrowserRouter`** 를 사용해서 경로를 지정하고,

**`RouterProvider`** 를 이용해서 구성요소들을 전달하고 활성화 합니다.
