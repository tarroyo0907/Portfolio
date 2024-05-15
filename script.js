let button1 = null;
let button2 = null;
let button3 = null;

window.addEventListener('load', 
    function() {
        button1 = document.querySelector("#project1");
        button2 = document.querySelector("#project2");
        button3 = document.querySelector("#project3");

        button1.addEventListener("click", changeBackgroundColor);
        button2.addEventListener("click", changeBackgroundColor);
        button3.addEventListener("click", changeBackgroundColor);
    }
)

function changeBackgroundColor(e) {
    switch(e.target.name) {
        case "Project 1 Button":
            document.body.style.backgroundColor = "black";
            break;
        case "Project 2 Button":
            document.body.style.backgroundColor = "blue";
            break;
        case "Project 3 Button":
            document.body.style.backgroundColor = "white";
            break;
    }
}