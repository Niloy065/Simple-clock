let time = document.querySelector(".time");
let button = time.children[0];
let message = time.children[1];

button.addEventListener("click", clock);
function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;

    message.textContent = time;

    setInterval(clock,1000);
}
