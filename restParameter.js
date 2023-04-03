// 나머지 매개변수라는 이름으로 부르는 ...arguments
// ...(점 세개)작성법은
// 객체 데이터를 배열로 간단하게 처리하는 상당히 편리한 작성법이다.
// 이를 사용하여 함수의 매개변수를 배열로 받을 수 있다.
function restParamterExample(...properties) {
  // 임의의 객체 리터럴 tempObject 선언
  let tempObject = {
    id: "",
    name: "",
    password: "",
    email: ""
  };
  // 오직 배열만 사용할 수 있는 .shift() 매개변수를 사용할 수 있다.
  // .shift()는 배열의 첫번째 요소를 제거하고, 제거된 요소를 반환한다.
  for (let key in tempObject) {
    tempObject[key] = properties.shift();
  }

  return tempObject;
}

console.log(restParamterExample("leejaekwon" ,"이재권", "1234", "nowkwon97@gmail.com"));
// 매개변수에 문자열을 넣었음에도 '배열'로 처리된 것을 확인 가능

// 매개변수가 너무 많아지는 경우가 필연히 발생한다.
function tooManyParameters(a, b, c, d, e, f, g, h, i, j, k, l, n) {
  let localArray = [a, b, c, d, e, f, g, h, i, j, k, l, n];
  // 위 localArray와 같이 배열로 일단 넣을 수는 있겠지만
  // 이렇게 하면, 매개변수가 늘어날 때마다, 배열도 늘려야하는 큰 문제가 발생
  // => 그래서 나온 것이 나머지 매개변수이다.
  return localArray;
}