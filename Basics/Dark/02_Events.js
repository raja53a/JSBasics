let btn = document.querySelector("#btn");
let body = document.querySelector("body");

let curr = "light";

btn.addEventListener("click", () => {
    if (curr === "light") {
        curr = "dark";
        body.classList.add("dark");
        body.classList.remove("white");
    } else {
        curr = "light";
        body.classList.add("white");
        body.classList.remove("dark");
    }

    console.log(curr);
});