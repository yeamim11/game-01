let one = document.querySelector(".one") 
let input1 = document.querySelector(".one input") 
let button1 = document.querySelector(".one button") 
let error1 = document.querySelector(".one span") 
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let two = document.querySelector(".two") 
let had2 = document.querySelector(".two h2") 
let input2 = document.querySelector(".two input") 
let button2 = document.querySelector(".two button") 
let error2 = document.querySelector(".two span") 
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let three = document.querySelector(".three") 
let input3 = document.querySelector(".three input") 
let button3 = document.querySelector(".three button") 
let error3 = document.querySelector(".three span") 
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let four = document.querySelector(".four") 
let had4 = document.querySelector(".four h2") 
let input4 = document.querySelector(".four input") 
let button4 = document.querySelector(".four button") 
let error4 = document.querySelector(".four span") 
let count4 = document.querySelector(".four p")
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let five = document.querySelector(".five") 
let had5 = document.querySelector(".five h2")
let p1value = document.querySelector(".five p") 

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 










button1.addEventListener("click", function(){
    if(input1.value==""){
    error1.innerHTML= "Enter Your Name"

    }else{
        one.style.display = "none"
        two.style.display = "flex"
        had2.innerHTML = input1.value

    }
})
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
button2.addEventListener("click", function(){
    if(input2.value==""){
        error2.innerHTML="Choos The Number Between 0-9"

    }else if (input2.value >=0 && input2.value <=9){
        two.style.display = "none"
        three.style.display = "flex"
    }else{
        error2.innerHTML="Choos The Number Between 0-9"

    }

})
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

button3.addEventListener("click", function(){
    if(input3.value==""){
         error3.innerHTML= "Enter Your Name.........!"

    }else{
        three.style.display = "none"
        four.style.display = "flex"
        had4.innerHTML = input3.value
    }
})
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
button4.addEventListener("click", function(){
    if(input4.value==""){
        error4.innerHTML= "guess the number between 0-9"

    }else if(input2.value == input4.value){
        four.style.display="none"
        five.style.display="flex"
        had5.innerHTML=`Player ${input3.value} win`
        count4.innerHTML = count
        
    }else{
        count = count-1
        count4.innerHTML = `chance left ${count}`
        if(count == 0){
            four.style.display="none"
            five.style.display="flex"
            had5.innerHTML=`Player ${input1.value} win`
            p1value.innerHTML=`player one value is ${input2.value}`

        }
    }
})



// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
let count = 5