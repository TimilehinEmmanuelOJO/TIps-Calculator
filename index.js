const bill = document.getElementById('input-bill');
const tipBtn = document.querySelectorAll('#but');
const tipCustom = document.getElementById('input-tip');


bill.addEventListener('input', setBillValue)
tipBtn.forEach(but => {
    but.addEventListener('click', handleClick)
})

tipCustom.addEventListener('input', setTipCustomValue);

let billValue = 0.0;
let tipValue = 0.15; //default value>>> 15% active

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

    console.log(tipValue);
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

    console.log(tipValue)
}


//console.log(tipBtn[0].innerHTML);


















