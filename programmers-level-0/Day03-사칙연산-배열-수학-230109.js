// 1. 나머지 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120810
const solution1 = (num1, num2) => num1 % num2;

// 2. 중앙값 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120811
function solution2(array) {
  if (array.length % 2 == 0) return 0;

  let answer = array.sort((a, b) => a - b);
  let middle = Math.ceil(array.length / 2);
  return answer[middle - 1];
}

// 3. 최빈값 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120812
function solution3(array) {
  let answer = [],
    obj = {};
  // arr[0] = 1 // [1, 1]
  // arr[1] = 2 // [2, 1]
  // arr[2] = 3 // [3, 1]
  // arr[3] = 3 // [3, 2]
  // arr[4] = 3 // [3, 3]
  // arr[5] = 4 // [4, 1]

  array.forEach((i) => {
    if (obj[i]) obj[i] += 1;
    else obj[i] = 1;
  });
  // console.log(Object.values(obj));

  for (let i in obj) {
    answer.push([i, obj[i]]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  // console.log(answer);

  for (let i = 1; i < answer.length; i++) {
    if (answer[0][1] === answer[i][1]) return -1;
  }
  return Number(answer[0][0]);
}

// 4. 짝수는 싫어요
// https://school.programmers.co.kr/learn/courses/30/lessons/120813
function solution4(n) {
  let answer = [];
  for (let i = 1; i < n + 1; i = i + 2) {
    answer.push(i);
  }
  return answer;
}
