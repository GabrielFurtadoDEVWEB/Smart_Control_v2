//const nome = prompt("Como deseja ser chamado?");


const dia = 
`Olá, ${nome}! 
${new Date().toLocaleString('pt-BR', {weekday: 'long'})}, 
${new Date().toLocaleString('pt-BR', {dateStyle: 'short'})}`
document.getElementById('dia').innerText = dia;

setInterval(() => {
    document.getElementById("relogio").innerText =
    new Date().toLocaleString('pt-BR', {
        timeStyle: 'short'
    })

}, 1 * 1000)

const fuso = new Date().toLocaleString('pt-BR', {
    timeZoneName: 'longOffset'
  });
  
  document.getElementById('fuso').innerText = `(${fuso.slice(-6)})`;

  