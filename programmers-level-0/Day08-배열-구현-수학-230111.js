// 1. 배열 자르기
// https://school.programmers.co.kr/learn/courses/30/lessons/120833
function solution1(numbers, num1, num2) {
  let answer = numbers.slice(num1, num2 + 1);
  return answer;
}

// 2. 외계행성의 나이
// https://school.programmers.co.kr/learn/courses/30/lessons/120834
function solution2(age) {
  let str = age.toString();
  let answer = "";
  // a~z : 97~122 > -97
  for (let i of str) {
    answer += String.fromCharCode(Number(i) + 97);
  }
  return answer;
}

// 3. 진료순서 정하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120835
function solution3(emergency) {
  let sort = emergency.slice().sort((a, b) => b - a);
  let answer = emergency.map((v, i) => sort.indexOf(v) + 1);
  return answer;
}

// 4. 순서쌍의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120836
function solution4(n) {
  let answer = 1;
  // 20 = 2 * 2 * 5 // 1, 2, 4, 5, 10, 20
  // 100 = 2 * 2 * 5 * 5 // 1, 2, 4, 5, 10, 20, 25, 50, 100
  // 소인수분해, 약수
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) answer++;
  }
  return answer;
}
