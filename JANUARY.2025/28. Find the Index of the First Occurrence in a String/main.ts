function strStr(haystack: string, needle: string): number {
    const needleLength = needle.length;
    const haystackLength = haystack.length;

    if (needleLength === 0) return 0;

    for (let i = 0; i <= haystackLength - needleLength; i++) { 
        console.log(haystack.substring(i, i+needleLength));
        if(haystack.substring(i, i + needleLength) === needle){
            return i
        }
        
    }

    return -1
};

let haystack = "sadbutsad"

let needle = 'sad'

console.log(strStr(haystack, needle)) //;
