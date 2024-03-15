"use strict"
                                                    // СТИЛИЗАЦИЯ 

// 1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     elem.style.width = '400px';
//     elem.style.height = '300px';
//   });

// 2
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {

//     let elem = document.querySelector('#elem');
//     let width = parseInt(getComputedStyle(elem).width);
//     let height = parseInt(getComputedStyle(elem).height);

//     alert('Ширина: ' + width + '\nВысота: ' + height);
// });

// 3
// function showFontSize() {
//     let  elem = document.getElementById("elem");
//     let computedStyle = window.getComputedStyle(elem);  
//     let fontSize = computedStyle.fontSize; 

//     alert("Размер шрифта: " + fontSize);
// }

// 4
// function increaseSize() {
//     let elem = document.getElementById("elem");
//     let currentWidth = elem.offsetWidth;
//     let currentHeight = elem.offsetHeight;

//     elem.style.width = (currentWidth + 50) + "px";
//     elem.style.height = (currentHeight + 50) + "px";
// }

// 5
// function increaseSize() {
//     let elem = document.getElementById("elem");
//     let currentWidth = elem.offsetWidth;
//     let currentHeight = elem.offsetHeight;

//     // Увеличиваем ширину и высоту на 10%
//     let newWidth = currentWidth * 1.1;
//     let newHeight = currentHeight * 1.1;

//     elem.style.width = newWidth + "px";
//     elem.style.height = newHeight + "px";
// }

// 6
// function showBorderStyle() {
//     let elem = document.getElementById("elem");
    
//     // Получаем стиль границы
//     let borderStyle = window.getComputedStyle(elem).border;
    
//     alert("Толщина, тип и цвет границы: " + borderStyle);
// }

// 7
// function hideDiv() {
//     let myDiv = document.getElementById("myDiv");
//     myDiv.style.display = "none";
// }

// function showDiv() {
//     let myDiv = document.getElementById("myDiv");
//     myDiv.style.display = "block"; // или "inline", "inline-block", в зависимости от вашей необходимости
// }

// 8!!
// document.addEventListener('DOMContentLoaded', function() {
//     let myDiv = document.getElementById('myDiv');
//     let redButton = document.getElementById('redButton');
//     let originalColorButton = document.getElementById('originalColorButton');

//     redButton.addEventListener('click', function() {
//         myDiv.style.backgroundColor = 'red';
//     });

//     originalColorButton.addEventListener('click', function() {
//         myDiv.style.backgroundColor = 'lightblue';
//     });
// });

// 9
// let elem = document.getElementById('yourElementId'); 
// elem.style.cssText = 'width: 100px; height: 100px; margin: 10px auto; color: red;';

// 10
// document.addEventListener('DOMContentLoaded', function() {
//     let elem = document.getElementById('elem');
//     let sizeButton = document.getElementById('sizeButton');

//     sizeButton.addEventListener('click', function() {
//         // Выводим ширину и высоту элемента в консоль
//         console.log("Ширина элемента: " + elem.offsetWidth + "px");
//         console.log("Высота элемента: " + elem.offsetHeight + "px");
//     });
// });

// 11
// document.addEventListener('DOMContentLoaded', function() {
//     let elem = document.getElementById('elem');
//     let increaseSizeButton = document.getElementById('increaseSizeButton');

//     increaseSizeButton.addEventListener('click', function() {
  
//         elem.style.width = (elem.offsetWidth * 2) + 'px';
//         elem.style.height = (elem.offsetHeight * 2) + 'px';
//     });
// });

// 12
// document.addEventListener('DOMContentLoaded', function() {
//     let elem = document.getElementById('elem');
//     let fontSizeButton = document.getElementById('fontSizeButton');

//     fontSizeButton.addEventListener('click', function() {

//         let computedStyle = window.getComputedStyle(elem);
//         let fontSize = computedStyle.getPropertyValue('font-size');

//         console.log("Размер шрифта элемента: " + fontSize);
//     });
// });

// 13
// document.addEventListener('DOMContentLoaded', function() {
//     let paragraphs = document.querySelectorAll('p');

//     paragraphs.forEach(function(paragraph) {
//         let number = parseInt(paragraph.textContent);

//         if (number % 2 === 0) {
//             paragraph.classList.add('even');
//         } else {
//             paragraph.classList.add('odd');
//         }
//     });
// });

// 14
// document.addEventListener('DOMContentLoaded', function() {
//     let paragraphs = document.querySelectorAll('.paragraph');

//     paragraphs.forEach(function(paragraph) {
//         paragraph.addEventListener('click', function() {
//             if (paragraph.classList.contains('red')) {
//                 paragraph.classList.remove('red');
//             } else {
//                 paragraph.classList.add('red');
//             }
//         });
//     });
// });

// 15
// document.addEventListener('DOMContentLoaded', function() {
//     let input = document.getElementById('textInput');

//     input.addEventListener('blur', function() {
//         let inputValue = input.value;

//         if (inputValue.length <= 9) {
//             input.classList.remove('invalid');
//             input.classList.add('valid');
//         } else {
//             input.classList.remove('valid');
//             input.classList.add('invalid');
//         }
//     });
// });

// 16
// document.addEventListener('DOMContentLoaded', function() {
//     let numberInput = document.getElementById('numberInput');

//     numberInput.addEventListener('blur', function() {
//         let inputValue = parseFloat(numberInput.value);

//         if (!isNaN(inputValue)) {
//             if (inputValue < 10) {
//                 numberInput.classList.add('green');
//                 numberInput.classList.remove('yellow', 'red');
//             } else if (inputValue >= 10 && inputValue <= 20) {
//                 numberInput.classList.add('yellow');
//                 numberInput.classList.remove('green', 'red');
//             } else {
//                 numberInput.classList.add('red');
//                 numberInput.classList.remove('green', 'yellow');
//             }
//         }
//     });
// });







                                                        // МЕТРИКИ ЭЛЕМЕНТОВ

// 1

// document.addEventListener('DOMContentLoaded', function() {
//     let testElement = document.getElementById('testElement');
//     let measureButton = document.getElementById('measureButton');
//     let measureScrollButton = document.getElementById('measureScrollButton');
//     let checkScrollButton = document.getElementById('checkScrollButton');

//     testElement.classList.add('greenBorder');
//     testElement.classList.remove('yellowBackground');

//     testElement.setAttribute('data-info', 'Дополнительная информация');

//     let dataInfoAttribute = testElement.getAttribute('data-info');
//     console.log('Значение атрибута data-info:', dataInfoAttribute);

//     testElement.style.color = 'blue';

//     measureButton.addEventListener('click', function() {
//         let clientWidth = testElement.clientWidth;
//         let clientHeight = testElement.clientHeight;

//         console.log("Ширина элемента: " + clientWidth + "px");
//         console.log("Высота элемента: " + clientHeight + "px");
//     });

//     measureScrollButton.addEventListener('click', function() {
//         let scrollTopValue = testElement.scrollTop;

//         console.log("Прокрутка по вертикали: " + scrollTopValue + "px");
//     });

//     checkScrollButton.addEventListener('click', function() {
//         let isScrolled = testElement.scrollTop > 0;

//         console.log("Элемент прокручен по вертикали: " + isScrolled);
//     });
//     measureFullScrollButton.addEventListener('click', function() {
//         let fullScrollHeight = testElement.scrollHeight;

//         console.log("Полная прокрутка по вертикали: " + fullScrollHeight + "px");
//     });
//     
// });

// Изменение прокрутки элемента в JavaScript 20
// надо сделать 


//20.1
//20.2
//20.3
//20.4





// 21.1
// let scrollable = document.getElementById('scrollable');
// let scrollButton = document.getElementById('scrollButton');

// scrollButton.addEventListener('click', () => {
//   scrollable.scrollTop = scrollable.scrollHeight - scrollable.clientHeight;
// });
// 21.2
// let scrollable = document.getElementById('scrollable');
// let checkButton = document.getElementById('checkButton');

// checkButton.addEventListener('click', () => {
//   let isScrolledToBottom = scrollable.scrollHeight - scrollable.clientHeight <= scrollable.scrollTop;
//   if (isScrolledToBottom) {
//     alert('Element is scrolled to the bottom.');
//   } else {
//     alert('Element is not scrolled to the bottom.');
//   }
// });
// 22
// let expandable = document.getElementById('expandable');
// let expandButton = document.getElementById('expandButton');

// expandButton.addEventListener('click', () => {
//   expandable.style.height = '100%'; // Устанавливаем высоту элемента на 100% высоты родительского контейнера
// });
// </script>


// 23
// document.getElementById('getScrollbarWidthButton').addEventListener('click', () => {
//     let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
//     alert('Scrollbar Width: ' + scrollbarWidth + 'px');

//metricka
//24/1

// document.getElementById('getWindowSizeButton').addEventListener('click', () => {
//     let windowWidth = window.innerWidth;
//     let windowHeight = window.innerHeight;
//     alert('Window Width: ' + windowWidth + 'px\nWindow Height: ' + windowHeight + 'px');
//   });
// 24/2
// document.getElementById('checkVerticalScrollButton').addEventListener('click', () => {
//     let hasVerticalScroll = document.documentElement.scrollHeight > window.innerHeight;
//     if (hasVerticalScroll) {
//       alert('Vertical scrollbar is present.');
//     } else {
//       alert('Vertical scrollbar is not present.');
//     }
//   });



//24.3
// document.getElementById('checkHorizontalScrollButton').addEventListener('click', () => {
//     let hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
//     if (hasHorizontalScroll) {
//       alert('Horizontal scrollbar is present.');
//     } else {
//       alert('Horizontal scrollbar is not present.');
//     }
//   });


// МАР 
// 1
// let map = new Map();

// let array1 = [1, 2, 3];
// let array2 = [4.5, 6.7, 8.9];
// let array3 = ['a', 'b', 'c'];

// map.set(array1, 'Строка для массива 1');
// map.set(array2, 'Строка для массива 2');
// map.set(array3, 'Строка для массива 3');

// map.forEach((value, key) => {
//     console.log(`Ключ: [${key}], Значение: ${value}`);
// });

// 2
// let obj1 = { key: 'value1' };
// let obj2 = { key: 'value2' };
// let obj3 = { key: 'value3' };

// let array1 = [1, 2, 3];
// let array2 = ['a', 'b', 'c'];
// let array3 = [true, false, true];

// let map = new Map();

// map.set(obj1, array1);
// map.set(obj2, array2);
// map.set(obj3, array3);

// map.forEach((value, key) => {
//     console.log(key, value);
// });

// 3
// let myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.set('key3', 'value3');

// let keysArray = Array.from(myMap.keys());

// for (let key of keysArray) {
//     console.log(key);
// }

// 4
// let myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.set('key3', 'value3');

// let entriesArray = Array.from(myMap.entries());

// for (let [key, value] of entriesArray) {
//     console.log(key + ' -> ' + value);
// }

// 5
// let inputsMap = new Map();

// let inputs = document.querySelectorAll('input[type="text"]');

// inputs.forEach((input, index) => {
//     inputsMap.set(input, index + 1); 
// });

// inputs.forEach(input => {
//     input.addEventListener('click', function() {

//         let inputValue = inputsMap.get(input);
//         input.value = inputValue;
//     });
// });

// 6
// let numbersArray = [];

// let numberInputs = document.querySelectorAll('.number-input');

// numberInputs.forEach(input => {
//     input.addEventListener('keydown', function(event) {

//         if (event.keyCode === 13) {
//             let number = parseFloat(input.value); 
//             if (!isNaN(number)) {
//                 numbersArray.push(number); 
//                 input.value = ''; 
//             }
//         }
//     });
//     input.addEventListener('blur', function() {
//         console.log(numbersArray);
//     });
// });

// SET
// 1
// let mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(1); 

// console.log(mySet); 

// 2
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr);

