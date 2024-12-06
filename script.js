let string = "";
let buttons = document.querySelectorAll('.button');

function back(str) {
    return str.substring(0, str.length - 1);
}

// Add event listeners to all buttons and perform calculations when "=" is clicked or "C" is pressed.
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML === "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === "C"){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', (e) => {
    string = "";
    document.querySelector('input').value = string;
})

let backButton = document.querySelector('.back');

backButton.addEventListener('click', (e) => {
    string = back(string);
    document.querySelector('input').value = string;
})

document.addEventListener('keydown', (e) => {
    const validKeys = "0123456789+-*/.()";
    if (validKeys.includes(e.key)) {
        string += e.key;
        document.querySelector('input').value = string;
    } else if (e.key === "Enter") {
        try {
            string = eval(string);
            document.querySelector('input').value = string;
        } catch {
            document.querySelector('input').value = "Error";
            string = "";
        }
    } else if (e.key === "Backspace") {
        string = back(string);
        document.querySelector('input').value = string;
    } else if (e.key === "Escape") {
        string = "";
        document.querySelector('input').value = string;
    }
});

