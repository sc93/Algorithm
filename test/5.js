// const [A, B, C, D, E, F, G, H, J, K] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function solution(N, S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push({
            A: true,
            B: true,
            C: true,
            D: true,
            E: true,
            F: true,
            G: true,
            H: true,
            J: true,
            K: true,
        });
    }
    if (S.length !== 0) {
        const reserve = S.split(" ").map((seat) => {
            const y = seat.slice(-1);
            const x = parseInt(seat.split(y)[0]) - 1;
            return { x, y };
        });

        reserve.forEach((seat) => {
            const { x, y } = seat;
            arr[x][y] = false;
        });
    }

    const count = arr.reduce((prev, row) => {
        let count = 0;

        if (row.D && row.E && row.F && row.G) {
            if (row.B && row.C && row.H && row.J) {
                count += 2;
            } else {
                count++;
            }
        } else {
            if (row.B && row.C && row.D && row.E) {
                count++;
            }
            if (row.F && row.G && row.H && row.J) {
                count++;
            }
        }
        return (prev += count);
    }, 0);
    return count;
}
solution(2, "1A 2F 1C");
