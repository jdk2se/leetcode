let input = [1,2,3,4,5,6,7,8,9,10];

// O(n^2) 
const shuffle = (arr) => {
    const res = [];
    while (0 < arr.length) {
        const index = Math.floor(Math.random() * (arr.length - 1));
        res.push(arr[index]);
        arr.splice(index, 1);
    }

    return res;
}

//replace In place O(n)
const coolShuffle = (arr) => {
    for (let i = arr.length - 1; i >0; i--) {
        let rnd = Math.floor(Math.random() * i + 1);

        [arr[i], arr[rnd]] = [arr[rnd], arr[i]];
    }

    return arr;
};

// console.log(shuffle(input));
console.log(coolShuffle(input));