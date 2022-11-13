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
