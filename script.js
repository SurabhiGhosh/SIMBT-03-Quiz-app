// Questions will be asked
const Questions = [{
    id: 0,
    q: "HTML stands for?",
    a: [{ text: "Hypertext Markup Language", isCorrect: true },
        { text: "Hypertext Machine Language", isCorrect: false },
        { text: "Hypertext Marking Language", isCorrect: false },
        { text: "Hightext Marking Language", isCorrect: false }
    ]

},
{
    id: 1,
    q: "How do we write comments in HTML?",
    a: [{ text: "</....>", isCorrect: false, isSelected: false },
        { text: "</.../>", isCorrect: false },
        { text: "<....!>", isCorrect: false },
        { text: "<!....>", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Which element is used for styling HTML5 layout?",
    a: [{ text: "jQuery", isCorrect: false },
        { text: "Javascript", isCorrect: false },
        { text: "CSS", isCorrect: true },
        { text: "PHP", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Which HTML tag is used to create an unordered list?",
    a: [{ text: "<ol>", isCorrect: false },
        { text: "<ul>", isCorrect: true },
        { text: "<li>", isCorrect: false },
        { text: "<ll>", isCorrect: false }
    ]

},
{
    id: 4,
    q: "which extension is used to save an HTML file?",
    a: [{ text: ".html", isCorrect: true },
        { text: ".hl", isCorrect: false },
        { text: ".css", isCorrect: false },
        { text: ".h", isCorrect: false }
    ]

}


]

var start = true;
 
function iterate(id) {
 
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
 
    // Getting the question
    const question = document.getElementById("question");

    question.innerText = Questions[id].q;
 
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
 
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
 
    var selected = "";
 
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
 
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
 
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
 
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
 
    //evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
 
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
 
if (start) {
    iterate("0");
}
 
// Next button
const next = document.getElementsByClassName('next')[0];
var id = 0;
 
next.addEventListener("click", () => {
    start = false;
    if (id < 4) {
        id++;
        iterate(id);
        console.log(id);
    }
 
})
