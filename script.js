const raffleButton = document.querySelector("#raffle");


function raffle() {
  //input com valor minimo 
  const min = Math.ceil(document.querySelector("#between").value);
    //input com valor maximo 
  const max = Math.floor(document.querySelector("#and").value);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  if(min >= max) {
    //alerte 
  window.alert("Erro, o valor maximo tem que ser maior que o valor maximo ")
  }
  else{
    window.alert(result)
  }

  
}

raffleButton.addEventListener("click", raffle)