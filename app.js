(12 < 13 ? console.log('ok ji chal gyr'): console.log('hum nhi clenge'))


let a = 12;

a += 12
console.log(a)

a -= 12
console.log(a)

a *= 2;
console.log(a)

a /= 2
console.log(a)

a %= 2 
console.log(a)



a = 12 
console.log(a)



if(12 == "12"){
    console.log('true')
}
else{
    console.log('false')
}


if(12 === "12"){
    console.log('true ==')
}
else{
    console.log('false === ')
}

if(12 !== "12"){
    console.log('true')
}
else{
    console.log('false')
}



// Ek for loop likh jo 1 se 10 tak ke numbers console me print kare.
for(let a = 1 ; a < 11; a++ ){
    console.log('Hey ' + a)
}



// Ek for loop likh jo 2 ke table (2, 4, 6, ... 20) print kare.

for(let a = 1; a<=10; a++){
    console.log(a * 2) 
}






// Ek for loop likh jo 1 se 100 tak ke numbers ka sum nikale aur print kare.

let sum = 0;

for(let a = 1; a<=100;a++){
    sum = sum + a
}

console.log(sum + " Total Sum")



// Ek for loop likh jo reverse counting (10 se 1 tak) print kare.


for(let a = 10; a>0; a-- ){
    console.log(a + " Hey dev")
}


// Ek for loop likh jo 1 se 50 tak ke saare even numbers (2, 4, 6, ...) print kare.

for(let a=1; a<=50; a++){
    if( a % 2 === 0){
        console.log(a)
    }
}







// Ek for loop likh jo 1 se 10 tak ke numbers ka square print kare (jaise 1, 4, 9, 16, ...).

for(let a = 1 ; a<=10; a++){
    console.log(a*a + " **** ")
}




// Ek for loop likh jo 1 se 10 tak numbers ko reverse me (10, 9, 8, ... 1) print kare.


for(let a = 10; a>=0; a--){
    console.log(a + " revarce")
}





// Ek for loop likh jo 1 se 20 tak ke odd numbers (1, 3, 5, ...) print kare.

for(let a = 1 ; a<=20;a++){
    if(a % 2 !== 0){

        console.log(a + " ODD")
    }
}




// Ek for loop likh jo 1 se 10 tak ke numbers ke cube print kare.

for(let a = 1; a<=10; a++){
    console.log(a**3 + " Cube")
}




// Ek for loop likh jo 1 se 10 tak ke factorial ka result nikaale (1 × 2 × 3 × ... × 10).

let fec = 1
for(let a = 1;a<=10;a++){
    fec = fec * a
}

console.log(fec)




// Print numbers from 1 to 10 Loop from 1 to 10 and print each number.

for(let i = 1;i<=10;i++){
    console.log(i+'---')
}



// Print only even numbers from 1 to 20 Use a loop and condition to print only even ones.

for(let i = 1; i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}



// Print numbers from 10 to 1 Reverse loop with a decrement.

for(let i = 10 ; i>0;i--){
    console.log(i)
}



// Print the word "Yes" 5 times Repeat using a loop.

for(let i = 1 ; i<=5; i++){
    console.log(`${i} Yes`)
}


// Print whether numbers from 1 to 10 are even or odd For each number, check: even → "Even", else → "Odd"

for(let i=1; i<=10;i++){
    if(i % 2 == 0){
        console.log(`Even number ${i}`)
    }else{
        console.log(`ODD number ${i}`)

    } 
}



// Ask user for a number and say if it's positive or negative Use prompt) and a conditional.


// let num = prompt('Number btao')
// num= parseInt(num)
// if(num >= 0){
//     console.log('Positive')
// }
// else{
//     console.log("Nagitive")
// }





// AGE

// let age = 18;
// age = parseInt(age)

// let c = prompt("Age Btao");

// if(c === null){
//     console.log("Button glat press kiya h")
// }else{

//     if(c.trim() === ''){
//         console.log('B*** shhai likhh na')
//     }
//     else{
//         c=Number(c.trim());
//         if(isNaN(c)){
//             console.log("Bhai number dede yrr")
//         }
//         else{
//             if(c >= age){
//                 console.log('Age Ok')
//             }
        
//             else{
//                 console.log("Age km h")
//             }
//         }
//     }
// }










// 7. Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Age braao")

// if(age === null){
//     console.log("Cancel Press mt kro")
// }
// else if(age.trim() === ""){
//     console.log("Ok Press mt kro")
// }
// else{
//     age = Number(age)
//     if(age >= 18){
//         console.log("Vote kr skte ho")
//     }else{
//         console.log("Vote nhi kr skte ho")
//     }
// }




// Print multiplication table of 5 Use loop to print 5 × 1 to 5 × 10.
for(let i = 1;i<=10;i++){
    console.log( `5 * ${i} = ${i*5}`)
}







// Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.

let counter = 0;

for(let i = 1 ; i <= 16; i++){
    if(i > 8){
        counter++
    }
}
console.log(counter)





// Ask user for password and print access status Hardcoded correct password. Compare with user input.
// let password = "dev";
// let says = prompt("Password")

// if(says === null){
//     console.log("press cansel");
// }else if(says.trim() === ''){
//     console.log("press ok");
// }
// else{
//     if(says=== password){
//         console.log("Ok password")
//     }else{
//         console.log("password wrong")
//     }
// }






// Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”


// let attempt = 0
// let password = "dev";
// let says = prompt("Password")


// attempt++
// while(says !== password){
//     if(attempt === 3){
//         console.log('Account locked and bha** m jaao')
//         break
//     }
//     says = prompt("Wrong Password try again")
//     console.log(says)
//     attempt++
// }





function accd(){
    console.log("Hello Dev Accde")
}

accd()



function dev(a,b){
    console.log(a + b)
}

dev(10,10)



function hey(guist = 'guist'){
    console.log(`Hey ${guist}`)
}
hey()



let frout = ['apple','mango','banana']

frout.push("dsd")
frout.unshift("dsd")

console.log(frout.length)







// Start dom 
// dom ke 4 piller hota h 

// html selecter
// html change
// html text change
// event lisner



let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let plus = document.querySelector('.plus')
let min = document.querySelector('.min')

h1.style.color='gold'
h1.style.fontWeight='900'



// h1.innerHTML='Changed'


h1.addEventListener('click', function(){
    console.log('CLicked')
})

let count = 0;
plus.addEventListener('click', function(){
    if(count< 10){
        count++
        h1.innerHTML = count

        if(count === 10){
            p.innerHTML='Limit Cross'
        }
    }
    
    
     
})

min.addEventListener('click', function(){
    if(count > 0){
    count--
        h1.innerHTML = count
        if(count < 10){

            p.innerHTML=''
       
        }
    }
   
    })
    

