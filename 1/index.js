let arr = [[1, 2], [3, 4], [2, 1], [6, 5], [4, 3], [1, 1], [2, 2], [5, 6], [9, 5]];
let new_arr = [];
arr.map(sarr => {
    if (new_arr.length === 0) {
        new_arr.push(sarr);
    } else {
        let duplicate = false;
        new_arr.map(narr => {
            let duplicates = 0;
            if (isSame(narr, sarr)) {
                duplicate = true;
            }
        });
        if (duplicate === false) {
            new_arr.push(sarr)
        }

    }
});
console.log(new_arr);

function isSame(arr1, arr2) {
    let sarr1 = JSON.parse(JSON.stringify((arr1))).sort();
    let sarr2 = JSON.parse(JSON.stringify((arr2))).sort();
    if (sarr1.length !== sarr2.length) {
        return false;
    }
    let ssarr1 = sarr1.join("");
    let ssarr2 = sarr2.join("");
    if (ssarr1 !== ssarr2) {
        return false;
    }
    return true;
}