// console.log(set); 

// 3
// let set = new Set([1, 2, 3]);

// console.log("Количество элементов в коллекции Set:", set.size);

// 4
// let set = new Set([1, 2, 3]);

// console.log("Наличие элемента со значением 3:", set.has(3));
// console.log("Наличие элемента со значением 4:", set.has(4));

// 5
// let set = new Set([1, 2, 3, 4, 5]);

// let sum = 0;

// for (let num of set) {
//     sum += num;
// }

// console.log("Сумма элементов коллекции Set:", sum);

// 6
// let set = new Set([1, 2, 3]);
// let arrayFromSet = Array.from(set);

// console.log(arrayFromSet); 

// 7
// let arr = [1, 2, 3];
// let set = new Set(arr);

// 8
// function removeDuplicates(arr) {
//     let set = new Set(arr);

//     return [...set];
// }

// let arr = [1, 2, 3, 1, 2, 4];
// let uniqueArr = removeDuplicates(arr);
// console.log(uniqueArr);

// 9
// let paragraphs = document.querySelectorAll('p');
// let addButton = document.getElementById('addExclamationBtn');

// addButton.addEventListener('click', function() {
//     paragraphs.forEach(paragraph => {
//         if (paragraph.classList.contains('clicked')) {
//             paragraph.textContent += '!';
//         }
//     });
// });

