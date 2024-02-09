let term1 = 0;
let term2 = 0;
let term3 = 0;

function save(){
    term1 = Number(document.getElementById("term1").value)
    term2 = Number(document.getElementById("term2").value)
    term3 = Number(document.getElementById("term3").value)

    p = term1;
    n = (term2 * 12);
    r = (term3/(12*100));
    emi = [p*r*((1+r)**n)]/[((1+r)**n)-1];
    
}    

function monthly_emi(){
    let result = Math.round(emi);
    document.getElementById("result").textContent = "The Total Monthly Emi is : " + result + " Rs";
    document.getElementById("message").textContent = "Want to Calculate The Monthly Amount Again ?";
}

function loan_amount(){
    let result = p ;
    document.getElementById("result").textContent = "The Total Loan Amount is : " + result + " Rs" ;
    document.getElementById("message").textContent = "Want to Calculate The Loan Amount Again?";
}

function interest_payable(){
    let result = (Math.round(n * (emi)) - p) ; 
    document.getElementById("result").textContent = "The Total Interest Payable is : " + result ;
    document.getElementById("message").textContent = "Want to Calculate The Interest Payable Again ?";
}

function total_payable(){
    let result = Math.round(n * (emi));
    document.getElementById("result").textContent = "The Total Loan Amount is : " + result ;
    document.getElementById("message").textContent = "Want to Calculate The Total Payable Again ?";
}
