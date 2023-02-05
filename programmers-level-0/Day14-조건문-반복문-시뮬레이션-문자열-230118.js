// 1. 가까운 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120890
function solution1(array, n) {
  let arr = array.sort((a, b) => a - b);
  let answer = arr.map((v) => Math.abs(n - v));
  let min = answer.indexOf(Math.min(...answer));
  return arr[min];
}

// 2. 369게임
// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution2(order) {
  let answer = 0;
  let arr = [...order.toString()];
  for (let i of arr) {
    if (i == 3 || i == 6 || i == 9) answer++;
  }
  return answer;
}

// 3. 암호 해독
// https://school.programmers.co.kr/learn/courses/30/lessons/120892
function solution3(cipher, code) {
  let answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

// 4. 대문자와 소문자
// https://school.programmers.co.kr/learn/courses/30/lessons/120893
function solution4(my_string) {
  let answer = "";
  for (let i of my_string) {
    if (i == i.toUpperCase()) answer += i.toLowerCase();
    if (i == i.toLowerCase()) answer += i.toUpperCase();
  }
  return answer;
}
