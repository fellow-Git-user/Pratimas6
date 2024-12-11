// // Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas
//  užduotis. Naudoti metodus: pop, push, shift, unshift, splice.


// 1.1. Pašalinti pirmą masyvo narį.

// let initialArray = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys',
//      789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
// let firstElement = initialArray.shift();
// console.log(initialArray);

// // 1.2. Pašalinti paskutinį masyvo narį.
// let lastElement = initialArray.pop()
// console.log(initialArray);

// // 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// let middleElementNumber = initialArray[Math.round((initialArray.length - 1) / 2)];
// console.log(middleElementNumber);
// let middleElementIndex = (initialArray.length - 1 )/ 2;
// console.log(middleElementIndex);

// initialArray.splice(10, 1);
// console.log(initialArray);

// // 1.4. Pašalinti priešpaskutinį masyvo narį.

//  initialArray.splice(-2, 1);
//  console.log(initialArray);

// // 1.5. Pašalinti antrą masyvo narį.

// initialArray.splice(1, 1);
// console.log(initialArray);

// // 1.6. Pašalinti 7 ir 8 masyvo narius.

// initialArray.splice(6, 2);
// console.log(initialArray);

// // 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.

// initialArray.splice(-6, 3);
// console.log(initialArray);

// // 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.

// initialArray.splice(2, 1, 888);
// console.log(initialArray);

// // 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.

// initialArray.splice(9, 1, 33, 789, 6543);
// console.log(initialArray);

// // 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.

// initialArray.splice(14, 1, 321, 654, 987); //arba (-1, 1, 321, 654, 987)
// console.log(initialArray);

// // 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.

// initialArray.splice(1, 0, 11);
// console.log(initialArray);

// // 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.

// initialArray.splice(13, 0, 1);
// console.log(initialArray);

// // 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.

// initialArray.splice(18, 0, -1);
// console.log(initialArray);

// // 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.

// // initialArray.splice(0, 0, 1, 2, 3); // arba
//  initialArray.unshift(1, 2, 3);
// console.log(initialArray);

// // 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.

// // initialArray.splice(initialArray.length + 1, 0, -333, -321, -312) // nezinau ar gerai nes nariai tai 0-22(length 23) (23, 0, -333, -321, -312)
// initialArray.push(-333, -321, -312)
// console.log(initialArray);

// // 1.16. Į masyvo vidurį pridėti skaičių 0.

// initialArray.splice(13, 0, 0)
// console.log(initialArray);

// // 1.17. Pašalinti pirmą masyvo narį.

// initialArray.shift();
// console.log(initialArray);

// // 1.18. Pašalinti paskutinį masyvo narį.

// initialArray.pop();
// console.log(initialArray);

// // 1.19. Į masyvo pradžią pridėti žodį "start".

// initialArray.unshift(`start`)
// console.log(initialArray);

// // 1.20. Į masyvo pabaigą pridėti žodį "end".

// initialArray.push("end")
// console.log(initialArray);

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
//    ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']











// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą.
//  Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, 
//  kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:

let changedArray = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
// console.log(changedArray)

// 2.1. Gauti pirmą masyvo narį.

let slice1 = changedArray.slice(0,1)
// console.log(slice1)

// 2.2. Gauti paskutinį masyvo narį.

let slice2 = changedArray.slice(26)
// console.log(slice2)

// 2.3. Gauti antrą masyvo narį.

let slice3 = changedArray.slice(1, 2)
// console.log(slice3)

// 2.4. Gauti priešpaskutinį masyvo narį.

let slice4 = changedArray.slice(25, 26)
// console.log(slice4)

// 2.5. Gauti aštuntą masyvo narį.

let slice5 = changedArray.slice(7, 8)
// console.log(slice5)

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.

let slice6 = changedArray.slice(-9, 19)
// console.log(slice6)

// 2.7. Gauti vidurinį masyvo narį.

let slice7 = changedArray.slice(13, 14)
// console.log(slice7)

// 2.8. Gauti pirmus tris masyvo narius.

let slice8 = changedArray.slice(0, 3)
// console.log(slice8)

// 2.9. Gauti paskutinius tris masyvo narius.

let slice9 = changedArray.slice(24)
// console.log(slice9)

