//remeber to use the html file to see the functionality
// this is what enables the user input speed
const inputSpeed =()=>{
    // parseInt changes whatever input we have into a number if the input is not a number NaN
    // the user is alerted invalid same as when the input given is less than 0
     const speed = parseInt(prompt("SPEED IN KM/HR"));
    //checks if input given is in correct format
    if (isNaN(speed)|| speed<0){
        alert("Invalid");
    } else{
        const discreditPoints = calculateDiscreditPoints(speed);
    }
}
//we have various constants such as speedlimits the kms needed to discredit points along with maximum points
const speedLimit = 70
const kmToDiscreditPoint=5
const pointsMax=12;
let discreditPoints =0;

//calculate points based on speed of car
//call the function input speed to start the whole process
const calculateDiscreditPoints=speed =>{
    
    //if speed is less than speed limit alert user they are ok
    if (speed <=speedLimit){
    alert(" you are ok safe journey");
    alert (`points:${discreditPoints}`)
    }
    //if the speed is more than speed limit then
    else{
       const overSpeed = speed -speedLimit;
       //the  code above gives the value that we have overspeeded with


       discreditPoints = Math.floor(overSpeed/kmToDiscreditPoint);
       //in order to get the total amount of discredited points we have our overspeed divided the 
       alert(`points:${discreditPoints}!`);
    //alerts the user on the discredit points accumulated
    if (discreditPoints>=pointsMax){
        alert("License revoked!!! speed kills please be carefull");
    
    }
    //when the points surpass 12 the liscence is revoked
    return discreditPoints;
    }
}
inputSpeed();