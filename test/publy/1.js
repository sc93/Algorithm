function solution(estimates, k) {
    let max = 0;
    for (let i = 0; i <= estimates.length - k; i++) {
        let total = 0;
        for (let j = i; j < i + k; j++) {
            total += estimates[j];
        }
        max = max < total ? total : max;
    }
    return max;
}
console.log(solution([10, 1, 10, 1, 1, 4, 3, 10], 6));
console.log(solution([5, 1, 9, 8, 10, 5], 3));
console.log(solution([5], 1));
