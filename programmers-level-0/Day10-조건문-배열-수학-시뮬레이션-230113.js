// 1. 점의 위치 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120841
function solution1(dot) {
  if (dot[0] > 0 && dot[1] > 0) return 1;
  if (dot[0] < 0 && dot[1] > 0) return 2;
  if (dot[0] < 0 && dot[1] < 0) return 3;
  if (dot[0] > 0 && dot[1] < 0) return 4;
}

// 2. 2차원으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120842
function solution2(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length / n; i++) {
    answer.push(num_list.slice(i * n, i * n + n));
  }
  return answer;
}

// 3. 공 던지기
// https://school.programmers.co.kr/learn/courses/30/lessons/120843
function solution3(numbers, k) {
  let answer = (1 + 2 * (k - 1)) % numbers.length;
  return numbers[answer - 1];
}

// 4. 배열 회전시키기
// https://school.programmers.co.kr/learn/courses/30/lessons/120844
function solution4(numbers, direction) {
  let first = numbers[0];
  let last = numbers[numbers.length - 1];
  let answer = [...numbers];
  // console.log(first, last);

  if (direction == "right") {
    answer.pop();
    answer.unshift(last);
  }
  if (direction == "left") {
    answer.shift();
    answer.push(first);
  }
  return answer;
}
