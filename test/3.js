// html에 있는 N개의 테이블 중 자식 td가 가장 많은 테이블의 td 갯수구하기
function solution() {
    const tables = document.querySelectorAll("table");
    if (tables.length === 0) return 0;
    const tds = Array.from(tables).map(
        (table) => table.querySelectorAll("td").length,
    );
    const max = tds.reduce((prev, current) =>
        prev > current ? prev : current,
    );
    return max;
}
console.log(solution());
