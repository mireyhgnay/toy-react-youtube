# <div align="center">👩🏻‍💻 API 사용해보기</div>

<br>

## 1. 사용하고자 하는 API 종류 선택

**Youtube API > search > list**

https://developers.google.com/youtube/v3/docs/search/list?hl=en

(Korean Ver : https://developers.google.com/youtube/v3/docs/search/list?hl=ko)

<br>
<br>

## 2. use case 에서 사용하고자하는 태그</>를 선택하기

<img width="716" alt="1" src="https://github.com/mireyhgnay/toy-react-youtube/assets/111990266/1cd45816-cc26-4e01-a421-cb94b9bf8751">

<br>
<br>

## 3. HTTP 탭에서 Request parameters 에서 파라미터 설정하기

<img width="685" alt="2" src="https://github.com/mireyhgnay/toy-react-youtube/assets/111990266/65e82d3f-0854-4787-92ae-59859ce20354">

우리가 어떤 URL을 통해서 API 통신을 할건지 확인할 수 있다.  
즉, 우리가 API를 사용할 때 쓰면되는 http 주소가 나온다.

<br>

**`Default`**

```
https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY]
```

<br>

**`Request parameters`**

- part = snippet
  - 특정한 정보를 받아옴
- maxResults = 25
  - 검색 결과의 최대 갯수는 25개
- q = bts
  - 쿼리는 키워드를 설정

```
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=[YOUR_API_KEY]
```

<br>
<br>

## 4. API URL 확인하기

발급 받은 API KEY를 넣어서 url 내용을 확인해 보면

- 맨 상단 객체 내용은 메소드 내용이고,
- **우리가 받아온 검색 결과에 대한 데이터는 items 배열안에 들어있다.**
- 객체들이 한 비디오의 정보가 들어있는 것이다.
