// 1. 컨트롤 제트
// https://school.programmers.co.kr/learn/courses/30/lessons/120853
function solution1(s) {
  let answer = s.split(" ");
  for (let i of answer) {
    if (answer.includes("Z")) answer.splice(answer.indexOf("Z") - 1, 2);
  }
  return answer.reduce((a, b) => a + Number(b), 0);
}

// 2. 배열 원소의 길이
// https://school.programmers.co.kr/learn/courses/30/lessons/120854
function solution2(strlist) {
  let answer = strlist.map((v) => v.length);
  return answer;
}

// 3. 중복된 문자 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120888
function solution3(my_string) {
  let answer = [...new Set(my_string)].join("");
  return answer;
}

// 4. 삼각형의 완성조건 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120889
function solution4(sides) {
  let max = Math.max(...sides);
  let sum = sides.reduce((acc, v) => acc + v);
  let answer = 2;
  if (sum - max > max) answer = 1;
  return answer;
}
