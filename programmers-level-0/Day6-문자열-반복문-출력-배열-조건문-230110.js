// 1. 문자열 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/120822
function solution1(my_string) {
  let answer = my_string.split("").reverse().join("");
  return answer;
}

// 2. 직각삼각형 출력하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120823
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  /* 문제 풀이 */
  // console.log(Number(input[0]));
  for (let i = 1; i <= Number(input[0]); i++) {
    console.log("*".repeat(i));
  }
});

// 3. 짝수 홀수 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120824
function solution3(num_list) {
  let odd = 0,
    even = 0;
  for (let i of num_list) {
    if (i % 2 === 0) even++;
    else odd++;
  }
  return [even, odd];
}

// 4. 문자 반복 출력하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120825
function solution4(my_string, n) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }
  return answer;
}
