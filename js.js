/* function first (){
    setTimeout( function() {
        console.log(1);
    }, 500 );
}

function second (){
    console.log(2);
}

firast();
second();

function learnJS (lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

learnJS("JavaScript", function() {
    console.log("Я прошел 3й урок");
}) */

/* let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

delete options.height;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " Имеет значение " + options[key]);
} */

/* let arr = ["first", 2, 3, 4, 5]; */

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + " )");
});

console.log(arr);

let mass = [1, 3 ,4 ,6 ,7];

for (let key of mass) {
    console.log(key);
} */

/* let ans = prompt("",""),
    arr = [];
arr = ans.split(',');   
console.log(arr);  */

/* let arr = ["awer", "zzz", "pup", "opa"],
    i = arr.join(", ");
    console.log(i); */
/* let arr = [1, 15 ,4],
    i = arr.sort(compareNum);

    function compareNum(a,b) {
        return a-b;
    }
    console.log(i);
 */

/* function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
       this.value += +prompt("Введите значение",0);     
    };

}

let acum = new Accumulator(1);
acum.read();
acum.read();
alert(acum.value);
 */
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'orange';
circle[2].style.backgroundColor = 'green';

/* for (let i = 0; i <h1 heart.length; i++){
    heart[i].style.backgroundColor = 'blue';
}
 */
/* heart.forEach(function(item , i, hearts) {
    item.style.backgroundColor = 'blue';
}); */

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

/* document.body.appendChild(div); */
/* wrapper.appendChild(div); */

/* div.innerHTML = '<h1>Hello World!</h1>'; */

div.textContent = 'Hello world';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);