---
layout: post
title: 25. Promises
image: img/33-concepts.png
author: Whois FE group
date: "2019-04-29T18:34:00.000Z"
tags: ["Front End"]
---

# Promises of JavaScript

> *비동기 작업의 제어*

## What is Promise?

> 자바스크립트는 단일 thread로 구성되어 모든 스크립트들을 실행할 때 하나씩만 실행할 수 있다. 콜백 함수를 많이 사용할 경우에 각각의 상황에서 일어나는 문제점들을 파악하기 위하여 사용한다.

## How to Use?
1st use simple use

```javascript
let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Good to go!');
	},1000);
    setTimeout(() => {
		resolve('uh oh');
	}, 500);
});

myPromise.them((res) => {
	console.log(res);
})
.catch((err) => {
    console.log(err);
});
```
2nd use give input by array
```javascript
let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Good to go!');
	},1000);
});

let myPromise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Promise 2 - the promising');
	},1500);
});

Promise.all([myPromise, myPromise2]).then((data) => {
	console.log(data);
});
```
3rd use error handling
```javascript
let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Good to go!');
	},1000);
});

let myPromise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('Promise 2 - the promising');
	},1500);
});

Promise.all([myPromise, myPromise2]).then((data) => {
	console.log(data);
})
.catch((err) => {
	console.log(err);
});
```
4th real world
```javascript
'use strict'

fetch('http://api.icndb.com/jokes/random/10').then((res) => {
	res.json().then((data) => {
		console.log(data);
	})
})
.catch((err) =>{
	console.log(err);
});
```

5th, example of code that we had made

```javascript
'use strict'

fetch('http://api.ope.nweathermap.org/data/2.5/weather?id=1835841&appid=e6be6ad793a1c6ac9a2d0de7dacd7ea8').then((res) => {
	res.json().then((data) => {
		console.log(data);
	})
})
.catch((err) =>{
	console.log(err);
});
```

