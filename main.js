//interaction with the DOM
const hand = document.querySelector(".hand");
//create the variable

let clock = 0;
////function to increase the time by 1
function time(){
     hand.style.transform = `rotate(${clock+=6}deg)`;
	 
}

//// set interval to call the function
setInterval(()=>time(),1000);

//let movinghand = hand.style.transform = `rotate(${clock}deg)`; // example of how to rotate the hand


