// const solution = (arr, num) => {
//     for (let i = 0; i < num; i++) {
//         arr = [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
//     }
//     return arr;
// };
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));

// function solution(d, budget) {
//     return d
//         .sort((a, b) => a - b)
//         .filter((v) => {
//             budget -= v;
//             return budget >= 0;
//         }).length;
// }
// console.log(solution([1, 3, 2, 5, 4, 8, 9, 1, 1, 1, 1, 1], 11));
// function solution(d, budget) {
//     d.sort((a, b) => a - b);

//     while (d.reduce((a, b) => a + b, 0) > budget) d.pop();
//     console.log(d);
//     return d.length;
// }

// function solution(nums) {
//     let count = 0;
//     const calcul = (num) => {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     };

//     for (let a = 0; a < nums.length - 2; a++) {
//         for (let b = a + 1; b < nums.length - 1; b++) {
//             for (let c = b + 1; c < nums.length; c++) {
//                 if (calcul(nums[a] + nums[b] + nums[c])) count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(solution([1, 2, 3, 4]));
// console.log(solution([1, 2, 7, 6, 4]));

// function solution(nums) {
//     const set = new Set(nums);
//     return set.size >= nums.length / 2 ? nums.length / 2 : set.size;
// }

// solution([3, 1, 2, 3]);

// function solution(a, b) {
// [a,b] = a > b ? [b,a] : [a,b];
// return (a + b) * ((b - a + 1) / 2);
// }

// console.log(solution(0, 100));

// function solution(a, b) {
//     [a, b] = a > b ? [b, a] : [a, b];
//     let num = 1;
//     for (let i = a; i < b; i++) {
//         num = num * i;
//     }
//     return num;
//     // return (a + b) * ((b - a + 1) / 2);
// }
// console.log(solution(1, 5));

// function solution(strings, n) {
//     strings.sort((a, b) => {
//         const _a = a[n];
//         const _b = b[n];
//         if (_a === _b) {
//             if (a < b) {
//                 return -1;
//             } else if (a > b) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         } else {
//             return a[n] < b[n] ? -1 : 1;
//         }
//     });
//     return strings;
// }
// console.log(solution(['sun', 'bed', 'car'], 1));
// console.log(solution(['abcdef', 'abcdfgg', 'cdx', 'cdx'], 2));

// function solution(s) {
//     const p = s.match(/p/gi);
//     const y = s.match(/y/gi);
//     return (p ? p.length : 0) === (y ? y.length : 0) ? true : false;
// }
// console.log(solution('pPoooyY'));

// function solution(s) {
//     // let arr = Array.from(s);

//     // arr.sort((a,b) => {
//     //     if(a>b){
//     //         return -1;
//     //     } else if ( a<b) {
//     //         return 1;
//     //     }
//     //     return 0;
//     // });
//     return s.split('').sort().reverse().join('');
// }
// console.log(solution('Zbcdefg'));

// function solution(s) {
//     const len = s.length;
//     if (len === 4 || len === 6) {
//         return s.split('').every((c) => !isNaN(c));
//     }
//     return false;
// }
// console.log(solution('2345'));

// function solution(seoul) {
//     return `김서방은 ${seoul.findIndex(x=>x === "Kim")}에 있다`
// }