// 2.10. Gauti pirmus 10 masyvo narius.

let slice10 = changedArray.slice(0, 10)
// console.log(slice10)

// 2.11. Gauti paskutinius 10 masyvo narius.

let slice11 = changedArray.slice(17)
// console.log(slice11)

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).

let slice12 = changedArray.slice(2, 8)
// console.log(slice12)

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).

let slice13 = changedArray.slice(4, 9)
// console.log(slice13)

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).

let slice14 = changedArray.slice(10, 19)
// console.log(slice14)

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).

let slice15 = changedArray.slice(-19, -10)
// console.log(slice15)

// 2.16. Gauti visus masyvo narius išskyrus pirmą.

let slice16 = changedArray.slice(1)
// console.log(slice16)

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.

let slice17 = changedArray.slice(0, 26)
// console.log(slice17)

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.

let slice18 = changedArray.slice(5)
// console.log(slice18)

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.

let slice19 = changedArray.slice(0, -5)
// console.log(slice19)

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).

let slice20 = changedArray.slice(0, 13)
// console.log(slice20)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).

let slice21 = changedArray.slice(14)
// console.log(slice21)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.

let slice22 = changedArray.slice(1, -1)
// console.log(slice22)

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.

let slice23 = changedArray.slice(5, -3)
// console.log(slice23)

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.

let slice24 = changedArray.slice(1, -8)
// console.log(slice24)

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.

let slice25 = changedArray.slice(8, -1)
// console.log(slice25)

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.

let slice26 = changedArray.slice(9, -12)
// console.log(slice26)

// 2.27. Gauti 9 narius skaičiuojant nuo 11.

let slice27 = changedArray.slice(10, 19)
// console.log(slice27)

// 2.28. Gauti 12 narių skaičiuojant nuo 8.

let slice28 = changedArray.slice(7, 19)
// console.log(slice28)

// // 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. 
// Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei 
// prieš tai uždaviniuose.

let slice29 = changedArray.slice(0, 5)
// console.log(slice29)
let slice30 = changedArray.slice(21)
// console.log(slice30)
let mergedArray = slice29.concat(slice30)
// console.log(mergedArray)

// // 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. 
// Šiuos narius gauti viename masyve. Reikės atlikti daugiau 
// veiksmų nei prieš tai uždaviniuose.

let slice31 = changedArray.slice(2, 5)
// console.log(slice31)

let slice32 = changedArray.slice(14, 17)
// console.log(slice32)
let mergedArray2 = slice31.concat(slice32);
// console.log(mergedArray2)


// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant 
// filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame
//  išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį 
//  išvesti į konsolę:

let alteredArray = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 
    55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(changedArray)

// 3.1. Gauti tik teigiamus skaičius.

let filteredPositive = alteredArray.filter(function(num){
    return num > 0;

})
// console.log(filteredPositive)


// 3.2. Gauti tik neigiamus skaičius.

let filteredNegative = alteredArray.filter(function(num){
    return num < 0;

})
// console.log(filteredNegative)

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.

let dividedByTwo = alteredArray.filter(function(num){
    return num % 2 === 0;
})

// console.log(dividedByTwo);

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.

let dividedByThree = alteredArray.filter(function(num){
    return num % 3 === 0;
})
// console.log(dividedByThree);

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.

let divisableByFive = alteredArray.filter(function(num){
    return num % 5 === 0;

})
// console.log(divisableByFive);

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.

let divisableByEleven = alteredArray.filter(function(num){
    return num % 11 === 0;

})
// console.log(divisableByEleven);

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.

let divisableThirtyOne = alteredArray.filter(function(num){
    return num % 31 === 0;

})
// console.log(divisableThirtyOne);

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.

let divisibleByTwoAndThree = alteredArray.filter(function(num){
    return num % 2 === 0 && num % 3 === 0;
})
// console.log(divisibleByTwoAndThree)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.

let divisibleByThreeAndSeven = alteredArray.filter(function(num){
    return num % 3 === 0 && num % 7 === 0;
})
// console.log(divisibleByThreeAndSeven)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.

let divisibleBy5And9 = alteredArray.filter(function(num){
    return num % 5 === 0 && num % 9 === 0;
})
// console.log(divisibleBy5And9)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.

