# <div align="center">👩🏻‍💻 Youtube Open API 이해하고 사용하기</div>

<br>

## Open API 문서 읽기

Open API 를 검색할 때 \_\_\_ API 라고 검색하면 된다.

https://developers.google.com/youtube/v3/docs?hl=ko

<br>
<br>

## API 호출

https://developers.google.com/youtube/v3/docs?hl=ko#calling-the-api

- 모든 요청은 key 를 통해서 api를 호출할 수 있다.
- 모든 삽입, 업데이트 및 삭제 요청 시에는 반드시 인증 토큰을 전송해야 합니다.
- 유튜브에서 사용하는 주요 기능들에 대한 API 들을 어떻게 사용할 수 있는지 확인할 수 있다.👍

  ![youtube api category](https://github.com/mireyhgnay/toy-react-youtube/assets/111990266/ebd58f9e-50b9-4b90-8667-fa24ab92728b)

<br>
<br>

## API KEY

1. [Google API](https://code.google.com/apis/console/?hl=ko) 가입 후
2. [프로젝트 만들기] 버튼 클릭
3. 프로젝트 이름 설정하기 (유튜브 프로젝트면 youtube)
4. 프로젝트의 대시보드가 생성됨
5. [사용 설정된 API 및 서비스(APIs & services)] 페이지 진입
6. '+ API 및 서비스 사용 설정’ 클릭
7. API 를 선택할 수 있는 페이지 나타남  
   https://console.cloud.google.com/apis/library?project=norse-analyst-388407
8. 우리가 사용할 Youtube Data API 선택 > 사용 버튼 클릭  
   https://console.cloud.google.com/apis/library/youtube.googleapis.com?project=norse-analyst-388407
9. [관리] 버튼 클릭 > 사용자 인증정보 추가하기
10. '이 API를 사용하려면 사용자 인증 정보가 필요할 수 있습니다.' 라는 경고 메세지 옆
    [사용자 인증정보 만들기] 클릭
11. 공개 데이터(public data) 선택 후, [다음] 버튼 클릭
12. 본인의 API KEY 가 생성된다.  
    (별도로 키를 저장하지 않아도 사용자 인증 정보에서 확인할 수 있다.)
