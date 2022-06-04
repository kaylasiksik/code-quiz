// Questions will be asked
const questions = [{
    id: 0,
    q: "1. What is a syntax error?",
    a: [{ text: "An error due to undefined objects", isCorrect: false },
        { text: "An error due to user error", isCorrect: false },
        { text: "An error due to language rules being broken.", isCorrect: true },
        { text: "An error due to unsound logic.", isCorrect: false }
    ]

},
{
    id: 1,
    q: "2. What would 2*2+'4' equate to?",
    a: [{ text: "4'4'", isCorrect: false, isSelected: false },
        { text: "4444", isCorrect: false,  isSelected: false },
        { text: "6", isCorrect: false,  isSelected: false },
        { text: "44", isCorrect: true,  isSelected: true  }
    ]

},
{
    id: 2,
    q: "3. Who wrote the first algorithm meant to be computed by a machine?",
    a: [{ text: "Alan Turing", isCorrect: false , isSelected: false },
        { text: "Carl Gauss", isCorrect: false, isSelected: false  },
        { text: "Ada Lovelace", isCorrect: true, isSelected: true  },
        { text: "Isaac Newton", isCorrect: false, isSelected: false  }
    ]

},
{
    id: 3,
    q: "4. What is the binary number representation for the number 2?",
    a: [{ text: "0011", isCorrect: false , isSelected: false },
        { text: "0010", isCorrect: true, isSelected: true  },
        { text: "0001", isCorrect: false, isSelected: false  },
        { text: "0101", isCorrect: false, isSelected: false  }
    ]

},
{
    id: 4,
    q: "5. What is term for the default behavior used to move declarations to the top of the current scope?",
    a: [{ text: "hoisting", isCorrect: true , isSelected: true },
        { text: "sorting", isCorrect: false, isSelected: false  },
        { text: "pushing", isCorrect: false, isSelected: false  },
        { text: "raising", isCorrect: false, isSelected: false  }
    ]

}

]

	
// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = questions[id].a[0].text;
op2.innerText = questions[id].a[1].text;
op3.innerText = questions[id].a[2].text;
op4.innerText = questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = questions[id].a[0].isCorrect;
op2.value = questions[id].a[1].isCorrect;
op3.value = questions[id].a[2].isCorrect;
op4.value = questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = rgb(208, 208, 208);
    op2.style.backgroundColor = rgb(154, 208, 186);
    op3.style.backgroundColor = rgb(154, 208, 186);
    op4.style.backgroundColor = rgb(154, 208, 186);
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = rgb(154, 208, 186);
    op2.style.backgroundColor = rgb(208, 208, 208);
    op3.style.backgroundColor = rgb(154, 208, 186);
    op4.style.backgroundColor = rgb(154, 208, 186);
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = rgb(154, 208, 186);
    op2.style.backgroundColor = rgb(154, 208, 186);
    op3.style.backgroundColor = rgb(208, 208, 208);
    op4.style.backgroundColor = rgb(154, 208, 186);
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = rgb(154, 208, 186);
    op2.style.backgroundColor = rgb(154, 208, 186);
    op3.style.backgroundColor = rgb(154, 208, 186);
    op4.style.backgroundColor = rgb(208, 208, 208);
    selected = op4.value;
})

// Grabbing the evaluate button
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

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
};
})