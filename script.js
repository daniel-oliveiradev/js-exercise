let num1 = Number(prompt("Informe o primeiro número: "))
let num2 = Number(prompt("Informe o segundo número"))

alert("A soma dos números é: "+ (num1 + num2)) 
alert("A subtração dos números é: "+ (num1 - num2)) 
alert("A multiplicação dos números é: "+ (num1 * num2)) 
alert("A divisão dos números é: "+ (num1 / num2).toFixed(2))
alert("O resto da divisão dos números é: "+ (num1 % num2)) 

let sum = num1 + num2

if((sum % 2) == 0){
  alert("A soma dos números é par!")
}else{
  alert("A soma dos números é ímpar!")
}

if(num1==num2){
  alert("Os número inseridos são iguais.")
}else{
  alert("Os número insertidos são diferentes.")
}