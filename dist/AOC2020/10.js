"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_1 = require("./global");
const input = `59
134
159
125
95
92
169
43
154
46
110
79
117
151
141
56
87
10
65
170
89
32
40
118
36
94
124
173
164
166
113
67
76
102
107
52
144
119
2
72
86
73
66
13
15
38
47
109
103
128
165
148
116
146
18
135
68
83
133
171
145
48
31
106
161
6
21
22
77
172
28
78
96
55
132
39
100
108
33
23
54
157
80
153
9
62
26
147
1
27
131
88
138
93
14
123
122
158
152
71
49
101
37
99
160
53
3`;
const inputTest = `16
10
15
5
1
11
7
19
6
12
4`;
const inputTest2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;
console.time('vamos');
const inputArray = global_1.global.inputToArrayInt(input);
let sorted = inputArray.sort((a, b) => a - b);
sorted.splice(0, 0, 0); //añado el 0 al array
let result = 0;
const check = (index) => {
    if (index >= sorted.length - 1) {
        result = result + 1;
        return;
    }
    let next;
    for (let j = 1; j < 4; j++) {
        next = sorted[index + j] - sorted[index];
        if (next === 1 || next === 2 || next === 3) {
            check(index + j);
        }
    }
};
check(0);
console.log(result);
console.timeEnd('vamos');
//SECOND PART
/* console.time('vamos')
const inputArray: number[] = global.inputToArrayInt(inputTest2);
let sorted: number[] = inputArray.sort((a, b) => a - b);
sorted.splice(0,0,0) //añado el 0 al array

let result: number = 0;
const check = (index: number, auxResult:number[]) => {
  let aux:number[]=[...auxResult]
  if (index >= sorted.length - 1) {
    aux.push(sorted[index])
    result = result + 1;
    return;
  }
  let next: number;
  for (let j = 1; j < 4; j++) {
    next = sorted[index + j] - sorted[index];
    if (next === 1 || next === 2 || next === 3) {
      const aux2:number[]=[...aux]
        aux2.push(sorted[index]);
      check(index + j,aux2);
    }
  }
};
check(0,[]);
console.log(result);
console.timeEnd('vamos') */
/* FIRST PART */
/* let valueAnt:number=0
let diffOne: number = 0;
let diffTwo: number = 0;
let diffThree: number = 0;
for (let i = 0; i < sorted.length; i++) {
  const diff: number = sorted[i] - valueAnt
  valueAnt=sorted[i]
  switch (diff) {
    case 1:
      diffOne++;
      break;
    case 2:
      diffTwo++;
      break;
    case 3:
      diffThree++;
      break;
    default:
        console.log('Cuidado');
      break;
  }
}
diffThree++

console.log(diffOne * diffThree); */
