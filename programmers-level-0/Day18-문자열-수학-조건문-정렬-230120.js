// 1. 문자열안에 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/120908
function solution1(str1, str2) {
  let answer = str1.includes(str2) ? 1 : 2;
  return answer;
}

// 2. 제곱수 판별하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120909
function solution2(n) {
  let answer = Math.sqrt(n) % 1 === 0 ? 1 : 2;
  return answer;
}

// 3. 세균 증식
// https://school.programmers.co.kr/learn/courses/30/lessons/120910
function solution3(n, t) {
  let answer = n;
  // n = 3, t = 3 / n = 4, t = 5
  // 3*2*2*2 / 4*2*2*2*2*2
  // for문 O(n)
  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }
  return answer;
}

// 4. 문자열 정렬하기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120911
function solution(my_string) {
  let answer = my_string.toLowerCase().split("").sort().join("");
  return answer;
}
