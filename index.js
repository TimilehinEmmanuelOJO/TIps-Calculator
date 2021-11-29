const bill = document.getElementById('input-bill');
const tipBtn = document.querySelectorAll('#but');
const tipCustom = document.getElementById('input-tip');
const people =document.getElementById('num');
const results = document.querySelectorAll('.amt')


bill.addEventListener('input', setBillValue)
tipBtn.forEach(but => {
    but.addEventListener('click', handleClick)
})

tipCustom.addEventListener('input', setTipCustomValue);

people.addEventListener('input', setPeopleValue);

let billValue = 0.0;
let tipValue = 0.15; //default value>>> 15% active
let peopleValue = 1;

function validateInt(s){
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}

function setBillValue(){
    if (bill.value.includes(',')){
        bill.value = bill.value.replace(',','.')
    }
    billValue = parseFloat(bill.value);
    console.log(billValue);

    calculateTip();
}


function handleClick(event){
    tipBtn.forEach(but => {
        //clear active state
        but.classList.remove('but-active')

        //set active state
        if(event.target.innerHTML == but.innerHTML){
            but.classList.add('but-active');
            tipValue = parseFloat(but.innerHTML)/100;
        }
    });
    //clear custom tip
    tipCustom.value = '';

    calculateTip();

    //console.log(tipValue);
}

function setTipCustomValue(){
    if(!validateInt(tipCustom.value)){
        tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length-1);
    }
    tipValue = parseFloat(tipCustom.value/100);

    //remove active state
    tipBtn.forEach(btn => {
        btn.classList.remove('btn-active')
    });

    calculateTip();

    //console.log(tipValue)
}

function setPeopleValue(){
    if(!validateInt(people.value)){
        people.value = people.value.substring(0, people.value.length-1);
    }

    peopleValue = parseFloat(people.value);


    console.log(peopleValue);

}
function calculateTip(){
    if(peopleValue>=1){
        let tipAmount = billValue * tipValue/peopleValue;
        let total = billValue * (tipValue+1)/ peopleValue;
        results[0].innerHTML = '$' + tipAmount.toFixed(2);
        results[1].innerHTML = '$' + total.toFixed(2);
    }
}


//console.log(tipBtn[0].innerHTML);


















