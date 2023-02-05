// 1. 모음 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120849
function solution1(my_string) {
  let answer = "";
  for (let i of my_string) {
    if (i == "a") answer += "";
    else if (i == "e") answer += "";
    else if (i == "i") answer += "";
    else if (i == "o") answer += "";
    else if (i == "u") answer += "";
    else answer += i;
  }
  return answer;
}

// 2. 문자열 정렬하기 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120850
function solution2(my_string) {
  const regex = /[^0-9]/g;
  let answer = my_string
    .replace(regex, "")
    .split("")
    .map(Number)
    .sort((a, b) => a - b);
  return answer;
}

// 3. 숨어있는 숫자의 덧셈 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120851
function solution3(my_string) {
  const regex = /[^0-9]/g;
  let answer = my_string
    .replace(regex, "")
    .split("")
    .reduce((acc, v) => acc + Number(v), 0);
  return answer;
}

// 4. 소인수분해
// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution4(n) {
  let answer = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }
  return [...new Set(answer)];
}
