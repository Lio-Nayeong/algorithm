// 1. 숫자 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120904
function solution1(num, k) {
  let answer = String(num).search(k) + 1;
  // if(answer === 0) answer = -1
  return answer ? answer : -1;
}

// 2. n의 배수 고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/120905
function solution2(n, numlist) {
  let answer = numlist.filter((v) => v % n === 0);
  return answer;
}

// 3. 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120906
function solution3(n) {
  // let answer = String(n).split('').map(Number).reduce((acc, v) => acc + v);
  let answer = String(n)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  return answer;
}

// 4. OX퀴즈
// https://school.programmers.co.kr/learn/courses/30/lessons/120907
function solution4(quiz) {
  let answer = [];
  for (let i of quiz) {
    let arr = i.split(" ");

    if (arr[1] == "+") {
      if (Number(arr[0]) + Number(arr[2]) == arr[4]) answer.push("O");
      else answer.push("X");
    }
    if (arr[1] == "-") {
      if (Number(arr[0]) - Number(arr[2]) == arr[4]) answer.push("O");
      else answer.push("X");
    }
  }
  return answer;
}
