//ill need to make a function that calculates net salary it needs to take in basic salary and benefits

// then ill make the tax brackets as not everyone is taxed equaly
const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})

function calculateNetSalary(basicSalary,benefits){
    

 //now we initalise the tax brackets in an array
 const taxBrackets =[
    //we have our first bracket here we have three properties minincome maxincome and the tax rate
     {minIncome: 0,  maxIncome:24000,taxRate: 0.1},
     {minIncome:24001, maxIncome:32333, taxRate:0.24},
     {minIncome:32334, maxIncome:500000, taxRate :0.3 },
     {minIncome:500001, maxIncome:800000, taxRate:0.325},
     {minIncome:800001, maxIncome:1000000, taxRate:0.35},
     //the rich are not taxed
 ];
 // gross salary if found by
 const grossSalary= basicSalary + benefits;
 //tax calculation
 let tax =0;
 for (const bracket of taxBrackets){
    if (grossSalary > bracket.maxIncome){
    const taxableIncome = 
    // this part ensures the taxable income does not exceed the range defined by taxbrackets
    Math.min(
        grossSalary - bracket.minIncome,bracket.maxIncome -bracket.minIncome)
        //multiplies taxable income by tax rate specified 
         tax += taxableIncome * bracket.taxRate;
    
    }
    else {
        break
    }
 }
 ///constants that neverchange
 const nhifRate= 0.025;
 const nssfRate= 0.06;
 const nhifDeduction = grossSalary * nhifRate;
 const nssfDeduction = grossSalary * nssfRate;

 ///finally net salary
 const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction ;
 return netSalary;
};
 rl.question("Enter basic salary:",(basicSalary)=>{
    rl.question("Enter benefits:",(benefits)=>{
        const netSalary = calculateNetSalary(parseInt(basicSalary),parseInt(benefits));
        console.log("Net Salary", netSalary);
        rl.close();
    })
 })
//inputing any value in and running node we can see our net salary


// asign netsalary to be the function calculateNetSalary



