//interaction with the DOM
const hand = document.querySelector(".hand");
const hand1 = document.querySelector(".hand1");
const hand2 = document.querySelector(".hand2");
//create the variable

let clock = 0;
////function to increase the time by 1
let time=()=>{
     hand.style.transform = `rotate(${clock+=6}deg)`;	 
}
let time1=()=>{
     hand1.style.transform = `rotate(${clock+=6}deg)`;	 
}
let time3=()=>{
     hand2.style.transform = `rotate(${clock+=6}deg)`;	 
}


//// set interval to call the function
setInterval(()=>time(),1000);
setInterval(()=>time1(),60000);
setInterval(()=>time2(),3600000);



