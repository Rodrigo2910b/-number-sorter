const raffleButton = document.querySelector("#raffle");


function raffle() {
  //input com valor minimo 
  const min = Math.ceil(document.querySelector("#between").value);
    //input com valor maximo 
  const max = Math.floor(document.querySelector("#and").value);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  if(max <= min) {
    //alerte 
  window.alert("Erro, o valor minimo tem que ser menor que o valor maxiomo ")
  }
  else{
    window.alert(result)
  }

  
}

raffleButton.addEventListener("click", raffle)