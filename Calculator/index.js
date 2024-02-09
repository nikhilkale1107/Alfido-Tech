
let num1 = 0;
let num2 = 0;

function save(){
  num1 = Number(document.getElementById("num1").value)
  num2 = Number(document.getElementById("num2").value)

}

function add(){
    let result = (num1 + num2)
    document.getElementById("result").textContent = ("The Addition of Two Number is : " + result)
    document.getElementById("message").textContent = ("Want to Add The Numbers again ?") ;
}

function substract(){
    let result = num1 - num2
    document.getElementById("result").textContent = ("The Substraction of Two Number is : " + result);
    document.getElementById("message").textContent = ("Want to Substract The Numbers again ?") ;
}

function multiply(){
    let result = num1 * num2
    document.getElementById("result").textContent = ("The Multiplication of Two Number is : " + result);
    document.getElementById("message").textContent = ("Want to Multiply The Numbers again ?") ;
}

function divide(){
    let result = num1 / num2
    document.getElementById("result").textContent = ("The Division of Two Number is : " + result);
    document.getElementById("message").textContent = ("Want to Divide The Numbers again ?") ;
}


