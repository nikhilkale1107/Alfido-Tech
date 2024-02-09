let p = 0;
let n = 0;
let r = 0;

function save(){
    p = Number(document.getElementById("term1").value)
    n = Number(document.getElementById("term2").value)
    r = Number(document.getElementById("term3").value)
}

function invested_amount(){
    let result = p;
    document.getElementById("result").textContent = "The Total Invested Amount is : " + result + " Rs";
    document.getElementById("message").textContent = "Want to Calculate The Invested Amount Again ?";
}
function estimated_return(){
    let result = Math.round((p*[(1+(r/100))**n]) - p);
    document.getElementById("result").textContent = "The Total Estimated Return is : " + result + " Rs";
    document.getElementById("message").textContent = "Want to Calculate The Estimated Return Again ?";
}
function total_value(){
    let result = Math.round(p*[(1+(r/100))**n]) ;
    document.getElementById("result").textContent = "The Total Value Emi is : " + result + " Rs";
    document.getElementById("message").textContent = "Want to Calculate The Total Value Again ?";
}
