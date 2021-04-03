// carrega os primeiros comandos
window.onload = function() {
iniciar(); //inicializa os comandos e variaveis
setInterval(principal, 1000 / 60); // roda o jogo dentro do laço
      }

      function iniciar() {
        folhaDesenho = document.getElementById("folha");
        areaDesenho = folhaDesenho.getContext("2d");

        larguraCampo = 700;
        alturaCampo = 600;
        larguraLinha = 10;
        larguraBola = 12;
        alturaRaquete = 70;

        efeitoRaquete = 0.3;
        velocidadeJogador2 = 4;

        posicaoBolaX = posicaoBolaY = 100;
        velocidadeBolaPosicaoX = velocidadeBolaPosicaoY = 4;
        posicaoJogador1 = posicaoJogador2 = 225;
        pontuacaoJogador1 = pontuacaoJogador2 = 0;

        folhaDesenho.addEventListener("mousemove", function(e){
          posicaoJogador1 = e.clientY - alturaRaquete / 2;
        });
      }

      function principal() {
        desenhar();
        calcular();
      }

      function desenhar() {
        //Campo
        areaDesenho.fillStyle = '#191970';
        areaDesenho.fillRect(0,0,larguraCampo,alturaCampo);
        //Linha central
        areaDesenho.fillStyle = '#ffffff';
        areaDesenho.fillRect(larguraCampo/2- larguraLinha/2,0,larguraLinha,alturaCampo);
        // Raquetes
        areaDesenho.fillRect(2,posicaoJogador1,larguraLinha,alturaRaquete);
        areaDesenho.fillRect(larguraCampo-(larguraLinha+2),posicaoJogador2,larguraLinha,alturaRaquete);
        // Bola
        areaDesenho.fillRect(posicaoBolaX - larguraBola/2, posicaoBolaY - larguraBola/2, larguraBola, larguraBola);
        // escrever pontuaçao jogador
        areaDesenho.fillText("Humano - " + pontuacaoJogador1 + " pontos", 100, 50);
        areaDesenho.fillText("Computador - " + pontuacaoJogador2 + " pontos", larguraCampo - 200, 50);
      }

      function calcular() {
        posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
        posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;

        // Verifica lateral superior
        if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
          velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
        }

        // Verifica lateral Inferior
        if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) {
          velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
        }

        // Verifica se o Jogador 2 fez um ponto
        if(posicaoBolaX < 0){
          if(posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete){
              // Rebater a bola
              velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

              var diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2);
              velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;

          } else {
            // Pontos do jogador 2
            pontuacaoJogador2 = pontuacaoJogador2 + 1
            continuar();
          }
        }

        // verifica se o jogador 1 fez Ponto
        if(posicaoBolaX > larguraCampo) {
          if(posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete){
            // rebater a Bola
            velocidadeBolaPosicaoX = - velocidadeBolaPosicaoX;

            var diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
            velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        } else {
            // pontos jogador 1
            pontuacaoJogador1 = pontuacaoJogador1 + 1;
            continuar();
          }
        }

        // Atualiza a posição do jogador 2
        if(posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY) {
          posicaoJogador2 = posicaoJogador2 + velocidadeJogador2;
        } else{
          posicaoJogador2 = posicaoJogador2 - velocidadeJogador2;
        }
      }

      function continuar(){
        // Colocar no centro
        posicaoBolaX = larguraCampo / 2;
        posicaoBolaY = alturaCampo / 2;
        velocidadeBolaPosicaoX = - velocidadeBolaPosicaoX;
        velocidadeBolaPosicaoY = 3;
     }