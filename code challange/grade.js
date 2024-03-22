//remeber to use  html to see functionality

// out firsst function allows the user to imput the grade
// then checks if input is in correct format
function Input(){
    const marks=(prompt("enter marks"))
    if(isNaN(marks)|| marks < 0 || marks>100){
        alert("INVALID INPUT ");
    }
  //if input is correct it shows the grade 
    else {
        const grade= calculateTheGrade(marks)
        alert (`Grade:${grade}`);
    }

}
//function contains all of the grading details
function calculateTheGrade(marks){
    if(marks>79){
        return "A"
    }
    else if (marks>=60 && marks <= 79){
        return "B"}
    else if(marks>= 50 && marks <=59 ){
        return "C"
    }
    else if (marks >= 40 && marks <= 49){
        return "D"
    }
    else{
        return "E"
    }

}

Input();