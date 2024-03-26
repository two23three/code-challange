//ill need to make a function that calculates net salary it needs to take in basic salary and benefits

// then ill make the tax brackets as not everyone is taxed equaly
const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})

function calculateNetSalary(basicSalary,benefits){
    
 //after heavy reaserch
 //now we initalise the tax brackets in an array
 const taxBrackets =[
    //we have our first bracket here we have three properties minincome maxincome and the tax rate
    //it goes through every bracket its an itteration
    // looks if the gross salary is more than max amount in 
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
 ///for of
 for (const bracket of taxBrackets){
    if (grossSalary > bracket.maxIncome){
    const taxableIncome = 
    // this part ensures the taxable income does not exceed the range defined by taxbrackets
    Math.min(
        grossSalary - bracket.minIncome,bracket.maxIncome -bracket.minIncome)
        //multiplies taxable income by tax rate specified 
         tax += taxableIncome * bracket.taxRate;
         console.log(tax);
    }
    else {
        break
    }
   
 }
   // the array method is esier to use
 ///nhif array
 const nhifDeduction=[
    {minIncome: 0,  maxIncome:5999,nhifDeduction:150},
    {minIncome:6000, maxIncome:7999,nhifDeduction:400},
    {minIncome:8000 ,maxIncome:11999, nhifDeduction:500},
    {minIncome:12000, maxIncome:14999, nhifDeduction:600},
    {minIncome:15000, maxIncome:19999,nhifDeduction:750},
    {minIncome: 20000,  maxIncome:24999,nhifDeduction:850},
    {minIncome:30000, maxIncome:34999,nhifDeduction:900},
    {minIncome:35000, maxIncome:39999, nhifDeduction:950},
    {minIncome:40000, maxIncome:44999, nhifDeduction:1000},
    {minIncome:45000, maxIncome:49999,nhifDeduction:1100},
    {minIncome: 50000 , maxIncome:59999,nhifDeduction:1200},
    {minIncome:60000, maxIncome:69999,nhifDeduction:1300},
    {minIncome:70000, maxIncome :79999 ,nhifDeduction:1400},
    {minIncome:80000, maxIncome:89999, nhifDeduction:1500},
    {minIncome:90000, maxIncome:99999, nhifDeduction:1600},
    {minIncome:100000, maxIncome:1000000, nhifDeduction:1700}, 
 ]
 //looks if the gross salary is less then the mimum amount of the bracket then gives the nhif deduction ammount


 let nhifDeductionAmount = 0;
for (const bracket of nhifDeduction) {
    if (grossSalary >= bracket.minIncome && grossSalary <= bracket.maxIncome) {
        nhifDeductionAmount = bracket.nhifDeduction;
        break;
    }
}
//nssf is 6% deducted by the employer and the employee pays 6%
 const nssfRate= 0.06;
 
 const nssfDeduction = grossSalary * nssfRate;

 ///finally net salary
 const netSalary = (grossSalary - tax - nhifDeductionAmount - nssfDeduction).toFixed(2) ;
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
//gross 70000
//nhif 1400
//nssf 4200
//tax 4399.68
//net salary 60000.32

