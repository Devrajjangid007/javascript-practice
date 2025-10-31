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

