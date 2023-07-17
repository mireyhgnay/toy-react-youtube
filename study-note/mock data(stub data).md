# <div align="center">👩🏻‍💻 mock data(stub data)란?</div>

<br>

## mock data란?

- mock: 거짓된, 가짜의

- 이름에서 알 수 있듯이 mock data 는 가짜 데이터, 샘플 데이터 정도로 해석할 수 있습니다.

- 즉, **실제 API 에서 받아온 데이터가 아닌 프론트엔드 개발자가 필요에 의해 샘플로 만들어 본 데이터**를 말합니다.

<br>
<br>

## mock data를 사용하는 이유는?

개발하면서 api를 무제한으로 요청할 수 없습니다.

youtube open api 의 경우 한계가 10000? 번 정도로 한계가 있다.

<br>

또는 업무 중 프론트엔드 개발을 진행하려하는데 필요한 백엔드 API가 완성이 안되었을수도 있습니다.

이러한 경우에는 백엔드에서 API가 완성될때까지 무작정 기다리는 게 아니라,

mock data를 만들어 데이터가 들어오는 상황을 미리 대비하고

데이터에 맞게 UI가 의도한대로 구현되는지 먼저 확인해야 합니다.

<br>

프로젝트 내에 public>data>mock-data.json 파일 생성해서 mock data를 저장해줍니다.

저장한 API를 http 요청을 통해서 API 요청을 보내고 응답을 받아 볼 수 있습니다. (fetch)

<br>
<br>

## 그럼 진짜 API는 언제 사용하나?

개발하는 동안 로컬에서 계속 진짜 API를 가져와 사용하면 한정된 용량 때문에 분명 작업중 API 이슈가 발생할 것 입니다.

로컬에서 개발이 거의 다 완료되고 배포하기 전에 실제 API를 가져와 사용할 수 있도록 합니다.

<br>

---

<br>

@Reference

https://velog.io/@sorin44/Mock-Data-%ED%99%9C%EC%9A%A9%EB%B2%95