// paragraphs.forEach(paragraph => {
//     paragraph.addEventListener('click', function() {
//         paragraph.classList.add('clicked');
//     });
// });

// Псевдомассивы
// 1
// let elems = document.querySelectorAll('p');

// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);

// console.log(elems.length);

// for (let elem of elems) {
// 	console.log(elem);
// }

// 2

// Методы массивов, такие как forEach, map, filter, reduce и другие, не будут работать напрямую для переменной elems, так как document.querySelectorAll возвращает объект NodeList, который по сути является псевдомассивом, а не настоящим массивом.

// 3
// let test = [
//     [1, 2, 3],
//     {a: 1, b: 2, c: 3},
//     [3, 4, 5],
//     {x: 1, y: 2, z: 3},
// ];

// test.forEach(function(item) {
//     if (Array.isArray(item)) {
//         console.log("Элемент", item, "является массивом.");
//     } else {
//         console.log("Элемент", item, "не является массивом.");
//     }
// });

// 4
// let elems = document.querySelectorAll('p');

// // Способ первый: использование цикла
// let arr1 = [];
// for (let elem of elems) {
//     arr1.push(elem);
// }
// console.log("Способ первый:", arr1);

// // Способ второй: деструктуризация
// let arr2 = [...elems];
// console.log("Способ второй:", arr2);

