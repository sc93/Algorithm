function solution(office, k) {
    let arr = [...office];
    let max = 0;
    for (let i = 0; i <= arr.length - k; i++) {
        let count = 0;
        for (let j = 0; j <= arr[i].length - k; j++) {
            let sum = 0;
            for (let a = i; a < i + k; a++) {
                for (let b = j; b < j + k; b++) {
                    sum += arr[a][b];
                }
            }
            max = max < sum ? sum : max;
        }
    }
    return max;
}

solution(
    [
        [1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
    ],
    2,
);
// solution(
//     [
//         [1, 0, 0],
//         [0, 0, 1],
//         [1, 0, 0],
//     ],
//     2,
// );
