// 'use strict';

// let score=0;

// function firstFiveQuest(){

//     alert('welcome to my website');
//     let y=prompt('whats your name ?');
//     alert ('hello '+ y +' lets start guessing game ;)');

// let n1 = prompt ('Do I live in Zarqa ?' );
// n1=n1.toLowerCase();

// if (n1==='no' || n1==='n'){

//     alert ('correct Answer');
//     score++;

// }
// else if (n1 ==='yes' || n1 === 'y'){
//     alert('No, Your Answer was wrong !! i live in Amman');
// }
// else{
//     alert('you should select yes or no !!');
// }


// let n2 = prompt (' Do I like Reading novels?' ).toUpperCase();
// console.log(typeof n2);


// if (n2==='NO' || n2==='N'){
//     alert('Thats Right');
//     score++;
// }
// else if (n2==='YES'){
//     alert('No , i dont like it')
// }

// else{
//     alert('you should select yes or no !!');
// }


// let n3 = prompt ('Do I have Iphone Mobile ?' );
// n3=n3.toLowerCase();
// console.log(n3);
// if (n3==='yes'){
// alert('Thats Right , i have Iphone mobile');
// score++;

// }
// else if (n3==='no')
//  {
//     alert ('your answer is wrong , i have Iphone Mobile');
// }
// else {
//     alert('you should select yes or no !!');
// }




// let n4 = prompt ('Do I Swim Very Well ?' ).toUpperCase();

// if (n4==='NO'){
// alert ('Thats right , I dont swim very well >_<');
// score++;
// }
// else if (n4==='YES'){
// alert ('Wrong answer')
// }

// else{
//     alert('You must get to know me more !!')
// }


// let n5 = prompt ('Do I like The Programming ? ' );
// console.log(n5);
// n5=n5.toLocaleLowerCase();

// if(n5==='yes'){
//     alert('Thats Correct Answer ^_^ ');
//     score++;
// }

// if(n5==='no'){
//     alert('Wrong Answer , I like The Programming ^_^ ')
// }

// else{
//     alert('you should select yes or no !!');
// }

// }


// function numberGuess(){
// for ( let x=1; x<=4 ; x++) {

//  let numUser = prompt(' Guess The Number Please ? hint : the number is between 0-10');
//  numUser=Number(numUser);
    
//  if(numUser === 4){
//     alert('This Is The Correct Number');
//     score++;
//     break;
//  }
//  else if(numUser < 4){
//     alert('too low');
//  }
//  else if (numUser > 4){
//     alert('too high');
//  }

//  if (x === 4){
//     alert('You finished your attempts, The Correct Number Is 4');
//  }
// }

// }



// function guessCar(){
// let myCar=['toyota','lexus','bmw','ford','mercedes','kia'];


// for(let index=0 ; index < 6 ; index++){ //attempts

//     let userCar = prompt('Guess what is my favorite cars ?');
//     userCar=userCar.toLocaleLowerCase();

//     if(userCar === myCar[1] || userCar === myCar[2] || userCar === myCar[4]){
//     alert('Correct Answer');
//     score++;
//     break;
//     }
    
//     if(index === 5){
//     alert('You finished your attempts, The Correct Answer Is ' + myCar[1] + ' ,' + myCar[2] + ' ,' + myCar[4]);
//     }

// }

// }



// firstFiveQuest();
// numberGuess();
// guessCar();

// alert('your score is '+ score);