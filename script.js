// const A = document.querySelector('#A')
// const B = document.querySelector('#B')
// const C = document.querySelector('#C')

// let count = 0

// A.addEventListener('click', () => {
//     count++;
//     // 奇数偶数の判定
//     if (count%2===1){
//         A.textContent = '〇'
//     } else {
//         A.textContent = '×'
//     }
// })

// B.addEventListener('click', () => {
//     count++;
//     // 奇数偶数の判定
//     if (count%2===1){
//         B.textContent = '〇'
//     } else {
//         B.textContent = '×'
//     }
// })

// C.addEventListener('click', () => {
//     count++;
//     // 奇数偶数の判定
//     if (count%2===1){
//         C.textContent = '〇'
//     } else {
//         C.textContent = '×'
//     }
// })

// これは配列が入る
const masu = document.querySelectorAll('.board div');
console.log(masu);

let count = 0

masu[0].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[0].textContent = '〇'
    } else {
        masu[0].textContent = '×'
    }
})
masu[1].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[1].textContent = '〇'
    } else {
        masu[1].textContent = '×'
    }
})
masu[2].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[2].textContent = '〇'
    } else {
        masu[2].textContent = '×'
    }
})
masu[3].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[3].textContent = '〇'
    } else {
        masu[3].textContent = '×'
    }
})
masu[4].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[4].textContent = '〇'
    } else {
        masu[4].textContent = '×'
    }
})
masu[5].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[5].textContent = '〇'
    } else {
        masu[5].textContent = '×'
    }
})
masu[6].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[6].textContent = '〇'
    } else {
        masu[6].textContent = '×'
    }
})
masu[7].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[7].textContent = '〇'
    } else {
        masu[7].textContent = '×'
    }
})
masu[8].addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        masu[8].textContent = '〇'
    } else {
        masu[8].textContent = '×'
    }
})