// // Способ третий: метод Array.from
// let arr3 = Array.from(elems);
// console.log("Способ третий:", arr3);

// 5
// let elems = document.querySelectorAll('p');
// let elemsArray = Array.from(elems);
// let slicedElems = elemsArray.slice(1, -1);

// console.log(slicedElems);

// 6.1
// let parent = document.getElementById('parentElement'); // Предположим, что у нас есть элемент с id="parentElement"
// console.log(parent.childNodes); // NodeList

// // 6.2
// let parent = document.getElementById('parentElement'); // Предположим, что у нас есть элемент с id="parentElement"
// console.log(parent.children); // HTMLCollection

// 6.3
// let elements = document.getElementsByClassName('exampleClass'); // Предположим, что у нас есть элементы с классом "exampleClass"
// console.log(elements); // HTMLCollection

// 7.1
// let parent = document.getElementById('parent');
//         let elems1 = parent.children; // HTMLCollection
//         let elems2 = parent.childNodes; // NodeList

//         console.log("Before adding new paragraph:");
//         console.log("elems1:", elems1.length, "children");
//         console.log("elems2:", elems2.length, "children");

//         let p = document.createElement('p');
//         p.textContent = "New Paragraph";

//         parent.appendChild(p);

//         console.log("After adding new paragraph:");
//         console.log("elems1:", elems1.length, "children");
//         console.log("elems2:", elems2.length, "children");

// 7.2
// let parent = document.getElementById('parent');
// let childNodesBefore = parent.childNodes.length;

// console.log("Before adding new paragraph:");
// console.log("childNodes:", childNodesBefore, "nodes");

// let p = document.createElement('p');
// p.textContent = "New Paragraph";

// parent.appendChild(p);

// let childNodesAfter = parent.childNodes.length;

// console.log("After adding new paragraph:");
// console.log("childNodes:", childNodesAfter, "nodes");


// символы 
//51
// let sym = Symbol();
// console.log(sym);
//52
// let sym1 = Symbol('текстовое описание');
// let sym2 = Symbol('текстовое описание2');

// console.log(sym1, sym2);

//53
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// console.log(obj);


//54
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';

// for (let key in obj) {
//     if (typeof key !== 'symbol') {
//         console.log(obj[key]); // 1, 2, 3
//     }
// }

//55
// let obj = { a: 1, b: 2, c: 3,
//     sym: Symbol(),
//     currentTime: function() {
//         let currentDate = new Date();
//         console.log('Current time is:', currentDate.toLocaleTimeString());
//     }
// };


// obj.currentTime();

// 56.1

// let arr = [1, 2, 3];

// arr.sum = function() {
//     let sum = 0;
//     for (let key in this) {
//         if (!isNaN(key) && Number.isInteger(parseFloat(key))) {
//             sum += this[key];
//         }
//     }
//     return sum;
// };


// console.log(arr.sum()); 
// 56.3
// let arr = [1, 2, 3];

// Array.prototype.sum = function() {
//     let sum = 0;
//     for (let key in this) {
//         if (!isNaN(key) && Number.isInteger(parseFloat(key))) {
//             sum += this[key];
//         }
//     }
//     return sum;
// };


// console.log(arr.sum()); 


// arr.push(4, 5);


// console.log(arr.sum()); 

// 57

// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = {x: 10, y: 20, z: 30};

// let sumKey = Symbol('sum');

// obj1[sumKey] = function() {
//     let sum = 0;
//     for (let key in this) {
//         if (typeof this[key] === 'number') {
//             sum += this[key];
//         }
//     }
//     return sum;
// };

// obj2[sumKey] = function() {
//     let sum = 0;
//     for (let key in this) {
//         if (typeof this[key] === 'number') {
//             sum += this[key];
//         }
//     }
//     return sum;
// };

// console.log(obj1[sumKey]()); // Выведет: 6
// console.log(obj2[sumKey]()); // Выведет: 60


//58
//  let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// let name1 = Symbol.keyFor(sym1);
// let name2 = Symbol.keyFor(sym2);

// console.log(name1); 
// console.log(name2);