let divisibleBy5And11 = alteredArray.filter(function(num){
    return num % 5 === 0 && num % 11 === 0;
})
// console.log(divisibleBy5And11)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.

let divisibleBy2And8And12 = alteredArray.filter(function(num){
    return num % 2 === 0 && num % 8 === 0 && num % 12 === 0;
})
// console.log(divisibleBy2And8And12)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.

let divisibleBy2Or3 = alteredArray.filter(function(num){
    return num % 2 === 0 || num % 3 === 0;
})
// console.log(divisibleBy2Or3)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.

let divisibleBy3Or5 = alteredArray.filter(function(num){
    return num % 3 === 0 || num % 5 === 0;
})
// console.log(divisibleBy3Or5)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.

let divisibleBy2Or3Or5 = alteredArray.filter(function(num){
    return num % 2 === 0 || num % 3 === 0 || num % 5 === 0;
})
// console.log(divisibleBy2Or3Or5)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.

let biggerThan100 = alteredArray.filter(function(num){
    return num > 100
})
// console.log(biggerThan100)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let biggerThan555 = alteredArray.filter(function(num){
    return num > 555
})
// console.log(biggerThan555)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.

let biggerThan888= alteredArray.filter(function(num){
    return num >= 888
})
// console.log(biggerThan888)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.

let biggerThan6789= alteredArray.filter(function(num){
    return num >= 6789
})
// console.log(biggerThan6789)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let smallerThan50= alteredArray.filter(function(num){
    return num < 50
})
// console.log(smallerThan50)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let smallerThan1000= alteredArray.filter(function(num){
    return num < 1000
})
// console.log(smallerThan1000)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let smallerThan1= alteredArray.filter(function(num){
    return num <= -1
})
// console.log(smallerThan1)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let smaller1000Bigger500 = alteredArray.filter(function(num){
    return  num > 500 && num < 1000
})
// console.log(smaller1000Bigger500)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let smaller100igger0 = alteredArray.filter(function(num){
    return  num > 0 && num < 100
})
// console.log(smaller100igger0)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let smaller0iggerMinus50 = alteredArray.filter(function(num){
    return   num > - 50 && num < 0 
})
 console.log(smaller0iggerMinus50)


// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let equal0BiggerMinus100 = alteredArray.filter(function(num){
    return   num > -100 && num <= 0 
})
 console.log(equal0BiggerMinus100)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let equal0Bigger55 = alteredArray.filter(function(num){
    return   num >= 0 && num < 55 
})
 console.log(equal0Bigger55)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let positiveDivisibleBy2 = alteredArray.filter(function(num){
    return   num > 0 && num % 2 === 0
})
 console.log(positiveDivisibleBy2)


// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let positiveDivisibleBy3 = alteredArray.filter(function(num){
    return   num > 0 && num % 3 === 0
})
 console.log(positiveDivisibleBy3)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let negativeDivisibleBy4 = alteredArray.filter(function(num){
    return   num % 4 === 0 &&  num < 0 
})
 console.log(negativeDivisibleBy4)


// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let negativeDivisibleBy111 = alteredArray.filter(function(num){
    return   num % 111 === 0 &&  num < 0 
})
 console.log(negativeDivisibleBy111)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let positiveDivisibleBy500 = alteredArray.filter(function(num){
    return   num % 2 === 0 &&  num > 500 
})
 console.log(positiveDivisibleBy500)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let positiveDivisibleBy1000 = alteredArray.filter(function(num){
    return   num % 3 === 0 &&  num > 1000 
})
 console.log(positiveDivisibleBy1000)


// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.

let bigger100Smaller500Divisible5 = alteredArray.filter(function(num){
    return num > 100 && num < 500 && num % 5 === 0
})
 console.log(bigger100Smaller500Divisible5)

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let biggerEq888Smaller1000Divisible2 = alteredArray.filter(function(num){
    return num >= 888 && num <= 1000 && num % 2 === 0
})
 console.log(biggerEq888Smaller1000Divisible2)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333,
//  dalinasi iš 3 ir nėra nulis.

let last = alteredArray.filter(function(num){
    return num >= -333 && num <= 888 && num % 3 === 0 && num !== 0
})
 console.log(last)

