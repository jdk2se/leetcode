const str1 = 'leetcode';// 0
const str2 = 'loveleetcode'; // 2
const str3 = 'adda'; // -1

// O(n) сложность алгоритма
// O(1) сложность по памяти т.к. имеем ограниченное кол-во букв
const firstUniqueChar = (str) => {
    const hash = {};

    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in hash)) {
            hash[str[i]] = 1;
        }
        else {
            hash[str[i]]++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (1 === hash[str[i]]) {
            return i;
        }
    }
    
    return -1;
};

console.log(firstUniqueChar(str1));
console.log(firstUniqueChar(str2));
console.log(firstUniqueChar(str3));