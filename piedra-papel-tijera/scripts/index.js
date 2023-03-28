function main() {
  const scoreJugador = document.querySelector(".score-jugador");
  const scoreMaquina = document.querySelector(".score-maquina");
  const scoreEmpates = document.querySelector(".score-empates");
  const ganadorTexto = document.querySelector(".ganador");
  const choices = document.querySelectorAll(".choice");

  const scores = {
    maquina: 0,
    jugador: 0,
    empates: 0,
  };

  function movimientoAleatorioMaquina() {
    const jugadas = ["piedra", "papel", "tijera"];
    const jugadaRandom = Math.floor(Math.random() * 3);
    return jugadas[jugadaRandom];
  }

  function determinarGanador(jugada, jugadaMaquina) {
    // console.log(jugada);
    // console.log(jugadaMaquina);
    if (jugada == jugadaMaquina) {
      scores.empates++;
      return "empate";
    }

    const jugadasGanadoras = {
      piedra: "tijera",
      papel: "piedra",
      tijera: "papel",
    }
    
    if (jugadasGanadoras[jugada] == jugadaMaquina) {
      scores.jugador++;
      return "jugador";
    }

    scores.maquina++;
    return "maquina";

    // if (jugada == jugadaMaquina) {
    //   scores.empates++;
    //   return "empate";
    // }

    // const jugadasGanadoras = [
    //   jugada == "piedra" && jugadaMaquina == "tijera",
    //   jugada == "papel" && jugadaMaquina == "piedra",
    //   jugada == "tijera" && jugadaMaquina == "papel",
    // ];
    // if (jugadasGanadoras.includes(true)) {
    //   scores.jugador++;
    //   return "jugador";
    // } else {
    //   scores.maquina++;
    //   return "maquina";
    // }

  }

  function actualizarScores() {
    scoreEmpates.textContent = scores.empates;
    scoreJugador.textContent = scores.jugador;
    scoreMaquina.textContent = scores.maquina;
  }

  function jugar(jugada) {
    const jugadaMaquina = movimientoAleatorioMaquina();
    const ganador = determinarGanador(jugada, jugadaMaquina);
    actualizarScores();

    if (ganador == "jugador") {
      ganadorTexto.textContent = "Ganaste!!!";
    } else if (ganador == "maquina") {
      ganadorTexto.textContent = "Perdiste!!!";
    } else {
      ganadorTexto.textContent = "Empate!";
    }
  }

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const jugada = choice.getAttribute("data-jugada");
      jugar(jugada);
    });
  });
}
main();
