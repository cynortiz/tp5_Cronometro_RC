let cronometro;
let segundos = 0;
let minutos = 0;
let horas = 0;
let enPausa = true;

function iniciarCronometro() {
  if (enPausa) {
    enPausa = false;
    cronometro = setInterval(actualizarCronometro, 1000);
  }
}

function pausarCronometro() {
  enPausa = true;
  clearInterval(cronometro);
}

function resetearCronometro() {
  enPausa = true;
  clearInterval(cronometro);
  segundos = 0;
  minutos = 0;
  horas = 0;
  actualizarCronometro();
}

function actualizarCronometro() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }

  const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
  const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
  const formatoHoras = horas < 10 ? `0${horas}` : horas;

  document.getElementById("cronometro").innerText = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

// inicializar el cronometro
resetearCronometro();
