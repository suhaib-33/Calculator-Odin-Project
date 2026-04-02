const displays = document.getElementById("display")
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(button => (
    button.addEventListener("click", (e) =>{

        if(e.target.innerText === "C") {
            displays.value = "";
        } else if (e.target.innerText === "=") {
            try {
            displays.value = eval(displays.value)
            } catch {
                displays.value ="Error";
            }
        } else if (e.target.innerText) {
            displays.value += e.target.innerText;
        }
    })
))