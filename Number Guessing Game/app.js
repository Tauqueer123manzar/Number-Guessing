
let btn=document.getElementById("btn");
let output=document.getElementById("outputtext");
var inputFeild=document.querySelector('input');
var count=1;
var countDisplay=document.querySelector('.countDisplay');
// console.log(countDisplay);
let number=Math.floor(Math.random()*100)+1;
// console.log(number);
btn.addEventListener("click",function(){
    let input=document.getElementById("userinput").value ;
    if(input==number){
        output.innerHTML=`You guessed right,Your number was ${number}`;
        inputFeild.value='';
        countDisplay.innerHTML=`Your chances is ${count}`;
      }else if(input<number){
        output.innerHTML=`Your number is low ,Try again!....`;
        inputFeild.value='';
        count++;
    }
    if(input>number){
        output.innerHTML=`Your number is high ,Try again!.....`;
        inputFeild.value='';
        count++;
    }

});
