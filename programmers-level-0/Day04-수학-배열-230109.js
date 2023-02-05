// 1. 피자 나눠 먹기 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120814
function solution1(n) {
  return Math.ceil(n / 7);
}

// 2. 피자 나눠 먹기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120815
function solution2(n) {
  // 최소공배수? 나머지?
  // n과 6(2*3)의 최소공배수 구한 후 6으로 나누기
  let answer = 0;
  if (n == 1) answer = 1;
  if (n % 2 == 0) answer = n / 2; // 2 * n / 2 * 3 / 6
  if (n % 3 == 0) answer = n / 3;
  if (n % 6 == 0) answer = n / 6;
  if (n % 2 != 0 && n % 3 != 0 && n % 6 != 0 && n != 1) answer = n;
  // console.log(answer);
  return answer;
}

// 3. 피자 나눠 먹기 (3)
// https://school.programmers.co.kr/learn/courses/30/lessons/120816
function solution3(slice, n) {
  let answer = Math.ceil(n / slice);
  return answer;
}

// 4. 배열의 평균값
// https://school.programmers.co.kr/learn/courses/30/lessons/120817
const solution4 = (numbers) => (numbers[0] + numbers[numbers.length - 1]) / 2;
