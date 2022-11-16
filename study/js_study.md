### 기초

- css나 js는 브라우저에서 연다고 실행되지 않음
- html을 브라우저에 열어서 실행해야 됨

### 변수(variable)

- 길이가 긴 변수 선언 시 CamelCase(띄어쓰기 대신 대문자로 단어 구별)
- const(=constant=상수=변하지 않는 값) 사용
  - 재선언 금지, 재할당 금지
- let 사용
  - 재선언 금지, 재할당 가능
- var 사용
  - 재선언 가능, 재할당 가능
- always const, sometimes let, never var ~~!

### data type

- null : 컴퓨터에 값이 없음을 의도적으로 알리기 위해 채워진 값
- undefined : 변수에 값을 지정하지 않으면 메모리 상에 자리는 존재, but 값이 채워지지 않은 채로 존재

### Object

- property를 가진 데이터 저장
- {}(중괄호)를 사용함
- 설명이 필요하지 않은 데이터 리스트들은 array, 설명이 필요한 정보가 담긴 데이터 리스트들은 object!

### Function

- 함수 기본 구조
  - function plus(x,y){}
- 객체 안에서의 함수 구조
  - plus: function(){}

### prompt()

- 사용자에게 창을 띄워 값을 받아냄
- 답을 할 때 까지 코드 실행을 일시정지 시킴

### type 변환

- type 확인 방법 => typeof 변수
- string을 number로 변환해주는 함수는 parseInt();
  - number가 아닌 type 입력 경우 NaN

### Document Object

- Javascript와 HTML은 이미 연결되어 있음
  - 불러올 수도 있고, 수정도 가능함!

### HTML in Javascript

- document.getElementById("")은 html에 있는 id를 불러올 수 있음
- js는 html이 표현하는 object를 보여줌 + html 항목을 불러온 뒤 변경 가능

### Searching For Elements

- getElementByClassName() : 많은 element를 가져올 때 씀(array 반환)
- getElementByTagName() : name 할당 가능(array 반환)
- querySelector : element를 CSS selector 방식으로 검색 가능(ex. h1:first-child), 단 하나의 element만 return(여러 개 있을 시 첫번째 element만 가져옴)
- querySelector : 조건에 맞는 element를 다 가져옴(array 반환)

### Events

- element의 내부를 보려면 console.dir()
- element중 on이 붙은 것들은 event(어떤 행위)
- 모든 event는 js가 listen 할 수 있음
- eventListner : event를 listen -> js에게 무슨 event를 listen 하고 싶은 지 알려주어야 함
- a.addEventListener("b"): 누군가가 a를 b하는 것을 listen
- a.addEventListener("b", function이름): a가 b하는 경우 function이 동작되기를 원함 -> js가 function 실행을 대신 눌러주길 바라는 경우이므로, 반드시 ()인 실행버튼을 적으면 안됨
  - addEventListener 안에 있는 함수는 직접 실행하지 않음!! 브라우저가 해주는 것임!!
- document의 body, head, title 이런 속성들은 중요하기 때문에 document.body.style 식의 명령이 허용되지만 div같은 속성은 호출이 되지 않음
  - div같은 나머지 element 들은 querySelector나 getElementById로 불러와야 됨
- window는 기본적으로 제공됨
- .addEventListener("click", -) 은 .onclick과 동일하지만 전자를 선호
  - .removeEventListener 통해서 event listener를 제거할 수 있기 때문
- .preventDefault()는 브라우저가 기본 동작을 실행하지 못하게 막음
  - form을 submit하면 브라우저는 기본적으로 새로고침을 함 -> preventDefault를 추가함으로써 브라우저의 기본 동작(새로고침)을 막음

### CSS in Javascript

- classList : class들을 목록으로 작업할 수 있게 만들어줌
  - HTML element가 가지고있는 요소를 사용
  - contains : 우리가 명시한 class가 HTML element의 class에 포함되어 있는지에 대한 여부를 알려줌
  - toggle : 토큰이 존재하면 제거, 존재하지 않으면 추가
