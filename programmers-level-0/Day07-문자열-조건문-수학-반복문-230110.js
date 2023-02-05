// 1. 특정 문자 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120826
function solution1(my_string, letter) {
  // let answer = my_string.split('').filter((v) => v !== letter).join('');
  let answer = my_string.split(letter).join("");
  return answer;
}

// 2. 각도기
// https://school.programmers.co.kr/learn/courses/30/lessons/120829
function solution2(angle) {
  let answer = 0;
  if (0 < angle && angle < 90) answer = 1;
  if (angle === 90) answer = 2;
  if (90 < angle && angle < 180) answer = 3;
  if (angle === 180) answer = 4;
  return answer;
}

// 3. 양꼬치
// https://school.programmers.co.kr/learn/courses/30/lessons/120830
function solution3(n, k) {
  let answer = n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
  return answer;
}

// 4. 짝수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120831
function solution4(n) {
  let answer = 0;
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}
