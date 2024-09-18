// nums = [2,7,11,15], target = 9 => ixtiyoriy array va biron bir target nomli o'zgaruvchi olinsin. Array ichidagi sonlar yig'indisi target ga teng bulgan sonlarni index si topilsin
// Misol uchun 2 va 7 soni yig'indisi 9 ga teng, masala sharti mana shu 2 va 7 soni indexi console ga chiqarilsin
{
    let arr = [2, 7, 11, 15];
    let target = 9;
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        for(let g = 0; g < i; g++) {
            if(arr[i] + arr[g] === target) {
                result.push(arr[g], arr[i])
            }
        }
    }
    
    console.log(result);
}

// Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring:
// let arr = [1, 3, 2, 2, 3 ] ⇒ 2 va 3 1 martadan ko’p ishtirok etgani uchun ularni o’chirish kerak
// natija ⇒ [1,2,3]

{
    let arr = [1, 3, 2, 2, 3 ]
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
}

// n natural soni berilgan 2 sonining dastlabki n ta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing
{
    // ...
    // qilaolmadim
}

// Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin.
{
    let pr = prompt('sizning soningiz')
    const myFunc = (num) =>{
        let sum = 0
        for(let i = 0; i < num.length; i++){
            sum += Number(num[i])
        }
        return sum
    }
    console.log(myFunc(pr));
}

// Ixtiyoriy arrow function yarating va uning parametriga bir nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:
// masalan: [1, 22, 3] yigindisi: 26
// result=> [2,6]
{
    let arr = [1, 22, 3];
    const sumArr = (num) => {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }
        return sum.toString().split('');
    };
    console.log(sumArr(arr));
}

// Kiritilgan so’z yoki sonni palindrome yoki palindrome emasligini aniqlab beradigan function yarating argument string yoki number ligini tekshiring
{
    function checkIfSame(str){
        if(str == Array.from(str).reverse().join('')){
            return `${str} is palindrome`
        }else{
            return `${str} is not palindrome`
        }
    }
    console.log(checkIfSame('aziza'));
}

// Ixtiyoriy object yarating => {a:1,b:22}
// value larinig yig'indisini toping => 23
// value larining yigindising raqamlar yig'indisini toping => 2 + 3 = 5
{
    function objSum(){
        let sum = 0
        let obj = {
            a: 22,
            b: 20
        }
        sum = obj.a + obj.b
        let sumStr = sum.toString()
        if(sumStr.length >= 2){
            return parseInt(sumStr[0]) + parseInt(sumStr[1])  
        }else{
            return `value larinig yig'indisi kamida 2 ta qator bolishi shart!`
        }
          
    }
    console.log(objSum());
}


// argument sifatida berilgan so’z da nechta unli harf borligini aniqlab beradigan function yarating 
{
    let vowels = 'aeiouAEIUO'
    function countVowels(str){
        let count = 0
        for(let i = 0; i < str.length; i++){
            if(vowels.includes(str[i])){
                count++
            }
        }
        return `${str} so'zida ${count} ta unli harif bor!`
    }
    console.log(countVowels('salom dunyo'));
}


// N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing 
// input: 3
// output: [1,3,5]
{
    function getInitialOdds(n) {
        let odds = [];
        for (let i = 0; i < n; i++) {
            odds.push(2 * i + 1);
        }
        return odds;
    }
    console.log(getInitialOdds(7));
}

// 17. var mergeTwoLists = function(list1, list2) {
// };
//  Input: list1 = [1,2,4], list2 = [1,3,4]
//  Output: [1,1,2,3,4,4]
//  spread opeartori yordami birlashtiring concat ishlatilmasin
{
    var mergeTwoLists = function(list1, list2) {
        let newList = [...list1, ...list2]
        newList.sort((a, b) => (a - b))
        return newList
    };
    console.log(mergeTwoLists([1,2,4], [1,3,4]));
}

// Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok etgan item larni boshqa array ga ko’chiradigan function yaratin
{
    let arr = [1, 1, 1, 2, 3, 4, 4, 5, 5, 6];
    let newArr = [];
    let sortedArr = [];
    
    function sortArr() {
        for (let i = 0; i < arr.length; i++) {
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i]);
            } else if (newArr.includes(arr[i])) {
                sortedArr.push(arr[i]);
            }
        }
    }
    sortArr();
    
    console.log('newArr:', newArr);
    console.log('sortedArr:', sortedArr);
}


// misc
const img = document.getElementById('console')
function showImg(){
    img.style.width = "500px"
}

function closeImg(){
    img.style.width = "0"
}