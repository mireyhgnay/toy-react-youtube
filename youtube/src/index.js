import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

// 라우터 경로를 설명할 수 있는 경로를 각각 배열로 넣어준다.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Default Root
    errorElement: <NotFound />, // 우리가 지원하지 않는 경로일 경우
    children: [
      {
        // 기본으로 보여줄 페이지
        index: true,
        element: <Videos />,
      },
      { path: "/videos", element: <Videos /> }, // /(root)이든 /videos가 붙든 기본 비디오 목록 페이지를 보여준다.
      { path: "/videos/:keyword", element: <Videos /> }, // /videos/key 키워드가 붙으면 관련 비디오 목록 페이지를 보여준다.
      { path: "/videos/watch/:videoId", element: <VideoDetail /> }, // 특정 ID를 뒤에 붙혀주면 관련 상세정보 페이지를 보여준다.
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
