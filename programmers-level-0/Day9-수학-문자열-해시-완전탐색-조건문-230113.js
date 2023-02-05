// 1. 개미 군단
// https://school.programmers.co.kr/learn/courses/30/lessons/120837
function solution1(hp) {
  // 배수, 나머지
  let answer = parseInt(hp / 5);
  if (hp % 5 === 4 || hp % 5 === 2) answer += 2;
  if (hp % 5 === 3 || hp % 5 === 1) answer += 1;
  return answer;
}

// 2. 모스부호 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120838
function solution2(letter) {
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  const mos = letter.split(" ");

  let answer = "";
  // for (let i = 0; i < mos.length; i++){
  //     answer += morse[mos[i]];
  // }
  for (let i of mos) {
    answer += morse[i];
  }
  return answer;
}

// 3. 가위 바위 보
// https://school.programmers.co.kr/learn/courses/30/lessons/120839
function solution3(rsp) {
  // 가위는 2 < 0, 바위는 0 < 5, 보는 5 < 2
  let answer = "";
  let array = rsp.slice();
  for (let i of array) {
    if (i == 2) answer += 0;
    if (i == 0) answer += 5;
    if (i == 5) answer += 2;
  }
  return answer;
}

// 4. 구슬을 나누는 경우의 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120840
function solution4(balls, share) {
  function factorial(n) {
    let answer = BigInt(1);
    for (let i = n; i > 1; i--) {
      answer *= BigInt(i);
    }
    return answer;
  }
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
