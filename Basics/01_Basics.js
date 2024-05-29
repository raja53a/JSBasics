// let message = document.querySelector("h2")

// console.dir(message.innerText);

// message.innerText = message.innerText + " from Apna College"

// let divs = document.querySelectorAll(".box");

// let indx = 0
// for(item of divs){
//     item.innerText = `New Div ${indx}`;
//     indx++
// }


let btn = document.createElement("button");
btn.innerText = "Submit";

let msg = document.querySelector("div")
msg.after(btn)

// let heading = document.querySelector("h2")
// heading.remove();
