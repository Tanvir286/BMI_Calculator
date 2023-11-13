
let age =document.querySelector('.age');
let male =document.querySelector('.male');
let female =document.querySelector('.female');
let height =document.querySelector('#height');
let weight =document.querySelector('#weight');


let result = document.querySelector('#result');
let comment = document.querySelector('.comment');
let close = document.querySelector('.close');

let calculate =document.querySelector('.calculate');

let modal =document.querySelector('.modal');

let bmi;

calculate.addEventListener('click',function() {

  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
  //If at least one of them is true, the code inside the if statement will run.
    showError();}
  else{
    countBmi(); }
  
});
 
 


function countBmi(){
  
   
  bmi = weight.value/((height.value/100)*(height.value/100));

  let store;
  console.log(bmi);

  if(bmi<18.5){
    store = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
      store = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
      store = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
      store = 'Obese';
     }else if(35<=bmi){
      store = 'Extremely obese';
     }


  result.innerHTML = bmi.toFixed(2);
  comment.style.display = "block";
  comment.innerHTML = store;  

}



/* ===================================
            PopUP Area Start
======================================*/

function showError() {
  modal.style.display = 'block';
}


close.addEventListener('click',function() {
  modal.style.display = 'none';
});


window.addEventListener('click',function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

/* ===================================
           PopUP Area End
======================================*/

