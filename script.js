//initializing variables to be needed by calculator
let formula = '';
let output = '';
//initializing Operating buttons
const clearOperation = document.getElementById("op-ce").onclick = () => clear();
const divideOperation = document.getElementById("op-d").onclick = () => operation('-');
const multiplyOperation = document.getElementById("op-m").onclick = () => operation('*');
const subtractOperation = document.getElementById("op-s").onclick = () => operation('-');
const addOperation = document.getElementById("op-a").onclick = () => operation('+');
const total = document.getElementById("total").onclick = () => totalOutput();
//Initializing Number buttons
const n1 = document.getElementById("num1").onclick = () => addOutputNumber(1);
const n2 = document.getElementById("num2").onclick = () => addOutputNumber(2);
const n3 = document.getElementById("num3").onclick = () => addOutputNumber(3);
const n4 = document.getElementById("num4").onclick = () => addOutputNumber(4);
const n5 = document.getElementById("num5").onclick = () => addOutputNumber(5);
const n6 = document.getElementById("num6").onclick = () => addOutputNumber(6);
const n7 = document.getElementById("num7").onclick = () => addOutputNumber(7);
const n8 = document.getElementById("num8").onclick = () => addOutputNumber(8);
const n9 = document.getElementById("num9").onclick = () => addOutputNumber(9);
const n0 = document.getElementById("num0").onclick = () => addOutputNumber(0);
const n00 = document.getElementById("num00").onclick = () => addOutputNumber('00');
const ndot = document.getElementById("numdot").onclick = () => addOutputNumber('.');

//Updating displayed output number
function addOutputNumber(number){
    if(number == '0' && output == '' || number == '00' && output == ''){
        document.getElementById('result').textContent = '0';
    }else if(output == '' && number == '.'){
        output = '0' + number;
        document.getElementById('result').textContent = output;
    }
    else{
        output += number;
        document.getElementById('result').textContent = output;
    }
}
//Triggering operation
function operation(op){
    formula += output + op;
    output = '';
    document.getElementById('result').textContent = 0;
}
//Clearing operations and formula
function clear(){
    document.getElementById('result').textContent = '0';
    formula = '';
    output = '';
}
//Calculating total output
function totalOutput(){
    formula += output;
    evaluateExpression(formula);
}
function evaluateExpression(expression) {
    const regex = /(\d+|\+|-|\*| \/)/g;
    const tokens = expression.match(regex);
    let result = 0;
    for (let i = 0; i < tokens.length; i++) { 
      const token = tokens[i];
      if (token === '+') {
        result += parseFloat(tokens[++i]);
      } else if (token === '-') {
        result -= parseFloat(tokens[++i]);
      } else if (token === '*') {
        result *= parseFloat(tokens[++i]);
      } else if (token === '/') {
        result /= parseFloat(tokens[++i]);
      } else {
        result = parseFloat(token);
      }
    }
    formula = result.toString();
    output='';
    document.getElementById('result').textContent = result.toString();
  }


