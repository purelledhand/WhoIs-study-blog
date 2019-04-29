---
layout: post
title: 5. == vs === vs typeof
image: img/33-concepts.png
author: Whois FE group
date: "2019-04-29T19:14:00.000Z"
tags: ["Front End"]
---
## == vs === vs typeof

typeof는 바로 다음에 오는 값의 자료형을 문자열 형태로 반환해주는 연산자이다.

typeof의 반환값은 “undefined” “object” “boolean” “number” “string” “function” “symbol” 7개로 한정되어　있다.

 

=== 완전 항등 연산자(TRIPLE EQUEALS)은 일반적인 프로그래밍 언어의 비교로 볼 수 있다.

 동일한 유형의 값만을 고려합니다.

ex)

console.log(1===1);

console.log(“1”===string(“1”));

console.log(“1”===1);

console.log(false===0);

console.log(“1”=== new String(“1”));

​     

==(DOUBLE EQUALS)는 서로 다른타입의 값을 같은 타입으로 강제 변환한 후에 서로 비교해준다 

ex)

console.log(“1”==1)

console.log(1==true)

console.log(0==false)

console.log(“”==false)

console.log(undefined==“”)

​     

코드를 간결하게하기 위해 의도를 드러내는 코드를 사용하는 것이 좋다.

코드는 한 번만 쓰여지지만 여러 번 읽힐 수 있으므로 가능한 한 독자가 쉽게 읽을 수 있도록하는 것이 좋다.

