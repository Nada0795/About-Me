'use strict';

let score=0;


let n1 = prompt ('Did I study network engineering ?' );
n1=n1.toLowerCase();

if (n1==='yes' || n1==='y'){

    alert ('you are correct !');
    score++;

}
else if (n1 ==='no' || n1 === 'n'){
    alert('You are wrong !');
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



for ( let x=1; x<=4 ; x++) {

 let numUser = prompt(' Guess The Number Please ? hint:the number is between 0-10');
 numUser=Number(numUser);
    
 if(numUser === 4){
    alert('This Is The Correct Number');
    score++;
    break;
 }
 else if(numUser < 4){
    alert('too low');
 }
 else if (numUser > 4){
    alert('too high');
 }

 if (x === 4){
    alert('You finished your attempts, The Correct Number Is 4');
 }
}





let myCar=['toyota','lexus','bmw','ford','mercedes','kia'];


for(let index=0 ; index < 6 ; index++){ //attempts

    let userCar = prompt('Guess what is my favorite cars ?');
    userCar=userCar.toLocaleLowerCase();

    if(userCar === myCar[1] || userCar === myCar[2] || userCar === myCar[4]){
    alert('Correct Answer');
    score++;
    break;
    }
    
    if(index === 5){
    alert('You finished your attempts, The Correct Answer Is ' + myCar[1] + ' ,' + myCar[2] + ' ,' + myCar[4]);
    }

}

alert('your score is '+ score);

