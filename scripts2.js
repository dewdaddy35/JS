function userInfo(){
    let userName=prompt("Enter your name");
    let email=prompt("Enter your email");
    let salary=prompt("Enter your monthly Salary");
    let total = Number(salary)*12;
    console.log(userName, email);
    console.log(total);
}

//Function to adding up two values
//function sum(){
//    let a = number(prompt("Enter a:"));
//    let b = number(prompt("Enter b:"));
//
//    let sum =a+b;
//    console.log(sum);
//}


//create a function that gets two grades (0-100) and calculates the average

function calculateAverage(){
    let a =Number(prompt("Enter first grade"));
    let b =Number(prompt("Enter sencond grade"));
    
    let sumAverage= (a + b) / 3;
    console.log(sumAverage);

document.getElementById("results").innerHTML+=`
<li class ="error">
    <p>${a}</p>
    <p>${b}</p>
    <p>${sumAverage}</p>
</li>
`;
}