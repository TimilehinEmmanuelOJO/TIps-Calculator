


var reset = document.getElementById('reset');
var bill_paid = document.getElementById('inp');
var tip_button = document.getElementById('but');
var people_number = document.getElementById('num');
var amount_payable = document.getElementById('amt');
var total_bill = document.getElementById('tot');

reset.addEventListener('click', function(){
bill_paid = "";
tip_button = "";
people_number = '';
amount_payable = '$0.00';
total_bill = '$0.00';
})

if (bill_paid === "" || people_number === ""){
    alert("please enter a value");
}