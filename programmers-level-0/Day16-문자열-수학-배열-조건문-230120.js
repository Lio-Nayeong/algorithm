// 1. 편지
// https://school.programmers.co.kr/learn/courses/30/lessons/120898
function solution1(message) {
  let answer = message.length * 2;
  return answer;
}

// 2. 가장 큰 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120899
function solution2(array) {
  let answer = [Math.max(...array), array.indexOf(Math.max(...array))];
  return answer;
}

// 3. 문자열 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120902
function solution3(my_string) {
  let arr = my_string.split(" ");
  let answer = Number(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] == "+") answer += Number(arr[i + 1]);
    if (arr[i] == "-") answer -= Number(arr[i + 1]);
  }
  return answer;
}

// 4. 배열의 유사도
// https://school.programmers.co.kr/learn/courses/30/lessons/120903
function solution4(s1, s2) {
  let answer = 0;
  // for (let i of s1){
  //     for (let j of s2){
  //         if(i == j) answer++
  //     }
  // }
  for (let i of s1) if (s2.includes(i)) answer++;
  return answer;
}
