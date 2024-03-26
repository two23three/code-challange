
// this is what enables the user input speed
const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})

const inputSpeed =()=>{
    // this is what enables the user input speed
 rl.question("SPEED IN KM/HR",(speedInput)=>{
    //checks if input given is in correct format
    const speed = parseInt(speedInput);
    if (isNaN(speed)|| speed<0){
        console.log("Invalid");
    } else{
        calculateDiscreditPoints(speed);
    }
    rl.close();

      });
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
    console.log(" you are ok safe journey");
    console.log (`points:${discreditPoints}`);
    }
    //if the speed is more than speed limit then
    else{
       const overSpeed = speed -speedLimit;
       //the  code above gives the value that we have overspeeded with


       discreditPoints = Math.floor(overSpeed/kmToDiscreditPoint);
       //in order to get the total amount of discredited points we have our overspeed divided the 
       console.log(`points:${discreditPoints}!`);
    //alerts the user on the discredit points accumulated
    if (discreditPoints>=pointsMax){
        console.log("License revoked!!! speed kills please be carefull");
    
    }
    //when the points surpass 12 the liscence is revoked
    }
}
inputSpeed();
