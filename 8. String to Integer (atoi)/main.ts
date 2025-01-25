function myAtoi(s: string): number {
     // 1. Matn boshidagi bo'sh joylarni olib tashlash
     s = s.trim();

     // 2. Son ishorasini aniqlash
     let sign = 1;
     let index = 0;
     if (s[index] === '+' || s[index] === '-') {
         sign = s[index] === '-' ? -1 : 1;
         index++;
     }
 
     // 3. Raqamlardan iborat bo'lgan qismni olish
     let numStr = "";
     while (index < s.length && s[index] >= '0' && s[index] <= '9') {
         numStr += s[index];
         index++;
     }
 
     // 4. Sonni o'girish va qism yo'q bo'lsa 0 deb hisoblash
     let result = numStr ? parseInt(numStr) * sign : 0;
 
     // 5. Oraliq bilan chegaralash
     const INT_MIN = -(2 ** 31);
     const INT_MAX = 2 ** 31 - 1;
 
     if (result < INT_MIN) result = INT_MIN;
     if (result > INT_MAX) result = INT_MAX;
 
     return result;
};

let s  ="42"

console.log(myAtoi(s));
