// 1. 두 수의 나눗셈
// https://school.programmers.co.kr/learn/courses/30/lessons/120806
function solution1(num1, num2) {
  let answer = Math.trunc((num1 / num2) * 1000);
  return answer;
}

// 2. 숫자 비교하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120807
function solution2(num1, num2) {
  if (num1 === num2) return 1;
  else return -1;
}

// 3. 분수의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/120808
function solution3(denum1, num1, denum2, num2) {
  // (denum1 / num1) + (denum2 / num2)
  let top = denum1 * num2 + denum2 * num1;
  let bottom = num1 * num2;

  let one = 0;
  for (let i = 1; i < Math.max(top, bottom); i++) {
    if (top % i === 0 && bottom % i === 0) one = i;
  }
  console.log(one);

  // top === bottom
  if (top === bottom) return [1, 1];

  let answer = [top / one, bottom / one];
  return answer;
}

// 4. 배열 두 배 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120809
function solution4(numbers) {
  let answer = numbers.map((e) => e * 2);
  return answer;
}
