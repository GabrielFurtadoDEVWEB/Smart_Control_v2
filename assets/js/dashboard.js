const nome = prompt("Como deseja ser chamado?");

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

// ===== DARK MODE / LIGHT MODE =====
// ===== DARK MODE / LIGHT MODE =====
const toggle = document.querySelector("#toggle");
const logo = document.querySelector("#logo");
 
const LOGO_CLARO = "assets/Images/Logo.png";
const LOGO_ESCURO = "assets/Images/Logo-dark.png";
 
function aplicarTema(escuro) {
 
    document.body.classList.toggle("dark-mode", escuro);
 
    if (logo) {
        logo.src = escuro ? LOGO_ESCURO : LOGO_CLARO;
    }
 
}
 
if (toggle) {
 
    // Aplica o tema salvo (se existir) assim que a página carrega
    const temaSalvo = localStorage.getItem("tema");
 
    if (temaSalvo === "dark") {
        toggle.checked = true;
        aplicarTema(true);
    } else {
        aplicarTema(false);
    }
 
    toggle.addEventListener("change", function () {
 
        aplicarTema(toggle.checked);
        localStorage.setItem("tema", toggle.checked ? "dark" : "light");
 
    });
 
}
 
 
const campoBusca = document.querySelector("#campoBusca");

if (campoBusca) {

    campoBusca.addEventListener("input", function () {

        const textoDigitado = campoBusca.value.toLowerCase();

        const linhas = document.querySelectorAll("tbody tr");

        linhas.forEach(function (linha) {

            const nome = linha
                .querySelector("td")
                .textContent
                .toLowerCase();

            if (nome.includes(textoDigitado)) {
                linha.style.display = "";
            } else {
                linha.style.display = "none";
            }

        });

    });

}