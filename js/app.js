// Questions 
// Do you want to learn a new skills?
// do you have the ability to work under pressure ? 
// Do you like programming??
// Do you want to be software developer?
// Are you ready to start with our course ?



'use strict';

let n1 = prompt ('Do you want to learn a new skills ?' );
n1=n1.toLowerCase();

if (n1==='yes' || n1==='y'){

    alert ('Good');

}
else if (n1==='no'){
    n1=n1.toUpperCase();
    console.log(n1);
}
else{
    alert('you should select yes or no !!');
}


let n2 = prompt (' Do you have the ability to work under pressure ?' );
console.log(n2);
n2=n2.toUpperCase();
console.log(n2);

if (n2==='NO' || n2==='N'){
    alert('why NO ? ')
}
else if (n2==='YES'){
    alert('Thats Great')
}



let n3 = prompt ('Do you like programming ?' );
n3=n3.toLowerCase();
console.log(n3);
if (n3==='yes'){
alert('me too');

}
else {
    alert ('why you dont like it ?');
}


let n4 = prompt ('Do you want to be software developer ?' );
n4=n4.toUpperCase();
if (n4==='NO'){
alert ('As you like');
}
else if (n4==='YES'){
alert ('wish you all the best')
}

else{
    alert('you should select yes or no !!')
}


let n5 = prompt ('Are you ready to start with our course ?' );
console.log(n5);
n5=n5.toLocaleLowerCase();

if(n5==='yes'){
    alert('Ok, lets start')
}

else{
    alert('Ok, Good Bye')
}

let numUser = prompt(' Write The Code Please');
numUser=Number(numUser);
for ( let x=1; x<4 ; x++) {
    
if(numUser===4){
    alert('This Is The Correct Code');
 break;
}

else if(numUser<4){
    alert('too low');
numUser=prompt('please try again');
}
else if (numUser>4){
    alert('too high');
    numUser=prompt('please try again');
}
if (x==3){
    alert('You finished your attempts, The Correct Code Is 4');
}
}




let userCar = prompt('Guess what is my favorite car ?');
userCar=userCar.toLocaleLowerCase();
let myCar=['toyota','lexus','bmw','ford','mercedes','kia'];


for(let index=0;index < myCar.length;index++){

if(userCar===myCar[4]){
    alert('Correct Answer,My Favorite Car Is mercedes');
    break;
}
else if (userCar!==myCar[4]){
    alert=('Try Again');
    userCar = prompt('Guess what is my favorite car ?');
    
}

}

if(index==myCar.length){
    alert('You finished your attempts, The Correct Answer Is mercedes');
    
}
alert(userCode+' your score is '+userCar);