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

console.log(shuffle(input));