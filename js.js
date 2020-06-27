/* function showFirstMessage(text) {
    alert(text);
}

showFirstMessage("TextText"); */

/* let calc = function (a,b) {
    return (a + b);
} */

let calc = (a,b) => a+b;

console.log(calc(4,3));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum); 