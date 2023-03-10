const rgb = document.getElementById('rgb-color');
const button = document.getElementById('reset-game');
const bolls = document.getElementsByClassName('ball');
window.answer.innerText = 'Escolha a cor correta';
const placar = window.score;
let x = 0;

const result = (event) => {
  const resposta = window.answer;
  const evento = event.target;
  if (rgb.innerText === evento.style.backgroundColor) {
    resposta.innerHTML = 'Acertou!';
    placar.innerText = `${x += 3}`;
    return x + 3;
  }
  resposta.innerHTML = 'Errou! Tente novamente!';
};

const cores = () => {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  const cor = `rgb(${a}, ${b}, ${c})`;
  return cor;
};

function corAdivinhe() {
  const aleatorio = bolls[Math.floor(Math.random() * 6)];
  rgb.innerText = `${aleatorio.style.backgroundColor}`;
  rgb.style.background = rgb.innerText;
}

function boleta() {
  for (let i = 0; i < 6; i += 1) {
    bolls[i].style.backgroundColor = cores();
    bolls[i].addEventListener('click', result);
  }
  corAdivinhe();
  window.answer.innerText = 'Escolha a cor correta:';
}

function colorSelect() {
  if (bolls[0].style.backgroundColor) {
    return;
  }
  boleta();
}
colorSelect();

button.addEventListener('click', () => {
  if (bolls[0].style.backgroundColor) { boleta(); }
});
