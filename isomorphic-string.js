const a = "bbbaaaba";
const b = "aaabbbba";



const isIsomorphic = (a, b) => {
   
    let str1 = countLetters(a);
    let str2 = countLetters(b);

    

    function countLetters (str) {
        const map = new Map();

        for (let i = 0; i < str.length; i++) {
            if (map.has(str[i])) {
                map.set(str[i], map.get(str[i]) + 1);
            }
            else {
                map.set(str[i], 1);
            }
        }
    
        return Array.from(map.values()).sort().join('');
    }

    console.log(str1, str2, (str1 === str2));
};


isIsomorphic(a,b);
