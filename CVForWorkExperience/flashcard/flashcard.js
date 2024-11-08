
ques = ['test'];
ans = ['test'];
question = document.getElementById("question");
answer = document.getElementById("answer");
console.log(question)
console.log(answer)
const flashcards = document.getElementsByClassName("flashcards")[0];
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


function SubmitFlashcard() {
    console.log("test")
    question = document.getElementById("question");
    answer = document.getElementById("answer");

    var flashcard_info = {
        'my_question': question.value,
        'my_answer': answer.value,
    }
    allow = true

    console.log(question.value, "Question:")
    console.log(answer.value, "Answer:")
    console.log(question)
    console.log(answer)

    for (let i = 0; i < contentArray.length; i++) {
        compar = contentArray[i].my_question;
        console.log(compar)
        if (compar.toUpperCase() == question.value.toUpperCase()) {
            console.log("duplicate detected")
            if (confirm("This action will replace one of your flashcards, is this acceptable?")) {
                console.log(":3")
                /*Put the code for editing existing flashcards here! */
                contentArray[i].my_answer = answer.value
                allow = false
                document.getElementById("flashquestion").innerHTML = contentArray[i].my_question
                document.getElementById("flashanswer").innerHTML = contentArray[i].my_answer

            } else {
                allow = false


            }
        } else {
            console.log("duplicate not detected")
        }

    }


    if (allow == false) { stop } else {
        contentArray.push(flashcard_info);
        localStorage.setItem('items', JSON.stringify(contentArray));
        divMaker(contentArray[contentArray.length - 1]);
        question.value = '';
        answer.value = '';
        console.log("Flashcard:", contentArray)
    }


}

function divMaker(text) {
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className = 'flashcard';
    h2_question.setAttribute('style', "border-top:1px solid red; padding:15px; margin-top:30px");

    h2_question.innerHTML = document.getElementById("question");

    h2_answer.setAttribute("style", "text-align:center; display:none; color:red")
    h2_answer.innerhtml = document.getElementById("answer");

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function () {
        if (h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
            h2_answer.style.display = "none";
    })
}

function removecard() {
    localStorage.clear();
    contentArray = [];

    document.getElementById("flashquestion").innerHTML = ''

    document.getElementById("flashanswer").innerHTML = ''
    hideanswer()

}

function answertoggle() {
    let vis = document.getElementById("flashanswer")
    let vis2 = document.getElementById("flashquestion")
    console.log(vis.textContent)
    console.log(vis2.textContent)
    if (vis.style.display == "none") {
        console.log("Detected")
        vis.style.display = "block";
    } else {
        console.log("Detected")
        vis.style.display = "none";
    }
}

function hideanswer() {
    let vis = document.getElementById("flashanswer")
    let vis2 = document.getElementById("flashquestion")
    console.log(vis.textContent)
    console.log(vis2.textContent)
    vis.style.display = "none";
}

function replaceQandA() {
    try {
        searchindex = parseInt(document.getElementById("QusNum").value, 10) - 1;
        console.log(searchindex)
        console.log(contentArray)
        console.log("Question logged", contentArray[searchindex].my_question)

        document.getElementById("flashquestion").innerHTML = contentArray[searchindex].my_question

        document.getElementById("flashanswer").innerHTML = contentArray[searchindex].my_answer
        console.log("Answer logged", contentArray[searchindex].my_answer)

    } catch {
        alert("A PICNIC error has occured, please input an integer within the range of the amount of items in the local storage array to resolve this")
    }


}

function cardbefore() {
    try {
        console.log(contentArray)
        console.log(document.getElementById("flashquestion").textContent)
        searchindex = document.getElementById("flashquestion").textContent
        console.log(searchindex)

        console.log(contentArray)
        console.log("Question logged", contentArray.find((x) => x.my_question == "Question 1"))
        questionFind = contentArray.findIndex((x) => x.my_question == document.getElementById("flashquestion").innerText)
        console.log(questionFind)
        questionFind = questionFind - 1
        console.log(questionFind)
        document.getElementById("flashquestion").innerHTML = contentArray[questionFind].my_question

        document.getElementById("flashanswer").innerHTML = contentArray[questionFind].my_answer
        console.log("Answer logged", contentArray[questionFind].my_answer)
        hideanswer()

    } catch {
        alert("A PICNIC error has occured, please ensure that you have a flashcard in this integer position")
    }

}

function nextcard() {
    try {
        console.log(contentArray)
        console.log(document.getElementById("flashquestion").textContent)
        searchindex = document.getElementById("flashquestion").textContent
        console.log(searchindex)

        console.log(contentArray)
        console.log("Question logged", contentArray.find((x) => x.my_question == "Question 1"))
        questionFind = contentArray.findIndex((x) => x.my_question == document.getElementById("flashquestion").innerText)
        console.log(questionFind)
        questionFind = questionFind + 1
        console.log(questionFind)
        document.getElementById("flashquestion").innerHTML = contentArray[questionFind].my_question

        document.getElementById("flashanswer").innerHTML = contentArray[questionFind].my_answer
        console.log("Answer logged", contentArray[questionFind].my_answer)
        hideanswer()

    } catch {
        alert("A PICNIC error has occured, please ensure that you have a flashcard in this integer position")
    }

}

function randomcard() {
    loops = 0
    randomcardchoose(loops)
}

function randomcardchoose(cycle) {
    try{questionFind = contentArray.findIndex((x) => x.my_question == document.getElementById("flashquestion").innerText)
    min = 1
    max = contentArray.length;
    rand = Math.floor(Math.random() * (max - min + 1));
    console.log(rand)
    if (rand == questionFind) {
        console.log("another roll initiated")
        cycle = cycle + 1
        console.log("cycles:",cycle)
        
        if (cycle == 300){
            window.alert("randomisation of selected flashcard aborted, please try adding more flashcards to remedy this error")
        } else{
            randomcardchoose(cycle)
        }
        
        
    } else{
        document.getElementById("flashquestion").innerHTML = contentArray[rand].my_question

        document.getElementById("flashanswer").innerHTML = contentArray[rand].my_answer
        console.log("Answer logged", contentArray[rand].my_answer)
        hideanswer()

    }}
    catch{
        window.alert("A PICNIC error has occured, to fix this please create a flashcard.")
    }

    
}