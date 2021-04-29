let misol = +prompt("Yechmoqchi bo'lgan misollar soni")

function randomNum() {
    return Math.trunc(Math.random() * 10)
}

function ex() {
    let a = randomNum()
    let b = randomNum()
    let answer = +prompt(`${a} + ${b} = ?`)
    if(answer == `${a+b}`){
        console.log("To'g'ri javob - " + answer);
    }else{
        console.log(`Sizning jovob notog'ri -  ${answer}  ! , To'g'ri javob  ${a+b} !`);
    }
}


for(i=1; i<misol; i++){
    ex()
}

ex()
