var reset = document.getElementById('reset'); // Reset button 
var total_person = document.getElementById('total_person'); // bill for one person
var tip_person = document.getElementById('tip_person'); // Tip for one person
var tip_button = document.querySelectorAll('.tip_btn'); // tip button [5,10,15,25,50]
var bill_amount_input = document.getElementById('amount'); // bill
var people_number_input = document.getElementById('people_number'); // Number of people
var custom_tip_input = document.getElementById('custom_tip'); // custom tip instead of [5,10,15,25,50]
var people_error = document.getElementById("people_error"); // Error message if person <= 0 
var people_number=1, bill=0, tip_amount=0,total=0,totalTip=0;
reset.addEventListener("click",()=>{
    bill_amount_input.value = "";
    people_number_input.value = "";
    custom_tip_input.value = "";
    total_person.innerHTML ="$0.00"
    tip_person.innerHTML = "$0.00";
    people_number_input.classList.remove("people_input_error");
    people_error.style.visibility = "hidden";
    tip_button.forEach(child_button =>{
        child_button.classList.remove("selected");
        child_button.classList.add("unselected");
    })
})
people_number_input.addEventListener("input", ()=>{
    people_number = people_number_input.value;
    if(people_number <= 0 && people_number !=""){
        people_number_input.classList.add("people_input_error");
        people_error.style.visibility = "visible";
        
    }else{
        people_number_input.classList.remove("people_input_error");
        people_error.style.visibility = "hidden";
    }
    calc();
})
tip_button.forEach((button) => {
    button.addEventListener("click", ()=>{
        if(button.classList.contains("selected")){
            tip_amount = 0;
            button.classList.remove("selected");
            button.classList.add("unselected");
        }else{
            tip_button.forEach(child_button =>{
                child_button.classList.remove("selected");
            })
            tip_amount = button.value;
            button.classList.remove("unselected");
            button.classList.add("selected");
        }
        custom_tip_input.value = "";
        calc();
    })
});
custom_tip_input.addEventListener("input", ()=>{
    if(custom_tip_input.value >= 0){ 
        tip_button.forEach(child_button =>{
            child_button.classList.remove("selected");
        })
        tip_amount = custom_tip_input.value;
        calc();
    }
})
bill_amount_input.addEventListener("input", () =>{
    bill = Number(bill_amount_input.value);
    calc();

})
function calc(){
    if(bill>=0 && people_number>=1){
        totalTip = ((tip_amount*bill)/100);
        // total = ( parseInt(bill) + parseInt(totalTip))
        total = bill + totalTip;
        tip_person.innerHTML =`$${(totalTip/people_number).toFixed(2)}`;
        total_person.innerHTML = `$${(total/people_number).toFixed(2)}`; // toFixed(2) fixed The number of digits to appear after the decimal point
    }else{
        tip_person.innerHTML = "$0.00";
        total_person.innerHTML = "$0.00";
    }
}