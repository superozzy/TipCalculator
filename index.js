
// 
var billAmount = document.getElementById("bill").value;

var calc = document.getElementById("calculate");

calc.addEventListener("click",function(){
    var billAmount = document.getElementById("bill").value;
    var tipPercentage = document.getElementById("tipPerc").value;

    var tipAmount = document.getElementById("tipAmount").value= Math.round(billAmount/tipPercentage);
   document.getElementById("total").value= parseFloat(billAmount) + parseFloat(tipAmount);
})