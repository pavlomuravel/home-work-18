console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */
// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

const myNum = 10;
const mySte = 'some strig';
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {first: 'First Name', last: 'Last Name'}

console.log(myNum);
console.log(mySte);
console.log(myBool);
console.log(myArr);
console.log(myObj);


/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2

const decimal2 = 60;
console.log(decimal2.toFixed(2));

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 * 
 * фу фу фу того нетреба))
 */

// i

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

let myTest = 20;
console.log(myTest)

myTest += 20;
console.log(myTest)

myTest -= 20;
console.log(myTest)

myTest *= 20;
console.log(myTest)

myTest /= myNum;
console.log(myTest)








const myNumberBig = 487;
const myNumberSmol = 7;

if (myNumberBig % myNumberSmol === 0) {
    console.log('Ділиця');
} else {
    console.log('Не ділиця');
}
   

myTest %= myNum + 0.413;
console.log(myTest)

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

const myPi = Math.PI;
console.log(myPi);

const myRound = Math.round(89.279);
console.log(myRound);

const myRandom = Math.random() * 10;
console.log(myRandom);

const myPow = Math.pow(3,5);
console.log(myPow);




console.log(Math.random() );
console.log(Math.floor(Math.random() * 101) );

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

const strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length:'Мама мыла раму, рама мыла маму'.length
};
console.log(strObj);


/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

const isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

const isRama = isRamaPos !== -1;
console.log(isRama);



const isRamaTest = strObj.str.includes('рама');
console.log(isRamaTest);


/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

const strReplace = strObj.str
.replace ('Мама мыла раму', 'Мама моет раму')
.replace ('рама мыла маму', 'Рама держит маму');
console.log(strReplace);

// strReplace

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

const someStr = 'some STRING';
console.log(someStr);
console.log(someStr.toUpperCase());
console.log(someStr.toLowerCase());

