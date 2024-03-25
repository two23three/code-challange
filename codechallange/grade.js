//enables prompts

const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})



//function contains all of the grading details
function calculateTheGrade(marks){
    let grade;
    if(marks>79){
        grade="A"
    }
    else if (marks>=60 && marks <= 79){
        grade= "B"}
    else if(marks>= 50 && marks <=59 ){
        grade="C"
    }
    else if (marks >= 40 && marks <= 49){
        grade="D"
    }
    else{
        grade= "E"
    }
    return grade
}

 //allows the user to input the grade
// then checks if input is in correct format
rl.question("Enter student marks between 0 and 100", (marks) => {
    const finalGrade = calculateTheGrade(parseInt(marks));
    console.log(`the student grade is: ${finalGrade}`);
    rl.close();
});
