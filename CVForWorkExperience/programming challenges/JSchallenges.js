console.log("Hello, World!")
function Addtwo(x, y) {
    z = x + y
    console.log(z);
    if (x + y == 10) {
        a = true
    } else {
        a = false
    }
    console.log(a)
    if (z % 2 == 0) {
        console.log("z is an even number")
    } else if (z % 2 != 0) {
        console.log("z is an odd number")
    }
    console.log(z % 2)
}

function Onetoten() {
    n = 0
    while (n < 11) {
        console.log(n)
        n++
    }
    while (n > 0) {
        n--
        console.log(n)
    }
}
function calcsimple(x, y, operator) {
    try {
        if (operator == 1) {
            console.log(x + y)
        } else if (operator == 2) {
            console.log(x - y)
        } else if (operator == 3) {
            console.log(x * y)
        } else if (operator == 4) {
            console.log(x / y)
        }
    }
    catch {
        window.alert('An invalid sum has occured, handling error')
    }
}
function fibonacci(b) {
    try {
        let a = [0, 1]
        for (let i = 1; i <= b; i++) {
            a.push(a[i] + a[i - 1])
            console.log(a)
        }
    }
    catch {
        console.log("An error has occured, please try entering a different number, if the error persists with a number above 2 then there is an error within the code.")
    }

}
function findmiddleenabler() {
    arraymid[0] = ''
    while (arraymod != false) {
        try {
            newnum = prompt("please enter a whole number, enter anything else if you wish to stop entering integers.")
            if (arraymid[0] == '') {
                arraymid[0] = Number(newnum)
            }
            arraymid.push(Number(newnum))
        }
        catch {
            arraymod == false;
        }

    }
    findMiddle(arraymid)
}
function findMiddle(...arraymid) {
    console.log(Math.floor((arraymid[0] + arraymid.mid[-1]) / 2))
}
// Mean, median and mode
function findMeanAllow() {
    arraymid[0] = ''
    while (arraymod != false) {
        try {
            newnum = prompt("please enter a whole number, enter anything else if you wish to stop entering integers.")
            if (arraymid[0] == '') {
                arraymid[0] = Number(newnum)
            }
            arraymid.push(Number(newnum))
        }
        catch {
            arraymod == false;
        }


    }
    console.log(reduce(arraymid))

    for (let i = 0; i in arraymid; i++) {

    }

}
//Palindrome checker
function palindrome(a) {
    if (a == a.split("").reverse().join("")) {
        console.log("You have entered a palindrome")
    } else {
        console.log('You have not entered a palindrome')
    }
}
//Number of digits
function numlength(a) {
    try {
        a = Number(a)
        a = String(a)
        console.log(a.length)
    }
    catch {
        console.log("Please input an integer")
    }
}
//Power of a number
function power(a, b) {
    console.log(a ^ b)
}
// Rock paper scissors
function RockPaperScissors() {
    botpick = Math.floor(Math.random() * 3 + 1)
    let choice = prompt("Choose from Rock, Paper or Scissors")
    if (choice.toUpperCase == ROCK) {
        choice = 1;
    } else if (choice.toUpperCase == PAPER) {
        choice = 2;
    } else if (choice.toUpperCase == SCISSORS) {
        choice = 3;
    }
    if (botpick == choice) {
        console.log("Draw")
    } else {
        if (choice == 1 && botpick == 2 || choice == 2 && botpick == 3 || choice == 3 && botpick == 1) {
            console.log("AI wins")
        } else {
            console.log("Player wins")
        }

    }

}
//Sum of digits in a number
function digitsum(a) {
    let numStr = a.toString();
    let sum = 0;

    for (let digit of numStr) {
        sum += parseInt(digit)
    }
    return sum;
}
